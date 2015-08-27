# browerify-multiple-altjs-example

An practical example using ES6 (transpiled with Babel) and TypeScript.

* ES6 - weak-typed
  * for rapid prototyping
* TypeScript - strong-typed
  * for domain modeling


## Build

### Browserify

```sh
$(npm bin)/browserify --plugin tsify --transform babelify $npm_package_main
# npm run browserify
```

### Gulp

```sh
$(npm bin)/gulp
```

