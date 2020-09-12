import React, { Component } from 'react';
import '../../css/NewToDoForm.css';

export default class NewToDoForm extends Component {
	state = {
		content: ''
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.handleItem(this.state);
		this.setState({ content: '' });
	};

	handleChange = e => {
		return this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleKeyDown = e => {
		if (e.keyCode === 27) {
			this.props.closeNewForm();
			this.setState({ content: '' });
		}
	};

	render() {
		return (
			<form
				className={`NewToDoForm ${!this.props.isOpen && 'hideInput'}`}
				onSubmit={this.handleSubmit}
			>
				<input
					type="text"
					placeholder="Add new item to do here"
					value={this.state.content}
					name="content"
					onChange={this.handleChange}
					onKeyDown={this.handleKeyDown}
				/>
			</form>
		);
	}
}
