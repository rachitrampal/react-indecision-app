const appRoot = document.getElementById("app");

//ReactDOM.render(template, appRoot);
let count = 0;
const addOne = () => {
    count++;
    renderCounter();
}
const subtractOne = () => {
    count--;
    renderCounter();
}
const reset = () => {
    count = 0;
    renderCounter();
}

const renderCounter = () => {
    const template2 = 
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={subtractOne}>-1</button>
        <button onClick={reset}>reset</button>
    </div>
    
    ReactDOM.render(template2, appRoot);
}

renderCounter();