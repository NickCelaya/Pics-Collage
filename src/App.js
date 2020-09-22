import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import './App.css';

class App extends Component {
	//function passed down to SearchBar.js through props to get user input back from SearchBar.js
	onSearchSubmit = (userInput) => {
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
