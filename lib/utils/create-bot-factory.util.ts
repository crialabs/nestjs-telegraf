import { Telegraf } from 'telegraf';
import { TelegrafModuleOptions } from '../interfaces';
import { Logger } from '@nestjs/common';

/**
 * The `createBotFactory` function creates a new Telegraf bot instance with the given options.
 * 
 * This function initializes a new Telegraf bot with the provided token and options.
 * It also applies any middlewares and sets up error handling for the bot.
 * If the `launchOptions` property is not set to `false`, the bot will be launched with the specified launch options.
 * 
 * @param {TelegrafModuleOptions} options - The options for the Telegraf bot.
 * @returns {Promise<Telegraf<any>>} A promise that resolves to the created Telegraf bot instance.
 */
export async function createBotFactory(
  options: TelegrafModuleOptions,
): Promise<Telegraf<any>> {
  const bot = new Telegraf<any>(options.token, options.options);

  bot.use(...(options.middlewares ?? []));
  bot.catch((err, ctx) =>
    Logger.error(err, `Telegraf: ${ctx.botInfo.username}`),
  );

  if (options.launchOptions !== false) {
    bot.launch(options.launchOptions);
  }

  return bot;
}
