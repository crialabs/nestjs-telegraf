import { ModuleMetadata, Type } from '@nestjs/common/interfaces';
import { Middleware, Telegraf } from 'telegraf';

export interface TelegrafModuleOptions {
  token: string;
  botName?: string;
  options?: Partial<Telegraf.Options<any>>;
  launchOptions?: Telegraf.LaunchOptions | false;
  include?: Function[];
  middlewares?: ReadonlyArray<Middleware<any>>;
}

/**
 * The `TelegrafModuleOptions` interface defines the configuration options for the `TelegrafModule`.
 * 
 * @property {string} token - The bot token.
 * @property {string} [botName] - The optional name of the bot.
 * @property {Partial<Telegraf.Options<any>>} [options] - The optional Telegraf options.
 * @property {Telegraf.LaunchOptions | false} [launchOptions] - The optional launch options or false to disable launching.
 * @property {Function[]} [include] - The optional array of modules to include for handling updates.
 * @property {ReadonlyArray<Middleware<any>>} [middlewares] - The optional array of middlewares to use.
 */
export interface TelegrafOptionsFactory {
  createTelegrafOptions():
    | Promise<TelegrafModuleOptions>
    | TelegrafModuleOptions;
}

export interface TelegrafModuleAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  botName?: string;
  useExisting?: Type<TelegrafOptionsFactory>;
  useClass?: Type<TelegrafOptionsFactory>;
  useFactory?: (
    ...args: any[]
  ) => Promise<TelegrafModuleOptions> | TelegrafModuleOptions;
  inject?: any[];
}
