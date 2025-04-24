import { Inject } from '@nestjs/common';
import { getBotToken } from '../../utils';

/**
 * `@InjectBot` decorator is used to inject a specific bot instance.
 * 
 * This decorator allows you to inject a specific bot instance by providing the bot name.
 * If no bot name is provided, it will inject the default bot instance.
 * 
 * @param {string} [botName] - The name of the bot to inject.
 * @returns {ParameterDecorator} A parameter decorator function that injects the specified bot instance.
 */
export const InjectBot = (botName?: string): ParameterDecorator =>
  Inject(getBotToken(botName));
