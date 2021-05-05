const appRoot = document.getElementById('app');
let showDetailsToggle = false;

const onClickToggle = () => { 
    showDetailsToggle = !showDetailsToggle;
    render(); 
}; 

const render = () => {
    const template = 
    <div>
        <h1>Visibility Toggle</h1>
        <button onClick={onClickToggle}>{showDetailsToggle ? 'Hide Details' : 'Show Details'}</button>
        {showDetailsToggle && <div><p>These are my details</p></div>}
    </div>; 

    ReactDOM.render(template, appRoot);
}

render();