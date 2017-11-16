import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItemToDatabase, removeItemFromDatabase } from '../actions';
import ListItem from "./ListItem";
import AddNewItem from "./AddNewItem";

class App extends Component {

	render() {

		const renderShoppingList = this.props.shoppingList.map((item) => (
			<ListItem key={item.id} item={item}/>
		));

		let CartTotal = 0;
    this.props.shoppingList.map((item) => {
      CartTotal += Number(item.price);
    });

		return (
			<div className="Form">
				<div>
					<h3>Shopping List</h3>
					<div className="Total"></div>
					{renderShoppingList}
				</div>
				<div className="Total">
          <h4>Total: <span> ${CartTotal}</span></h4>
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
