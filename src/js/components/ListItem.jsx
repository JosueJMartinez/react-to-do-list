import React, { Component, Fragment } from 'react';
import '../../css/ListItem.css';

export default class ListItem extends Component {
	state = {
		content: this.props.content,
		isScratched: false
	};

	handleDelete = e => {
		this.props.deleteItem(this.props.id);
	};

	handleEditClick = e => {
		this.props.otherListItemsFalse(this.props.id);
	};

	handleEditSubmit = e => {
		e.preventDefault();
		this.props.editItem({
			content: this.state.content,
			id: this.props.id,
			isOpen: false
		});
		this.props.toggleFormItem(this.props.id);
	};

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleScratch = e => {
		this.setState({ isScratched: !this.state.isScratched });
	};

	handleKeyDown = e => {
		if (e.keyCode === 27) {
			this.props.toggleFormItem(this.props.id);
			this.setState({ content: this.props.content });
		}
	};

	render() {
		return (
			<li className="ListItem" id={this.props.id}>
				{this.props.isOpen ? (
					<Fragment>
						<form onSubmit={this.handleEditSubmit}>
							<input
								type="text"
								placeholder="Editing item"
								value={this.state.content}
								name="content"
								onChange={this.handleChange}
								onKeyDown={this.handleKeyDown}
								autoFocus
							/>
						</form>
					</Fragment>
				) : (
					<Fragment>
						<span
							onClick={this.handleDelete}
							className="trash listItemButtons"
						>
							<i className="far fa-trash-alt" />
						</span>
						<span
							onClick={this.handleEditClick}
							className="edit listItemButtons"
						>
							<i className="fas fa-edit" />
						</span>
						<span
							onClick={this.handleScratch}
							className={`${this.state.isScratched &&
								'strike-through'} content`}
						>
							{this.props.content}
						</span>
					</Fragment>
				)}
			</li>
		);
	}
}
