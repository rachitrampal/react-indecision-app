Install live-server and babel globally

Start server command `live-server ./public`

babel command `babel ./src/app.js --out-file="./public/script/app.js" --presets=env,react --watch`

---------------React Notes------------

JSX - javascript XML - it is a JS syntax extention provided by React for creating templates of data 

undefined, booleans , null are ignored by JSX

Arrow functions - arguments object not bound in arrow function for example console.log(arguments) will return arguments undefined error
	- this construct not bound

## Class-based React Components(used when managing state)
React.Component classes are case-sensitive

bind(obj) function is used to bind/reset the context of `obj` scope 

`this.props` can be used to pass the properties of the parent component to its children

`React.Component` is the parent class which always require `render()` function definition

Event handles and methods can be created in the component class just like render().

More info about various react Events on https://reactjs.org/docs/events.html

Method Binding can be implemented by overwriting the constructor function of React Component.
It is efficient to do method binding in the constructor of the component so that it happens when the component
initializes for the first time.
```
class abc extends React.Component {
    // props is the mandatory argument of the constructor func
    constructor(props) {
        //Initializing the parent class
        super(props);
        this.classMethod = this.classMethod.bind(this);
    }
}
```

Component State allows to manage the component data such that when the data changes 
the Component will re-render. Events are used to change the data/state of the component which
will re-render the component automatically. 

The 5 steps to set React Component State
```
1. Setup default state object
2. Compnent re-renders with default state values
3. Change state based on event
4. Component re-rendered using new state values
5. Start again at step 3.
```
For step 1 listed above, default state object is set in the constructor like
`this.state = {count: 0}`

For updating the state, `this.state` function is called within the component class handler function

There are 2 syntax for defining the state change function

```
SYNTAX 1
this.state((prevState) => {
    count: prevState.count + 1;
})

OR
SYNTAX 2
this.state({count: 2})

```
As shown above,  the first syntax can be used when we need previous state as a reference,
otherwise we can directly pass the object and update the value.

Component State function is an asynchronous function which means that in case of multiple state function execution in one method,
React internally might batch these calls and re-render once which might lead to inconsistencies.
Therefore, preferably Syntax 1 should be used. 

## Props vs State
### Similarities
1. Both are object.
2. Both can be used when rendering (props values from parent to child and default state)
3. Both can trigger re-rendering (for example using a function which invokes this.setState
    as props and pass to child component which can then call the state change func when data is manipulated)
### Differences
1. Props defined in parent and passed to child, State can be defined within any component
2. Props cannot be changed by the component itself(need state changes), state can be changed by component itself

## Stateless Functional React Components
Instead of creating classes extending `React.Component` we can use stateless function component
when we dont have to manipulate state in a component

We can pass `{componentName}.defaultProps = {...option props }` for setting the default prop values used by the component.
Can we used for both class-based and functional components. 

`Lifecycle Methods` are the list of methods that be used by class based components only.
For-example componentDidMount(), componentWillUnmount(), componentDidUpdate()
For more info explore https://reactjs.org/docs/react-component.html

## Using Webpack
Webpack is a tool which can bundle up all the dependencies of the react app for example React and ReactDOM package, 
babel dependencies, dev server(appose to the live-server) and compile them to a single bundled js file 
which can be deployed and runs the app.
https://v4.webpack.js.org/configuration/
https://babeljs.io/docs/en/plugins
https://www.npmjs.com/package/babel-preset-env
https://www.npmjs.com/package/babel-preset-react
https://www.npmjs.com/package/babel-loader/v/8.0.0-beta.1
https://www.npmjs.com/package/babel-plugin-transform-class-properties

Few steps to follow for setting up the webpack
1. Create webpack.config.js for webpack to understand the app.
2. Use React and ReactDOM npm packages and import/export these modules to your app.
3. Use babel presets and plugins by setting them up in .babelrc.


We can use `props.children` to pass JSX directly to a react component
```
const Layout = () => {
    return (
        <div>
            <p>This is stateless functional react component</p>
            {props.children} // this will render the p tag in render function
        </div>)
}

ReactDOM.render(<Layout><p>Child paragraph</p></Layout>, document.getElementById('appRoot'))
```
### Using React-Modal
React-Modal is a third-party tool that can we contains jsx modals which can be used in the app
For more details : http://reactcommunity.org/react-modal/

### Styling React

We will be using SCSS and configure it in webpack to render the styles of the app.

Configuring styles in webpack is similar to configuring Babel. We will set the rules for
CSS in the module property of webpack.

partial css or scss starts with `_` as a file naming standard

Styles Reset - this is necessary for starting your styles from the same point on across all browsers and protect
default browser styles to fiddle with your custom styles. Therefore we should have styles reset in place.
There are many packages that implies reset. like Normalize.css

#### Packages for Styles 
1. `css-loader` npm package will allow webpack to load css
2. `style-loader` it injects CSS to the DOM in `<style>` tags

In Order to execute SCSS we would be using the `sass` packages which will understand SCSS
and compile it as normal CSS for the app running the browser.
1. `sass-loader` this package is used to load sass in the webpack
2. `node-sass` package is used understand scss and convert it to normal css
