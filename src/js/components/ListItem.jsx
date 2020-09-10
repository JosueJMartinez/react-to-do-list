import React, { Component } from 'react';

export default class ListItem extends Component {
	state = {
		content: this.props.content,
		isEdit: false
	};
	handleDelete = e => {
		this.props.deleteItem(this.props.id);
	};

	handleEditClick = e => {
		this.setState(prevState=> { return {isEdit: !prevState.isEdit} });
	};

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};
	render() {
		return (
			<div className="ListItem" id={this.props.id}>
				{this.state.isEdit ? (
					<form>
					<input
						type="text"
						placeholder="Editing item"
						value={this.state.content}
						name="content"
						onChange={this.handleChange}
					/>
						<button onClick={this.handleEditClick}>Cancel</button> 
					</form>
				) : (
					<>
					{this.props.content}
					<button onClick={this.handleEditClick}>Edit</button></>
				)}
				
				<button onClick={this.handleDelete}>delete</button>
			</div>
		);
	}
}
