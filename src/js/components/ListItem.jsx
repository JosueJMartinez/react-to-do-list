import React, { Component } from 'react';

export default class ListItem extends Component {
	state = {
		content: this.props.content,
		isEdit: false
	};
	handleDelete = e => {
		this.props.deleteItem(this.props.id);
	};

	handleEdit = e => {
		this.setState({ isEdit: true });
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
					<input
						type="text"
						placeholder="Editing item"
						value={this.state.content}
						name="content"
						onChange={this.handleChange}
					/>
				) : (
					this.props.content
				)}
				<button onClick={this.handleEdit}>edit</button>
				<button onClick={this.handleDelete}>delete</button>
			</div>
		);
	}
}
