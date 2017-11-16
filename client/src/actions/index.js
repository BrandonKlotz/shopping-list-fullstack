import $ from "jquery-ajax";

export function fetchShoppingList() {
	return function(dispatch) {
		dispatch(requestShoppingList());
		// When working with a full-stack app, we can reach out APIs by just
		// using the URL path. Since it's the same domain, we can leave that off.
		$.get("/api/").done(function(data) {
			dispatch(receiveShoppingList(data));
		});
	};
}

export function addItemToDatabase(item) {
    return function(dispatch) {
        // Use the POST method and include the item JSON as the request body.
        $.ajax({
            url: "/api/",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify(item)
        }).done(function() {
			dispatch(fetchShoppingList());
		});
    };
}

export function removeItemFromDatabase(id) {
    return function(dispatch) {
        // Use the DELETE method.
        $.ajax({
            // When building URLs, encodeURIComponent helps keep the URL safe.
            url: "/api/" + encodeURIComponent(id),
            method: "DELETE"
        }).done(function() {
            // After making the change, fetch the updated contact list.
            dispatch(fetchShoppingList());
        });
    };
}

function requestShoppingList() {
	return {
		type: "REQUEST_SHOPPING_LIST"
	};
}

function receiveShoppingList(items) {
	return {
		type: "RECEIVE_SHOPPING_LIST",
		items
	};
}
