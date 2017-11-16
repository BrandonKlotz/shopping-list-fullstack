import React, { Component } from 'react';

class AddNewItem extends Component {

	constructor(props) {
		super(props);
		this.state = {
			item: "",
			price: "",
			quantity: ""
		};
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
					<label>Item
						<input value={this.state.item} placeholder="Add List Item" onChange={this.handleItem.bind(this)} required />
					</label>
					<label>Item Price
						<input type="number" placeholder="Item Price" value={this.state.price} onChange={this.handlePrice.bind(this)} required />
					</label>
					<label>Quantity
						<input type="number" placeholder="Item Price" value={this.state.quantity} onChange={this.handleQuantity.bind(this)} required />
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

	handleQuantity(event) {
		this.setState({
			quantity: event.target.value
		});
	}

	handleSubmit(event) {
		event.preventDefault();

		this.props.onSubmit({
			item: this.state.item,
			price: this.state.price,
			quantity: this.state.quantity
		});

		this.setState({
			item: "",
			price: "",
			quantity: ""
		});
	}

}

export default AddNewItem;
