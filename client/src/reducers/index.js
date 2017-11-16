const INITIAL_STATE = {
	loading: true,
	shoppingList: []
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case "REQUEST_SHOPPING_LIST":
			return Object.assign({}, state, {
				loading: true
			});
		case "RECEIVE_SHOPPING_LIST":
			return Object.assign({}, state, {
				loading: false,
				shoppingList: action.items
			});
		default:
			return state;
	}
}
