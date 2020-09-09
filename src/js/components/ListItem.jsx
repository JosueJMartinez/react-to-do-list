import React, { Component } from 'react';

export default class ListItem extends Component {
	render() {
		return (
			<div className="ListItem" id={this.props.id}>
				{this.props.content}
				<button>edit</button>
				<button>delete</button>
			</div>
		);
	}
}
