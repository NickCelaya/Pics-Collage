import React, { Component } from 'react';

class SearchBar extends Component {
	state = {
		userInput: '',
	};

	//Captures the users input and sets state. is called on the input jsx element
	onInputChange = (event) => {
		this.setState({
			userInput: event.target.value,
		});
	};

	onFormSubmit = (event) => {
		//prevents default submit when user pushes enter
		event.preventDefault();

		//passes the users input from state back to the parent component App.js through onSubmit function call on props from App.js
		this.props.onSubmit(this.state.userInput);
	};

	render() {
		console.log(this.state.userInput, 'state');
		return (
			<div className='ui segment' onSubmit={this.onFormSubmit}>
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
