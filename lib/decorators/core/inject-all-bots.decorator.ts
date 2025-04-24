import { Inject } from '@nestjs/common';
import { Telegraf } from 'telegraf';

import { getAllBotsToken } from '../../utils/get-all-bots-token.util';

export type AllBotsMap = Map<string, Telegraf<any>>;

/**
 * `@InjectAllBots` decorator is used to inject a map of all bots.
 * 
 * This decorator allows you to inject a map containing all the bots that have been created.
 * The map's keys are the bot names, and the values are the corresponding Telegraf instances.
 * 
 * @returns {ParameterDecorator} A parameter decorator function that injects the map of all bots.
 */
export const InjectAllBots = (): ParameterDecorator =>
  Inject(getAllBotsToken());
