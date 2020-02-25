# Day 1

-----



1. Start initializing a new project

```bash
npx create-react-app your-project-name
```

> If you don't have the `npx` command enabled, you must install a recent version of Node.js

2. We want to speed up our development process, therefore we are going to setup the JS linter to help us with some syntax and JS good practices. We'll use the Airbnb linter configuration for that.

   Install the `eslint-config-airbnb` and all the dependencies.

   ```
   npm install --save-dev eslint-config-airbnb eslint@^6.1.0 eslint-plugin-import@^2.18.2 eslint-plugin-jsx-a11y@^6.2.3 eslint-plugin-react@^7.14.3 eslint-plugin-react-hooks@^1.7.0
   ```

   

   Create a new file in the project's root directory

   ```
   touch .eslintrc.js
   ```

   ... and paste this configuration

   ```
   module.exports = {
     extends: 'airbnb',
     parser: 'babel-eslint',
     globals: {
       document: true,
       window: true,
     },
     env: {
       browser: true,
       jest: true,
     },
     rules: {
       'react/no-danger': 0,
       'import/no-named-as-default-member': 0,
       'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
       'react/react-in-jsx-scope': 0,
       "react/prop-types": 0,
       "import/extensions": 0,
       "import/no-unresolved": 0,
       semi: [2, 'never'],
       quotes: [2, 'single'],
       'jsx-quotes': [2, 'prefer-double'],
       'no-restricted-imports': [0, { patterns: ['../*'] }],
       'jsx-a11y/no-autofocus': [0, {
         ignoreNonDOM: 1,
       }],
       'no-underscore-dangle': ['error', {
         allow: ['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'],
       }],
     },
     settings: {
       "import/extensions": [
         ".js",
         ".jsx",
         ".tsx"
       ],
     },
   }
   
   ```

   

   Resource: [ESlint config airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)

3. Now dispatch the project to port 3000 running

   ```
   npm start
   ```

   Go to [localhost](http://localhost:3000) in your browser.

   

4. Inspect for a while the `App.js`, once you, quite, understand what's happening go and delete the following files:

   ⛔ App.test.js

   ⛔ logo.svg

   Empty the content of `App.js`. It should look like this: 

   ```js
   import React from 'react'
   import './App.css'
   
   function App() {
     return (
       <div className="App">
   
       </div>
     )
   }
   
   export default App
   
   ```

   Empty `App.css` too!

   

5. Create a directory in `src` called `components` and nested a new one called `ui`. You should start creating today's components **here**.

   > To view your components in action ✨, call them in `App.js` (with the corresponding `import`) and go to your localhost. Your  [localhost](http://localhost:3000) is constantly updating the DOM thanks to the HRM (Hot Reload Module), which build and refreshed the browser every time you save any file.  

   

   * Button

     ![Button](D:\Documentos\code\react_course\_project\Button.png)

     

   * CircleButton

     ![CircleButton](D:\Documentos\code\react_course\_project\CircleButton.png)

     

   * Card

     ![Card](D:\Documentos\code\react_course\_project\Card.png)

     

     ![Card2](D:\Documentos\code\react_course\_project\Card2.png)

     

   * Title

   
![Title](D:\Documentos\code\react_course\_project\Title.png)
   

   
![Title_2](D:\Documentos\code\react_course\_project\Title_2.png)
   

   
* Checkbox
   

   ![Checkbox](D:\Documentos\code\react_course\_project\Checkbox.png)

   
   
   * Todo
   
     ![Todo](D:\Documentos\code\react_course\_project\Todo.png)
   
   
   
   ![Todo2](D:\Documentos\code\react_course\_project\Todo2.png)
   
   
   
   ![Todo3](D:\Documentos\code\react_course\_project\Todo3.png)
   
   
   
   
   
   * List
   
   ![Card](D:\Documentos\code\react_course\_project\Card.png)
   
   
   
   👆 For the icon try to use the MaterialUI component, specifically this [variant](https://material-ui.com/components/icons/#icon-font-icons).
   
   
   
   * Input
   
   
   ![Input](D:\Documentos\code\react_course\_project\Input.png)
   
   ![Input2](D:\Documentos\code\react_course\_project\Input2.png)
   
   
   
   * Divider
   
     ![Divider](D:\Documentos\code\react_course\_project\Divider.png)
     
     
     
     * DateInput
     
     ![DateInput](D:\Documentos\code\react_course\_project\DateInput.png)
     
     

6. Once you are done with the components, try to compose the View #1. 

   ![View1](D:\Documentos\code\react_course\_project\View1.PNG)





###### Goal

- [ ] Finish building all the UI components, with the appropriate props.

- [ ] Usage of MaterialUI 

