import React, { Component } from 'react';
import ListItem from './ListItem';
import { v4 as uuid } from 'uuid';
import NewToDoForm from './NewToDoForm';
import '../../css/ToDoList.css';

export default class ToDoList extends Component {
	state = {
		list: [
			{ content: 'i am here', id: 'sdjkfghdfljkghdfh', isOpen: false },
			{
				content: 'i am here with another item',
				id: 'sdjkfghdfljkghdfeh',
				isOpen: false
			},
			{
				content: 'i am here and there',
				id: 'sdjkfghdfljkghdfhd',
				isOpen: false
			}
		],
		isOpen: true
	};

	componentDidMount() {
		const list = JSON.parse(localStorage.getItem('ToDoAppList'));
		list ? this.setState({ list: list }) : this.setState({ list: [] });
	}

	addListItem = listItem => {
		const newListItem = { ...listItem, id: uuid() };
		let list = [ ...this.state.list, newListItem ];
		localStorage.setItem('ToDoAppList', JSON.stringify(list));
		this.setState(prevState => ({
			list: [ ...prevState.list, newListItem ]
		}));
	};

	deleteItem = id => {
		localStorage.setItem(
			'ToDoAppList',
			JSON.stringify(
				this.state.list.filter(item => item.id !== id).map(item => {
					return { ...item, isOpen: false };
				})
			)
		);
		this.setState({
			list: this.state.list.filter(item => item.id !== id).map(item => {
				return { ...item, isOpen: false };
			})
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

	toggleFormItem = id => {
		this.setState({
			list: this.state.list.map(item => {
				if (item.id === id) return { ...item, isOpen: !item.isOpen };
				return item;
			})
		});
	};

	otherListItemsFalse = id => {
		this.setState({
			list: this.state.list.map(item => {
				if (item.id !== id) {
					return { ...item, isOpen: false };
				}
				return { ...item, isOpen: true };
			})
		});
	};

	render() {
		const list = this.state.list.map(item => {
			return (
				<ListItem
					content={item.content}
					id={item.id}
					key={item.id}
					deleteItem={this.deleteItem}
					editItem={this.editItem}
					otherListItemsFalse={this.otherListItemsFalse}
					toggleFormItem={this.toggleFormItem}
					isOpen={item.isOpen}
				/>
			);
		});
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
