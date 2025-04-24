import { createListenerDecorator } from '../../utils';

/**
 * Registers middleware for provided update type.
 *
 * The `On` decorator is used to register middleware for handling specific update types in your bot.
 * This decorator allows you to define handlers for specific update types, such as messages, edited messages, channel posts, etc.
 *
 * @see https://telegraf.js.org/#/?id=on
 */
export const On = createListenerDecorator('on');
