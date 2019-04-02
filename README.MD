# UI Boilerplate 2

A plain Webpack 4 ready-to-go configuration to start and develop a complete react project.

## Getting Started

To get started just clone the project to your working folder and follow this README instructions. If you need to migrate from a boilerplate old version, please follow this instructions: [Migration Guide](http://confluence.vistajet.local/display/APCENTRE/How+to+migrate+to+boilerplate-2.X)

### Prerequisites

* Node.js v8 or above

You can check your node version using the command:

```CLI
node --version
```

### Installing

Install dependencies and start using [yarn](https://yarnpkg.com):

```CLI
yarn install
yarn start
```

## Running the tests

To run **unit tests** run the command:

```CLI
yarn test
```

To run **automation tests** run the command:

```CLI
yarn automation
```

## Generating production build

You can generate an optimized distribution bundle. To do this run the command:

```CLI
yarn build
```

this will generate the build directory where a optimized bundled version of the application will be placed.

This bundled app is similar to the backend artifact and must be used in production.

Knowing that this bundled app is only HTML, CSS and Javascript files, it can be served from any static file server.

A node server is not necessary to run this app.

## Additional options

### Style options
This project is configured to use simple CSS.

It's possible to enable POST CSS + CSS modules configuration.
To do this add following comand to start and builds scripts:

```CLI
POST_CSS=true
```

The default option is simple CSS. Although when starting a project the POST_CSS configuration will be setted as true. Having this configuration setted as true will avoid problems when migrating from old version.

**ATTENTION**: If you are starting a new project, the use of simple CSS is recommended.

## Built With

* [webpack](https://webpack.js.org/) - Static module bundler
* [React](https://babeljs.io/) - JavaScript library for building user interfaces
* [Babel](https://babeljs.io/) - EcmaScript Transpiler
* [Yarn](https://yarnpkg.com) - Dependency Management
* [Jest](https://jestjs.io/) - JavaScript Testing
* [Enzyme](https://airbnb.io/enzyme/docs/api/) - Component tests for React

## Contributing

If you have any suggestion or doubt, please take a look in the confluence first and if necessary ask in the [boilerplate chat channel](https://chat.vistajet.com/channel/boilerplate).

For major changes, please open an Jira before discussing what you would like to change. The project is [UI BOILER](http://jira/projects/UIBOILER/summary).

## Versioning

Use [SemVer](http://semver.org/) for versioning.
