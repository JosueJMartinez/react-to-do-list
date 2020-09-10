import React, { Component, Fragment } from 'react';
import '../../css/ListItem.css';

export default class ListItem extends Component {
	state = {
		content: this.props.content,
		isEdit: false,
		isScratched: false,
		isHovered: false
	};

	handleDelete = e => {
		this.props.deleteItem(this.props.id);
	};

	handleEditClick = e => {
		this.setState(prevState => {
			return { isEdit: !prevState.isEdit };
		});
	};

	handleEditSubmit = e => {
		e.preventDefault();
		this.props.editItem({
			content: this.state.content,
			id: this.props.id
		});
		this.setState({ isEdit: false });
	};

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleScratch = e => {
		this.setState({ isScratched: !this.state.isScratched });
	};

	render() {
		return (
			<li className="ListItem" id={this.props.id}>
				<span
					onClick={this.handleDelete}
					className="trash listItemButtons"
				>
					<i className="far fa-trash-alt" />
				</span>

				{this.state.isEdit ? (
					<Fragment>
						<span
							className="edit listItemButtons"
							onClick={this.handleEditClick}
						>
							<i className="far fa-window-close" />
						</span>
						<form onSubmit={this.handleEditSubmit}>
							<input
								type="text"
								placeholder="Editing item"
								value={this.state.content}
								name="content"
								onChange={this.handleChange}
							/>
						</form>
					</Fragment>
				) : (
					<Fragment>
						<span
							onClick={this.handleEditClick}
							className="edit listItemButtons"
						>
							<i className="fas fa-edit" />
						</span>
						<span
							onClick={this.handleScratch}
							className={`${this.state.isScratched && 'strike-through'}`}
						>
							{this.props.content}
						</span>
					</Fragment>
				)}
			</li>
		);
	}
}
