import React, { Component, Fragment } from 'react';

export default class ListItem extends Component {
	state = {
		content: this.props.content,
		isEdit: false
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

	render() {
		return (
			<div className="ListItem" id={this.props.id}>
				{this.state.isEdit ? (
					<Fragment>
						<form onSubmit={this.handleEditSubmit}>
							<input
								type="text"
								placeholder="Editing item"
								value={this.state.content}
								name="content"
								onChange={this.handleChange}
							/>
						</form>
						<button onClick={this.handleEditClick}>Cancel</button>
					</Fragment>
				) : (
					<Fragment>
						{this.props.content}
						<button onClick={this.handleEditClick}>Edit</button>
					</Fragment>
				)}

				<button onClick={this.handleDelete}>delete</button>
			</div>
		);
	}
}
