import { DEFAULT_BOT_NAME } from '../telegraf.constants';

/**
 * The `getBotToken` function returns the token for a specific bot.
 * 
 * This function returns the token that is used to identify a specific bot in the application.
 * If a bot name is provided and it is not the default bot name, the function returns the bot name with the suffix 'Bot'.
 * Otherwise, it returns the default bot name.
 * 
 * @param {string} [name] - The name of the bot.
 * @returns {string} The token for the specified bot.
 */
export function getBotToken(name?: string): string {
  return name && name !== DEFAULT_BOT_NAME ? `${name}Bot` : DEFAULT_BOT_NAME;
}
