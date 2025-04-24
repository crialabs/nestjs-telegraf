<p align="center">
  <img src="https://raw.githubusercontent.com/robot-mafia/nestjs-telegraf/main/.github/logo.svg" />
</p>

# ![npm](https://img.shields.io/npm/dm/nestjs-telegraf) ![GitHub last commit](https://img.shields.io/github/last-commit/0x467/nestjs-telegraf) ![NPM](https://img.shields.io/npm/l/nestjs-telegraf)

NestJS Telegraf – powerful solution for creating Telegram bots.

This package uses the best of the NodeJS world under the hood. [Telegraf](https://github.com/telegraf/telegraf) is the most powerful library for creating bots and [NestJS](https://github.com/nestjs) is a progressive framework for creating well-architectured applications. This module provides fast and easy way for creating Telegram bots and deep integration with your NestJS application. 

**Features**

- Simple. Easy to use.
- Ton of decorators available out of the box for handling bot actions.
- Ability to create custom decorators.
- Scenes support.
- Telegraf plugins and custom plugins support.
- Ability to run multiple bots simultaneously.
- Full support of NestJS guards, interceptors, filters and pipes!

**User stories**
- [Новогодняя история одного телеграм-бота на NestJS](https://habr.com/ru/company/tinkoff/blog/596287/) by [Tinkoff Bank](https://github.com/Tinkoff)

**Chat**

* [Telegram](https://t.me/nestjs_telegraf)

## Overview

NestJS Telegraf is a powerful solution for creating Telegram bots using the NestJS framework. It provides a fast and easy way to create Telegram bots and deeply integrate them with your NestJS application.

## Installation

```bash
$ npm i nestjs-telegraf telegraf
```

Once the installation process is complete, we can import the `TelegrafModule` into the root `AppModule`.

```typescript title="src/app.module.ts"
import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';

@Module({
  imports: [
    TelegrafModule.forRoot({
      token: 'TELEGRAM_BOT_TOKEN',
    })
  ],
})
export class AppModule {}
```

The `forRoot()` method accepts the same configuration object as Telegraf class constructor from the Telegraf package, as described [here](https://telegraf.js.org/#/?id=constructor).

## Documentation
Check out the [documentation site](https://nestjs-telegraf.0x467.com/).

## Activity
![Alt](https://repobeats.axiom.co/api/embed/3a0b83192feaeff27d8a7f78f53e5cb951f94dac.svg "Repobeats analytics image")
