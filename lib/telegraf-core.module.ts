import { DiscoveryModule, ModuleRef } from '@nestjs/core';
import {
  DynamicModule,
  Global,
  Inject,
  Module,
  OnApplicationShutdown,
  Provider,
  Type,
} from '@nestjs/common';
import {
  TelegrafModuleAsyncOptions,
  TelegrafModuleOptions,
  TelegrafOptionsFactory,
} from './interfaces';
import {
  TELEGRAF_BOT_NAME,
  TELEGRAF_MODULE_OPTIONS,
} from './telegraf.constants';
import { ListenersExplorerService, MetadataAccessorService } from './services';
import { telegrafStageProvider } from './stage.provider';
import {
  allBotsMap,
  telegrafAllBotsProvider,
} from './telegraf-all-bots.provider';
import { createBotFactory, getBotToken } from './utils';

@Global()
@Module({
  imports: [DiscoveryModule],
  providers: [ListenersExplorerService, MetadataAccessorService],
})
export class TelegrafCoreModule implements OnApplicationShutdown {
  constructor(
    @Inject(TELEGRAF_BOT_NAME)
    private readonly botName: string,
    private readonly moduleRef: ModuleRef,
  ) {}

  /**
   * Creates a TelegrafCoreModule with the given options.
   * 
   * @param {TelegrafModuleOptions} options - The options for the Telegraf module.
   * @returns {DynamicModule} A dynamic module with the provided options.
   */
  public static forRoot(options: TelegrafModuleOptions): DynamicModule {
    const telegrafBotName = getBotToken(options.botName);

    const telegrafBotNameProvider = {
      provide: TELEGRAF_BOT_NAME,
      useValue: telegrafBotName,
    };

    const telegrafBotProvider: Provider = {
      provide: telegrafBotName,
      useFactory: async () => {
        const bot = await createBotFactory(options);
        allBotsMap.set(telegrafBotName, bot);
        return bot;
      },
    };

    return {
      module: TelegrafCoreModule,
      providers: [
        {
          provide: TELEGRAF_MODULE_OPTIONS,
          useValue: options,
        },
        telegrafStageProvider,
        telegrafBotNameProvider,
        telegrafBotProvider,
        telegrafAllBotsProvider,
      ],
      exports: [
        telegrafStageProvider,
        telegrafBotNameProvider,
        telegrafBotProvider,
        telegrafAllBotsProvider,
      ],
    };
  }

  /**
   * Creates a TelegrafCoreModule with the given asynchronous options.
   * 
   * @param {TelegrafModuleAsyncOptions} options - The asynchronous options for the Telegraf module.
   * @returns {DynamicModule} A dynamic module with the provided asynchronous options.
   */
  public static forRootAsync(
    options: TelegrafModuleAsyncOptions,
  ): DynamicModule {
    const telegrafBotName = getBotToken(options.botName);

    const telegrafBotNameProvider = {
      provide: TELEGRAF_BOT_NAME,
      useValue: telegrafBotName,
    };

    const telegrafBotProvider: Provider = {
      provide: telegrafBotName,
      useFactory: async (options: TelegrafModuleOptions) => {
        const bot = await createBotFactory(options);
        allBotsMap.set(telegrafBotName, bot);
        return bot;
      },
      inject: [TELEGRAF_MODULE_OPTIONS],
    };

    const asyncProviders = this.createAsyncProviders(options);
    return {
      module: TelegrafCoreModule,
      imports: options.imports,
      providers: [
        ...asyncProviders,
        telegrafStageProvider,
        telegrafBotNameProvider,
        telegrafBotProvider,
        telegrafAllBotsProvider,
      ],
      exports: [
        telegrafStageProvider,
        telegrafBotNameProvider,
        telegrafBotProvider,
        telegrafAllBotsProvider,
      ],
    };
  }

  /**
   * Handles the application shutdown event.
   * 
   * @returns {Promise<void>} A promise that resolves when the bot is stopped.
   */
  async onApplicationShutdown(): Promise<void> {
    const bot = this.moduleRef.get<any>(this.botName);
    bot && (await bot.stop());
  }

  /**
   * Creates asynchronous providers for the Telegraf module.
   * 
   * @param {TelegrafModuleAsyncOptions} options - The asynchronous options for the Telegraf module.
   * @returns {Provider[]} An array of providers for the Telegraf module.
   */
  private static createAsyncProviders(
    options: TelegrafModuleAsyncOptions,
  ): Provider[] {
    if (options.useExisting || options.useFactory) {
      return [this.createAsyncOptionsProvider(options)];
    }
    const useClass = options.useClass as Type<TelegrafOptionsFactory>;
    return [
      this.createAsyncOptionsProvider(options),
      {
        provide: useClass,
        useClass,
      },
    ];
  }

  /**
   * Creates an asynchronous options provider for the Telegraf module.
   * 
   * @param {TelegrafModuleAsyncOptions} options - The asynchronous options for the Telegraf module.
   * @returns {Provider} A provider for the Telegraf module options.
   */
  private static createAsyncOptionsProvider(
    options: TelegrafModuleAsyncOptions,
  ): Provider {
    if (options.useFactory) {
      return {
        provide: TELEGRAF_MODULE_OPTIONS,
        useFactory: options.useFactory,
        inject: options.inject || [],
      };
    }
    // `as Type<TelegrafOptionsFactory>` is a workaround for microsoft/TypeScript#31603
    const inject = [
      (options.useClass || options.useExisting) as Type<TelegrafOptionsFactory>,
    ];
    return {
      provide: TELEGRAF_MODULE_OPTIONS,
      useFactory: async (optionsFactory: TelegrafOptionsFactory) =>
        await optionsFactory.createTelegrafOptions(),
      inject,
    };
  }
}
