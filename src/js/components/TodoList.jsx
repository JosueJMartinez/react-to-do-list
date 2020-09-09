import React, { Component } from 'react';
import ListItem from './ListItem';

export default class TodoList extends Component {
	state = {
		list: [
			{ content: 'i am here', id: 'sdjkfghdfljkghdfh' },
			{ content: 'i am here with another item', id: 'sdjkfghdfljkghdfeh' },
			{ content: 'i am here and there', id: 'sdjkfghdfljkghdfhd' }
		]
	};
	render() {
		const list = this.state.list.map(item => (
			<ListItem content={item.content} id={item.id} />
		));
		return (
			<div>
				<h1>to do form</h1>
				{list}
			</div>
		);
	}
}
