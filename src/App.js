import React, { Component } from 'react';
import unsplashApiBaseUrl from './api/UnsplashApi';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import './App.css';

class App extends Component {
	state = { images: [] };
	//?query={userInput}
	//function passed down to SearchBar.js through props to get user input back from SearchBar.js
	onSearchSubmit = async (userInput) => {
		const response = await unsplashApiBaseUrl.get(`search/photos`, {
			params: { query: userInput },
		});
		// console.log(response.data.results, 'im the response');
		this.setState({ images: response.data.results });
		// console.log(this.state.images, 'im state with images');
		console.log(response, 'response');
	};
	render() {
		return (
			<div className='ui container' style={{ marginTop: '10px' }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
				<ImageList images={this.state.images} />
				{/* images found:{this.state.images.length} */}
			</div>
		);
	}
}

export default App;
