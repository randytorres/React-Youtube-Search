import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component. This component should produce HTML
const App = () => {
	return <div>React is Awesome!!!</div>;
};


// Take these component's HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));