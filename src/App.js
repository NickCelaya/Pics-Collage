import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import './App.css';

class App extends Component {
	//?query={userInput}
	//function passed down to SearchBar.js through props to get user input back from SearchBar.js
	onSearchSubmit = async (userInput) => {
		const response = await axios.get('https://api.unsplash.com/search/photos', {
			params: { query: userInput },
			headers: {
				Authorization: 'Client-ID 9bDnVwHCHRLoOVnjHjUK-zKCwiUezalAWvyvQVv94pE',
			},
		});
		console.log(response.data.results);
		console.log(userInput);
	};
	render() {
		return (
			<div className='ui container' style={{ marginTop: '10px' }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
			</div>
		);
	}
}

export default App;
