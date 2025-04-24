import { createListenerDecorator } from '../../utils';

/**
 * Handler for /settings command.
 *
 * The `Settings` decorator is used to register middleware for handling the /settings command in your bot.
 * This decorator allows you to define handlers for the /settings command, which can be used to configure bot settings.
 *
 * @see https://telegraf.js.org/#/?id=settings
 */
export const Settings = createListenerDecorator('settings');
