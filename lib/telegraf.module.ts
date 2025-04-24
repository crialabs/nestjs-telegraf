import { Module, DynamicModule } from '@nestjs/common';
import { TelegrafCoreModule } from './telegraf-core.module';
import {
  TelegrafModuleOptions,
  TelegrafModuleAsyncOptions,
} from './interfaces';

/**
 * The `TelegrafModule` class is the main module for the `nestjs-telegraf` package.
 * 
 * This module provides methods to configure and initialize the Telegraf module with the given options.
 * It supports both synchronous and asynchronous configuration.
 */
@Module({})
export class TelegrafModule {
  /**
   * Configures the Telegraf module with the given options.
   * 
   * @param {TelegrafModuleOptions} options - The options for the Telegraf module.
   * @returns {DynamicModule} A dynamic module with the provided options.
   */
  public static forRoot(options: TelegrafModuleOptions): DynamicModule {
    return {
      module: TelegrafModule,
      imports: [TelegrafCoreModule.forRoot(options)],
      exports: [TelegrafCoreModule],
    };
  }

  /**
   * Configures the Telegraf module with the given asynchronous options.
   * 
   * @param {TelegrafModuleAsyncOptions} options - The asynchronous options for the Telegraf module.
   * @returns {DynamicModule} A dynamic module with the provided asynchronous options.
   */
  public static forRootAsync(
    options: TelegrafModuleAsyncOptions,
  ): DynamicModule {
    return {
      module: TelegrafModule,
      imports: [TelegrafCoreModule.forRootAsync(options)],
      exports: [TelegrafCoreModule],
    };
  }
}
