# Node TSOA example API

Example Node API application with automatic generated Swagger documentation and static type checking on model objects.

Uses [TSOA](https://github.com/lukeautry/tsoa) to generate routes and swagger documentation based on decorated controllers and models. Provides a well structured Node API with type checked models and business logic with documentation aiding external parties to consume it.

![swagger](https://raw.githubusercontent.com/stevenalexander/node-tsoa-example/master/images/swagger.png "swagger doc")

Based on tutorial from github example and [here](https://medium.com/willsonic/swagger-nodejs-typescript-tsoa-15a3f10fabaf).

Requires:
* NodeJS (v8+)

## Overview

* `src/controllers` - controllers for API
* `src/models` - interfaces for request/response objects used by controllers
* `src/services` - services used by controllers
* `src/errors` - custom errors
* `src/swagger-ui` - static html used for serving swagger documentation as html UI
* `src/routes.ts` - TSOA generated routes from command `npm run-script routes-gen`
* `src/server.ts` - start script for Express
* `tsconfig.json` - TypeScript config for `tsc` compile used to generate Javascript
* `tslint.json` - TypeScript linting config setup to mimic StandardJS
* `tsoa.json` - TSOA config, see [here](https://github.com/lukeautry/tsoa) for details
* `dist` - folder for generate JavaScript
* `dist/swagger.json` - TSOA generated swagger doc from command `npm run-script swagger-gen`

## Run

```
npm install
npm start # http://localhost:3000/docs
```

## Debug

TypeScript compile generates maps, so you can debug the application using Chrome Dev tools against both TypeScript files and generated JavaScript.

```
npm run-script build
node --inspect dist/server.js # open chrome://inspect and connect to debugger
```