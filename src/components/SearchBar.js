import React, { Component } from 'react';

class SearchBar extends Component {
	state = {};
	render() {
		return (
			<div className='ui segment'>
				<form className='ui form'>
					<label>Image Search</label>
					<input className='field' type='text' />
				</form>
			</div>
		);
	}
}

export default SearchBar;
