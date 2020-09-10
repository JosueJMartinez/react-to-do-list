import React, { Component, Fragment } from 'react';
import '../../css/ListItem.css';

export default class ListItem extends Component {
	state = {
		content: this.props.content,
		isEdit: false,
		isScratched: false
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
				<span onClick={this.handleDelete}>Delete</span>
				{this.state.isEdit ? (
					<Fragment>
						<span onClick={this.handleEditClick}>Cancel</span>
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
						<span onClick={this.handleEditClick}>Edit</span>
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
