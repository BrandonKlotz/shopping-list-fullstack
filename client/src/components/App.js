import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItemToDatabase } from '../actions';
import ListItem from "./ListItem";
import AddNewItem from "./AddNewItem";

class App extends Component {

	render() {

		const renderShoppingList = this.props.shoppingList.map((item) => (
			<ListItem key={item.id} item={item}/>
		));

		function round(value, decimals) {
			return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
		}

		let CartTotal = 0;
    this.props.shoppingList.map((item) => { CartTotal += Number(round(item.price, 2))});

		const itemSubTotal = this.props.item.price * this.props.item.quantity;

		return (
			<div className="Form">
				<div>
					<h3>Shopping List</h3>
					<div className="Heading">
						<span><i className="fa fa-check fa-sm"></i></span>
						<span className="ItemInfo">Item</span>
						<span className="ItemInfo">Quantity</span>
						<span className="ItemInfo">Price</span>
						<span className="ItemInfo">Total</span>
					</div>
					<div className="Total"></div>
					{renderShoppingList}
				</div>
				<div className="Total">
          <h4>Grand Total: <span> ${CartTotal}</span></h4>
        </div>
				<div><AddNewItem onSubmit={this.props.addItemToDatabase}/></div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		loading: state.loading,
		shoppingList: state.shoppingList
	};
}

const mapActionsToProps = {
    addItemToDatabase
};

export default connect(mapStateToProps, mapActionsToProps)(App);
