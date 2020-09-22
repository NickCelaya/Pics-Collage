import React, { Component } from 'react';

class SearchBar extends Component {
	state = {
		userInput: 'static state input',
	};

	onInputChange = (event) => {
		this.setState({
			userInput: event.target.value,
		});
	};

	render() {
		console.log(this.state.userInput, 'state');
		return (
			<div className='ui segment'>
				<form className='ui form'>
					<label>Image Search</label>
					<input
						className='field'
						type='text'
						value={this.state.userInput}
						onChange={this.onInputChange}
					/>
				</form>
				{this.state.userInput}
			</div>
		);
	}
}

export default SearchBar;
