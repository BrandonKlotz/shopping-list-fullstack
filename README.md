#FULLSTACK LAB PART 1

##Task:
Using Express, create a REST API to store and update the shopping list data on the back end. Begin to convert your React front-end to use Redux and connect to the new REST API.

##Node:
Keep your original shopping list lab intact. Make a copy of it in the client folder for this lab.

##What does the application do?
1. An Express REST API server will have routes for GET, POST, PUT, and DELETE as follows:
	a. GET /api/items: respond with a JSON array of all items.
	b. POST /api/items: add an item to the list, giving it a generated ID.
	c. PUT /api/items/_ID_: update an item in the list.
	d. DELETE /api/items/_ID_: delete an item from the list.
2. The React front-end will be served from the same Express server.
3. On page load, the React front-end will get the initial shopping list items from the /api/items API endpoint.
4. Working ahead: Adding and deleting items in the React front-end calls the correct API endpoints and updates the UI by re-fetching the updated list of items from the API.

##Build Specifications:
1. Use Express to create your server.
2. Use the provided in‑memory‑database.js module to handle data.
3. Create a client folder that will house your front-end files. Adjust the server.js file accordingly to ensure Express is going to be using the client folder.
4. Before modifying your React code, test all your endpoints using Postman.
5. Convert your React app to use Redux for state and use AJAX to load in the shopping list from the API on page load. (It’s okay to break add and delete for now.)
6. Next, get add and delete working. It’s okay if you don’t finish these for this lab, but they will need to be done eventually for part 2.

##Bonus:
1. Modify the shopping list to allow updates, for example changing quantity of an item. Use the PUT endpoint you already made on your API server.