console.log("This is React app!")

const data = {
    name: 'rachit',
    age: 29,
    location: 'Canada',
    options: []
}

 const getOptionsList = (options) => {
   return options.length 
    ? <ol>{options.map((value, index) => <li key={index}>{value}</li>)}</ol> 
    : null;
 }

const submitForm = (e) => {
    // this will prevent rendering form everytime a change is made
    e.preventDefault();

    const inputText = e.target.elements.option.value;
    
    if (inputText) {
        data.options.push(inputText)
        render();
    }
    return;
}

const getLocation = (location) => location ? <li>Location: {location}</li> : null;
const render = () => {
    const template = 
        <div>
            <h1>Indecision App</h1>
            <p>Update!This is indecision app</p>
            <p>Name: {data.name}</p>
            <p>Age: {data.age && data.age > 25 ? data.age : 'N/A'}</p>
            {getLocation(data.location)}
            {getOptionsList(data.options)}
            <form onSubmit={submitForm}>
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
            </form>
        </div>;

    const appRoot = document.getElementById("app");

    ReactDOM.render(template, appRoot);
};