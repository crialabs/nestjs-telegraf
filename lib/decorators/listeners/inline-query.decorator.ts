import { createListenerDecorator } from '../../utils';

/**
 * Registers middleware for handling inline_query actions with regular expressions.
 *
 * The `InlineQuery` decorator is used to register middleware for handling inline_query actions with regular expressions.
 * This decorator allows you to define handlers for specific inline_query actions in your bot.
 *
 * @see https://telegraf.js.org/#/?id=inlinequery
 */
export const InlineQuery = createListenerDecorator('inlineQuery');
