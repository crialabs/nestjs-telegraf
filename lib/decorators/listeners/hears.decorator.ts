import { createListenerDecorator } from '../../utils';

/**
 * Registers middleware for handling text messages.
 *
 * The `Hears` decorator is used to register middleware for handling text messages in your bot.
 * This decorator allows you to define handlers for specific text messages that your bot should respond to.
 *
 * @see https://telegraf.js.org/#/?id=hears
 */
export const Hears = createListenerDecorator('hears');
