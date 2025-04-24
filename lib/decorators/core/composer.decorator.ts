import { SetMetadata } from '@nestjs/common';
import { COMPOSER_METADATA } from '../../telegraf.constants';

/**
 * `@Composer` like Update decorator, executed before scene handlers.
 * 
 * The `Composer` decorator is used to mark a class as a composer, which is a special type of update handler that is executed before scene handlers.
 * This decorator is similar to the `Update` decorator but is specifically designed for composers.
 * 
 * @returns {ClassDecorator} A class decorator function that sets the `COMPOSER_METADATA` metadata key to `true`.
 */
export const Composer = (): ClassDecorator =>
  SetMetadata(COMPOSER_METADATA, true);
