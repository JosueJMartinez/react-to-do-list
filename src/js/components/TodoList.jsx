import React, { Component } from 'react';
import ListItem from './ListItem';
import { v4 as uuid } from 'uuid';
import NewToDoForm from './NewToDoForm';

export default class TodoList extends Component {
	state = {
		list: [
			{ content: 'i am here', id: 'sdjkfghdfljkghdfh' },
			{ content: 'i am here with another item', id: 'sdjkfghdfljkghdfeh' },
			{ content: 'i am here and there', id: 'sdjkfghdfljkghdfhd' }
		]
	};

	addListItem = listItem => {
		const newListItem = { ...listItem, id: uuid() };
		this.setState(prevState => ({
			list: [ ...prevState.list, newListItem ]
		}));
	};

	deleteItem = id => {
		this.setState({
			list: this.state.list.filter(item => item.id !== id)
		});
	};
	render() {
		const list = this.state.list.map(item => (
			<ListItem
				content={item.content}
				id={item.id}
				key={item.id}
				deleteItem={this.deleteItem}
			/>
		));
		return (
			<div className="ToDoList">
				<NewToDoForm handleItem={this.addListItem} />
				{list}
			</div>
		);
	}
}
