import React, { Component } from 'react';

class AddNewItem extends Component {

	constructor(props) {
		super(props);
		this.state = {
			item: "",
			price: ""
		};
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
					<label>Item
						<input value={this.state.item} placeholder="Add List Item" onChange={this.handleItem.bind(this)} required/>
					</label>
					<label>Price
						<input type="number" placeholder="Item Price" value={this.state.price} onChange={this.handlePrice.bind(this)} required/>
					</label>
					<button type="submit" className="Submit">Add New Item</button>
			</form>
		);
	}

	handleItem(event) {
		this.setState({
			item: event.target.value
		});
	}

	handlePrice(event) {
		this.setState({
			price: event.target.value
		});
	}

	handleSubmit(event) {
		event.preventDefault();

		this.props.onSubmit({
			item: this.state.item,
			price: this.state.price
		});

		this.setState({
			item: "",
			price: ""
		});
	}

}

export default AddNewItem;
