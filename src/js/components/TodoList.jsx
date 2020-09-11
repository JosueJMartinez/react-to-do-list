import React, { Component } from 'react';
import ListItem from './ListItem';
import { v4 as uuid } from 'uuid';
import NewToDoForm from './NewToDoForm';
import '../../css/ToDoList.css';

export default class ToDoList extends Component {
	state = {
		list: [
			{ content: 'i am here', id: 'sdjkfghdfljkghdfh' },
			{ content: 'i am here with another item', id: 'sdjkfghdfljkghdfeh' },
			{ content: 'i am here and there', id: 'sdjkfghdfljkghdfhd' }
		],
		isOpen: true
	};

	componentDidMount() {
		const list = JSON.parse(localStorage.getItem('ToDoAppList'));
		this.setState({ list: list });
	}

	addListItem = listItem => {
		const newListItem = { ...listItem, id: uuid() };
		let { list } = this.state;
		list = [ ...list, newListItem ];

		localStorage.setItem('ToDoAppList', JSON.stringify(list));
		this.setState(prevState => ({
			list: [ ...prevState.list, newListItem ]
		}));
	};

	deleteItem = id => {
		localStorage.setItem(
			'ToDoAppList',
			JSON.stringify(this.state.list.filter(item => item.id !== id))
		);
		this.setState({
			list: this.state.list.filter(item => item.id !== id)
		});
	};

	editItem = item => {
		localStorage.setItem(
			'ToDoAppList',
			JSON.stringify(
				this.state.list.map(oldItem => {
					if (oldItem.id === item.id) return item;
					return oldItem;
				})
			)
		);
		this.setState({
			list: this.state.list.map(oldItem => {
				if (oldItem.id === item.id) return item;
				return oldItem;
			})
		});
	};

	handleClick = e => {
		this.setState({ isOpen: !this.state.isOpen });
	};

	render() {
		const list = this.state.list.map(item => (
			<ListItem
				content={item.content}
				id={item.id}
				key={item.id}
				deleteItem={this.deleteItem}
				editItem={this.editItem}
			/>
		));
		return (
			<div className="ToDoList">
				<h1 id="title">
					To-Do List
					<span id="plus" onClick={this.handleClick}>
						<i
							className={`fas fa-${this.state.isOpen
								? 'minus'
								: 'plus'}-square`}
						/>
					</span>
				</h1>
				<NewToDoForm
					isOpen={this.state.isOpen}
					handleItem={this.addListItem}
				/>
				<ul>{list}</ul>
			</div>
		);
	}
}
