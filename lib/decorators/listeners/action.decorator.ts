import { createListenerDecorator } from '../../utils';

/**
 * Registers middleware for handling callback_data actions with regular expressions.
 *
 * The `Action` decorator is used to register middleware for handling callback_data actions with regular expressions.
 * This decorator allows you to define handlers for specific callback_data actions in your bot.
 *
 * @see https://telegraf.js.org/#/?id=action
 */
export const Action = createListenerDecorator('action');
