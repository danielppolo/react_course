# React JS ⚛

### SPAs

A single page application literally has only one page !! 😊

If you start navigating around, you will see that the page does not fully reload – only new data gets sent over the wire as the user navigates through the application – that is an example of a single page application.

A single page application is super-simple to deploy if compared to more traditional server-side rendered applications: it's really just one `index.html` file, with a CSS bundle and a Javascript bundle.

[Why SPA's?](https://blog.angular-university.io/why-a-single-page-application-what-are-the-benefits-what-is-a-spa/)



### What's React?

##### A JavaScript library for building user interfaces



###### Component based

Build encapsulated components that manage their own state, then compose them to make complex UIs.



### JSX

React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display.

That means... HTML in JS 🌟

Instead of artificially separating *technologies* by putting markup and logic in separate files, React [separates *concerns*](https://en.wikipedia.org/wiki/Separation_of_concerns) with loosely coupled units called “components” 

And looks like this:

```jsx
const helloWorld = <p>Hello world</p>;
```



To embed JS expressions within HTML you must use `{ }`

```javascript
const phrase = 'Hello world'

const helloWorld = <p>{phrase}</p>;
```



If a tag is empty, you may close it immediately with `/>`

```javascript
const element = <img src={user.avatarUrl} />;
```



You can break down an HTML element or a Component in several lines. You must wrap it in `( )` tough.

```javascript
const element = (
    <img 
		src={user.avatarUrl} 
        width="300"
		height="300"
	/>
);
```

🌟Good practice.



### Rendering elements

Let’s say there is a `<div>` somewhere in your HTML file:

```html
<div id="root"></div>
```

To render a React element into a root DOM node, pass both to [`ReactDOM.render()`](https://en.reactjs.org/docs/react-dom.html#render):

```javas
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```



###### React Only Updates What’s Necessary

React creates something's called Virtual DOM. When a change in a component is triggered, the DOM should update. To achieve it, React updates first the representation in the virtual DOM, and then it compares the real DOM with the virtual one. Then only the differences are updated. 

![GIF](https://en.reactjs.org/c158617ed7cc0eac8f58330e49e48224/granular-dom-updates.gif)



### Thinking componentized 

Let's break down a website into components.



### Components

A component is a way to encapsulate logic and UI. Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

☝ Components are functions that, MUST, return HTML, or `null` for emptiness.



###### Functional components

The simplest way to define a component is to write a JavaScript function:

```javas
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```



You can also use an [ES6 class](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes) to define a component:

```javascript
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```



###### Restrictions

* A component must be named in **PascalCase**

* A component must return 1 HTML node. 

  

### Returning multiple nodes

By default a React component doesn't allow you to return more than one node but there are ways to achieve it.

###### Array of nodes

You can return an array of nodes and React won't complain about it. To achieve it, the most common pattern is to `map` an array of data into Components.

```javascript
function List({data}) {
    return data.map(task => (
    <Task 
        title={task.title}
    	done={task.done}
    />
    ))
}
```



###### React fragment

You can wrap as many elements you want with the component given by React

```jsx
import React, {Fragment} from 'react'

function SeveralItems() {
    return (
    <Fragment>
    		<h1>Hello world</h1>
            <p>From Le Wagon</p>
    </Fragment>
    )
}
```

or

```jsx
function SeveralItems() {
    return (
    <>
      <h1>Hello world</h1>
      <p>From Le Wagon</p>
    </>
    )
}
```



### Props

⚠ Props are Read-Only

Props, apart from being a way to pass down information across components, should be treated as the **interface** of the component. 

React components could be imagined as interfaces designed by developers (and used by them), therefore, the developer *must* decide how his components should be used and limit undesired behaviors on it.



###### Passing down props

You can pass as many HTML-like attributes to any component. But you must remember that not all props will take effect, that depends on how the component manages them.

```jsx
function App() {
  return (
    <div>
      <Welcome name="Sara" language="es"/>
      <Welcome name="Cahal" />
    </div>
  );
}
```

According to the previous example, the `Welcome` component accepts 2 props: name and language. 



###### Accessing props

All components receive a parameter called `props`. This parameter is actually an object which contains all the HTML-like attributes that were declared when a component is called.

```javascript
function Welcome(props) {
    const {name} = props
    return <h1>Hello {name}</h1>
}
```



###### Hack 🤯

You can destructure object from within the parameters. By doing this you can achieve a more declarative component. Instead of looking at the whole file looking for the available props, a developer can just look at the parameters.

```jsx
function Welcome({name}) {
    return <h1>Hello {name}</h1>
}
```

or catching the rest by doing this:

```jsx
function Welcome({name, ...otherProps}) {
    return <h1>Hello {name}</h1>
}
```



### Children

Maybe the most important props of all is the `children`. This prop represents the content in between the **tags**. That could be either text or more Components.

```jsx
<Welcome lang="es">Nacho</Welcome>
```



```jsx
function Welcome({lang, children}) {
    return <h1>Hello {children}</h1>
} 
```



### HTML attrs

Most of HTML attributes are valid in React, there are some restrictions still.

Accepted HTML attributes 

```javascr
accept acceptCharset accessKey action allowFullScreen alt async autoComplete
autoFocus autoPlay capture cellPadding cellSpacing challenge charSet checked
cite classID className colSpan cols content contentEditable contextMenu controls
controlsList coords crossOrigin data dateTime default defer dir disabled
download draggable encType form formAction formEncType formMethod formNoValidate
formTarget frameBorder headers height hidden high href hrefLang htmlFor
httpEquiv icon id inputMode integrity is keyParams keyType kind label lang list
loop low manifest marginHeight marginWidth max maxLength media mediaGroup method
min minLength multiple muted name noValidate nonce open optimum pattern
placeholder poster preload profile radioGroup readOnly rel required reversed
role rowSpan rows sandbox scope scoped scrolling seamless selected shape size
sizes span spellCheck src srcDoc srcLang srcSet start step style summary
tabIndex target title type useMap value width wmode wrap
```



###### Class attribute

The HTML `class` attribute, used for selectors, cannot be typed just like that due to the fact that JS has a reserved keyword with the same name that is used to define classes. 

React allows you to pass the attribute as `className`

```jsx
<Welcome className="title" name="Nacho" />  
```



[Reference](https://es.reactjs.org/docs/dom-elements.html)



### Style

###### Inline style

Remember the `style` HTML attribute? Well we can use it to pass in-line style. 

```jsx
<p style="color: red;">Hello world</p>
```



Let's vitamin the last example with custom props that are passed to the component.

```jsx
<p style={`color: ${props.color};`}>Hello world</p>
```



React allows to pass an object to the `style` attribute, just like this:

```jsx
<p style={ { color: props.color } }>Hello world</p>
```



💀 Now the object is JS, therefore you cannot write the normal CSS properties. JS doesn't accept `-` in object keys, so you need to write the CSS properties in `camelCase`. eg. `background-color` -> `backgroundColor`



###### Independent file

You cannot write all the CSS of a component in-line. To solve that problem you can create standalone CSS files and later import them. 

```jsx
import './Welcome.css'

function Welcome({lang, children}) {
    return <h1 className="Welcome">Hello {children}</h1>
} 
```



👆 Importing CSS in JS is possible thanks to Webpack. Webpack will take all the CSS imports in JS files and bundle them into a single `bundle.css`



### Composing with components

Remember that all functions must return HTML? Well, now we can start calling all of our components to start composing more complex ones. 

We can achieve all of this thanks to the JS modules feature on ES6 and Webpack 😉

```jsx
import Button from './Button'
import Welcome from './Welcome'

function App() {
    return (
    	<div>
        	<Welcome name="Daniel" />
           	<p>React course</p>
            <Button>Suscribe!</Button>
        </div>
    )
}
```

At the end, the `App` function will resolve all of the functions (Components) inside and will return a HTML for the browser to render.

👉 The way React differentiates Components from HTML elements is because of the **capitalization** of the tags. Components MUST be capitalized and HTML elements must we written, like normally, all lowercase.



### Conventions

###### Naming components

All components declarations must be written in **PascalCase**.

```javascript
function Button() {
}
```

```javascript
class Button {
}
```



###### Writing components

A component should live in an independent file, this follows the encapsulation principle of React.

👆 A file that contains a component should be written in **PascalCase** too!



### Going further 🚀

* High Order Components a.k.a. HOCs.