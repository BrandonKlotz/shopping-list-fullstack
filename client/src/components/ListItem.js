import React, { Component } from "react";
import { connect } from 'react-redux';
import { removeItemFromDatabase } from '../actions';
import "font-awesome/css/font-awesome.css";

class ListItem extends Component {


	render() {
		return (
			<div className="Item">
				<button onClick={() => this.handleDelete()} className="Card__button ContactCard__button ContactCard__button--delete"><i className="fa fa-trash fa-sm"></i></button>
				<span className="ItemInfo">{this.props.item.item}</span>
				<span className="ItemInfo">${this.props.item.price}</span>
			</div>
		);
	}

	handleDelete = () => {
    	this.props.removeItemFromDatabase(this.props.item.id);
	};

}

const mapActionsToProps = {
    removeItemFromDatabase
};

export default connect(null, mapActionsToProps)(ListItem);
