import { Provider } from '@nestjs/common';
import { Telegraf } from 'telegraf';
import { TELEGRAF_ALL_BOTS } from './telegraf.constants';

export const allBotsMap = new Map<string, Telegraf<any>>();

/**
 * The `telegrafAllBotsProvider` is a provider that supplies a map of all bots.
 * 
 * This provider allows you to access a map containing all the bots that have been created.
 * The map's keys are the bot names, and the values are the corresponding Telegraf instances.
 */
export const telegrafAllBotsProvider: Provider = {
  provide: TELEGRAF_ALL_BOTS,
  useValue: allBotsMap,
};
