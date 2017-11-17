import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItemToDatabase } from '../actions';
import Item from "./Item";
import ItemForm from "./ItemForm";

class App extends Component {

	render() {

		const renderShoppingList = this.props.shoppingList.map((item) => (
			<Item key={item.id} item={item}/>
		));

		function round(value, decimals) {
			return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
		}

		let sum = 0;
		const renderSubTotal = this.props.shoppingList.map((item) => (
			sum += Number(item.price * item.quantity)
		));

		const renderGrandTotal = sum;

		return (
			<div className="Form">
				<div>
					<h3>Shopping List</h3>
					<div className="Heading">
						<span><i className="fa fa-check fa-sm"></i></span>
						<span className="ItemInfo">Item</span>
						<span className="ItemInfo">Price</span>
						<span className="ItemInfo">Quantity</span>
						<span className="ItemInfo">Total</span>
					</div>
					<div className="Total"></div>
					{renderShoppingList}
				</div>
				<div className="Total">
					<h3>
						Grand Total: $ {renderGrandTotal}
					</h3>
        </div>
				<div><ItemForm onSubmit={this.props.addItemToDatabase}/></div>
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
