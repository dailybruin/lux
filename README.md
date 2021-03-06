# Lux

[![npm](https://img.shields.io/npm/v/@dailybruin/lux.svg)](https://www.npmjs.com/package/@dailybruin/lux)
[![Build Status](https://travis-ci.com/dailybruin/lux.svg?branch=master)](https://travis-ci.com/dailybruin/lux)
[![codecov](https://codecov.io/gh/dailybruin/lux/branch/master/graph/badge.svg?token=GvqJtgnbAf)](https://codecov.io/gh/dailybruin/lux)
[![dependencies Status](https://david-dm.org/dailybruin/lux/status.svg)](https://david-dm.org/dailybruin/lux)
[![devDependencies Status](https://david-dm.org/dailybruin/lux/dev-status.svg)](https://david-dm.org/dailybruin/lux?type=dev)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg?style=flat)](https://github.com/facebook/jest)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![license](https://img.shields.io/github/license/dailybruin/lux.svg)](/LICENSE)

Lux is a design system for the Daily Bruin, written in [TypeScript](https://www.typescriptlang.org) and [React](https://reactjs.org).

You may also be interested in projects that use Lux, which include our [gatsby starter](https://github.com/dailybruin/gatsby-starter-dailybruin) and [dailybruin.com's frontend](https://github.com/dailybruin/flamingo).

## Usage

To use Lux, simply install it with your favorite package manager, e.g.:

```
yarn add @dailybruin/lux
```

Import components with the following syntax:

```javascript
import { Article } from '@dailybruin/lux'
```

Note that Lux is published as TypeScript files, and thus is only available to projects that use TypeScript and some kind of build system (e.g., [Webpack](https://webpack.js.org)). If you run into errors setting Lux up with your project, please [file an issue](https://github.com/dailybruin/lux/issues/new).

## Development

To start a dev server for the docs:

```
yarn start
```

To test:

```
yarn test
```

## Deployment

Lux is autopublished to [npm](https://www.npmjs.com) by [Travis](https://travis-ci.com) with [semantic-release](https://github.com/semantic-release/semantic-release) and travis build stages. Tokens were set up with [semantic-release-cli](https://github.com/semantic-release/cli) (`semantic-release-cli setup`), using [dailybruin-bot](https://github.com/dailybruin-bot)'s npm and GitHub credentials.

```
yarn publish
```

To build the docs:

```
yarn build:docs
```
