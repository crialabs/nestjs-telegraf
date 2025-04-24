import { ContextType, ExecutionContext } from '@nestjs/common';
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';
import { TgArgumentsHost } from './tg-arguments-host.interface';

export type TelegrafContextType = 'telegraf' | ContextType;

/**
 * The `TelegrafExecutionContext` class is a custom execution context for Telegraf-based applications.
 * It extends the `ExecutionContextHost` class and implements the `TgArgumentsHost` interface.
 * This class provides methods to access the context and next function from the arguments passed to the handler.
 */
export class TelegrafExecutionContext
  extends ExecutionContextHost
  implements TgArgumentsHost
{
  /**
   * Creates a new `TelegrafExecutionContext` instance from an existing `ExecutionContext`.
   * 
   * @param {ExecutionContext} context - The existing execution context.
   * @returns {TelegrafExecutionContext} A new `TelegrafExecutionContext` instance.
   */
  static create(context: ExecutionContext): TelegrafExecutionContext {
    const type = context.getType();
    const tgContext = new TelegrafExecutionContext(
      context.getArgs(),
      context.getClass(),
      context.getHandler(),
    );
    tgContext.setType(type);
    return tgContext;
  }

  /**
   * Gets the type of the context.
   * 
   * @returns {TContext} The type of the context.
   */
  getType<TContext extends string = TelegrafContextType>(): TContext {
    return super.getType();
  }

  /**
   * Gets the context object.
   * 
   * @returns {T} The context object.
   */
  getContext<T = any>(): T {
    return this.getArgByIndex(0);
  }

  /**
   * Gets the next function.
   * 
   * @returns {T} The next function.
   */
  getNext<T = any>(): T {
    return this.getArgByIndex(1);
  }
}
