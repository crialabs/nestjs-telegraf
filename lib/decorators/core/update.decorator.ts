import { SetMetadata } from '@nestjs/common';
import { UPDATE_METADATA } from '../../telegraf.constants';

/**
 * `@Update` decorator, it's like NestJS `@Controller` decorator,
 * but for Telegram Bot API updates.
 * 
 * The `Update` decorator is used to mark a class as an update handler for Telegram Bot API updates.
 * This decorator is similar to the `@Controller` decorator in NestJS but is specifically designed for handling Telegram updates.
 * 
 * @returns {ClassDecorator} A class decorator function that sets the `UPDATE_METADATA` metadata key to `true`.
 */
export const Update = (): ClassDecorator => SetMetadata(UPDATE_METADATA, true);
