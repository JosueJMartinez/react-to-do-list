import React, { Component } from 'react';

export default class ListItem extends Component {
	handleDelete = e => {
		this.props.deleteItem(this.props.id);
	};

	render() {
		return (
			<div className="ListItem" id={this.props.id}>
				{this.props.content}
				<button>edit</button>
				<button onClick={this.handleDelete}>delete</button>
			</div>
		);
	}
}
