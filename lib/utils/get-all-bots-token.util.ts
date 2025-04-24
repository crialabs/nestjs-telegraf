import { TELEGRAF_ALL_BOTS } from '../telegraf.constants';

/**
 * The `getAllBotsToken` function returns the token for all bots.
 * 
 * This function returns the token that is used to identify all bots in the application.
 * The token is a constant value defined in the `telegraf.constants` file.
 * 
 * @returns {string} The token for all bots.
 */
export const getAllBotsToken = (): string => TELEGRAF_ALL_BOTS;
