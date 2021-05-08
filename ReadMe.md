Install live-server and babel globally
Start server command `live-server ./public`
babel command `babel ./src/app.js --out-file="./public/script/app.js" --presets=env,react --watch`

---Notes---
---------------React Notes------------

JSX - javascript XML - it is a JS syntax extention provided by React for creating templates of data 

undefined, booleans , null are ignored by JSX

Arrow functions - arguments object not bound in arrow function for example console.log(arguments) will return arguments undefined error
	- this construct not bound

React.Component classes are case-sensetive