import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyAB9ZnDW-s1pivVJu5Y-JMvuxSe9CrIjTk';

// Create a new component. This component should produce HTML
class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({ videos });
			// ES2016 version of this.setState({ videos: videos })
		});
	}

		render() {
			return (
					<div>
						<SearchBar />
					</div>
			);
		}
	}


// Take these component's HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));