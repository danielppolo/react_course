# JavaScript ES6 🤟

### Variable

A [variable](https://en.wikipedia.org/wiki/Variable_(computer_science)) is a “named storage” for data. We can use variables to store goodies, visitors, and other data.

To create a variable in JavaScript, use the `let` keyword.

```javascript
let message;
```

To declare a constant (unchanging) variable, use `const` instead of `let`:

```javascript
const myBirthday = '18.04.1982';
```



### Functions

Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.

```javascript
function showMessage() {
  alert( 'Hello everyone!' );
}
```



#### Arrow functions

There’s another very simple and concise syntax for creating functions, that’s often better than Function Expressions.

It’s called “arrow functions”, because it looks like this:

```javascript
let func = (arg1, arg2) => expression
```



### Rest parameters & spread syntax

A function can be called with any number of arguments, no matter how it is defined.

```javascript
function sum(a, b) {
  return a + b;
}

alert( sum(1, 2, 3, 4, 5) );
```

There will be no error because of “excessive” arguments. But of course in the result only the first two will be counted.

The rest of the parameters can be included in the function definition by using three dots `...` followed by the name of the array that will contain them. The dots literally mean “gather the remaining parameters into an array”.

```javascript
function sumAll(...args) { // args is the name for the array
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}

alert( sumAll(1) ); // 1
alert( sumAll(1, 2) ); // 3
alert( sumAll(1, 2, 3) ); // 6
```

⚠ **The rest parameters must be at the end**



### Destructuring assignment

The two most used data structures in JavaScript are `Object` and `Array`.

*Destructuring assignment* is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes that’s more convenient. Destructuring also works great with complex functions that have a lot of parameters, default values, and so on.



###### Array destructuring

```javascript
// we have an array with the name and surname
let arr = ["Ilya", "Kantor"]

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;

alert(firstName); // Ilya
alert(surname);  // Kantor
```



###### Objects destructuring

```javascript
let options = {
  title: "Menu",
  width: 100,
  height: 200
};

let {title, width, height} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200
```





### Modules

A module is just a file. One script is one module.

Modules can load each other and use special directives `export` and `import` to interchange functionality, call functions of one module from another one:

- `export` keyword labels variables and functions that should be accessible from outside the current module.
- `import` allows the import of functionality from other modules.



##### Named exports

For instance, if we have a file `sayHi.js` exporting a function:

```javascript
// 📁 sayHi.js
export function sayHi(user) {
  alert(`Hello, ${user}!`);
}
```

…Then another file may import and use it:

```javascript
// 📁 main.js
import {sayHi} from './sayHi.js';

alert(sayHi); // function...
sayHi('John'); // Hello, John!
```



###### Default exports

For instance, if we have a file `sayHi.js` exporting a **default function**:

```javascript
// 📁 sayHi.js
function sayHi(user) {
  alert(`Hello, ${user}!`);
}

export default sayHi;
```

…Then another file may import and use it:

```javascript
// 📁 main.js
import sayHi from './sayHi.js';

alert(sayHi); // function...
sayHi('John'); // Hello, John!
```

\* The name of the imported default functions is up to you. 



###### Rule of 👍

You can have as many *named exports* in a file, but only one *default export.*



### Webpack

Webpack is a *static module bundler*. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.



### Babel

Babel is a tool that helps you write code in the latest version of JavaScript. When your supported environments don't support certain features natively, Babel will help you compile those features down to a supported version.



### ESLint

ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.



### NPM

* Stands for Node Package Manager. 

* **npm** is the world's largest **Software Registry**.

* The registry contains over 800,000 **code packages**.

* **Open-source** developers use **npm** to **share** software.

* Many organizations also use npm to manage private development.



Installing a package

```bash
npm install <package>
```

Installing a package for *development*

```bash
npm install <package> --save-dev
```

Uninstalling a package

```bash
npm uninstall <package>
```

###### 

#### Package.json

The `package.json` file is kind of a manifest for your project. It can do a lot of things, completely unrelated. It's a central repository of configuration for tools, for example. It's also where `npm` and `yarn` store the names and versions for all the installed packages.

###### Structure

```json
{
  "name": "test-project",
  "version": "1.0.0",
  "description": "A Vue.js project",
  "main": "src/main.js",
  "private": true,
  "scripts": {
    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
    "start": "npm run dev",
    "unit": "jest --config test/unit/jest.conf.js --coverage",
    "test": "npm run unit",
    "lint": "eslint --ext .js,.vue src test/unit",
    "build": "node build/build.js"
  },
  "dependencies": {
    "vue": "^2.5.2"
  },
  "devDependencies": {
    "autoprefixer": "^7.1.2",
    "babel-core": "^6.22.1"
  },
  "engines": {
    "node": ">= 6.0.0",
    "npm": ">= 3.0.0"
  },
  "browserslist": ["> 1%", "last 2 versions", "not ie <= 8"]
}
```



- name` sets the application/package name
- `version` indicates the current version
- `description` is a brief description of the app/package
- `main` set the entry point for the application
- `private` if set to `true` prevents the app/package to be accidentally published on `npm`
- `scripts` defines a set of node scripts you can run
- `dependencies` sets a list of `npm` packages installed as dependencies
- `devDependencies` sets a list of `npm` packages installed as development dependencies
- `engines` sets which versions of Node.js this package/app works on
- `browserslist` is used to tell which browsers (and their versions) you want to support



To create a new JS project you start by:

```bash
npm init
```

###### 

### Conventions

* Variables are written in **camelCase**


[Airbnb JS Style Guide](https://github.com/airbnb/javascript)





### Everything in JS is an object. 😱