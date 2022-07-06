# Delayed Lazy-Import (Webpack)

As per documentation says:

> It is not possible to use a fully dynamic import statement, such as `import(foo)`. Because `foo` could potentially be any path to any file in your system or project.
>
> https://webpack.js.org/api/module-methods/#dynamic-expressions-in-import

We are not able to create a general import helper that has a delay. Instead, we can create specific-case import helper, such as [delayedComponentImport](./src/utils/import.js#L4) or [delayedSvgImport](./src/utils/import.js#L18).

The repository was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and modified using [React App Rewired](https://github.com/timarney/react-app-rewired).
