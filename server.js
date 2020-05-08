/**
 * Required External Modules
 */

 const express = require("express");
 const path = require("path");

/**
 * App Variables
 */

 const app = express()
 const port = process.env.PORT || "8000"

/**
 *  App Configuration
 */

 app.use(express.json());
 app.use(express.static(path.join(__dirname, "public")));

let items=[];
let id = 0;

/**
 * Routes Definitions
 */

 app.get("/", (request, response) => {
     response.status(200).send("TO DO App");
 })

app.get("/api/items", (request, response, next) => {
    //Return all of the To Do Items
    response.json(items)
})

app.post("/api/items", (request, response, next) => {
// get request body and add appropiate
// item JS object to our items array
    console.log('entering post')
    const incomingItem = request.body;
    if (incomingItem.item) {
        id = id + 1; 
        const newItem = {
            id: id,
            item: incomingItem.item,
            completed: false,
        };
        items.push(newItem);
        response.json(newItem);
    } else {
        response.status(400).json({error: "Item needs a description"})
    }
})

app.delete("/api/items/:id", (request, response, next) => {
    //locate the request which will give ID
    const itemId = Number(request.params.id)
    //Number(request.params.id);
    //With ID, we'll have to go through array and 
    //through each object to see if it has the ID
    const itemToDelete = items.find((item) => {
        return item.id === itemId;
    });

    //if it does, we delete it
    if(itemToDelete) {
        //We'll use the splice method, which requires
        //knowing where itemToDelete's index is within 
        //The index array
        const itemIndex = items.indexOf(itemToDelete);
        items.splice(itemIndex, 1);
        response.json(itemToDelete);
    }
    //if we don't see anything, return 404
    else {
        response.status(404).json({error: "id not found"})
    };
})

app.put("/api/items/:id", (request, response, next) => {
    const itemId = Number(request.params.id);
    const itemToComplete = items.find((item) => {
        return item.id === itemId;
    });
    if (itemToComplete) {
        itemToComplete.completed = !itemToComplete.completed;
        //We'll use the splice method, which requires
        //knowing where itemToDelete's index is within 
        //The index array
        const itemIndex = items.indexOf(itemToDelete);
        items.splice(itemIndex, 1, itemToComplete);
        response.json(itemToComplete);
    } else {
        response.status(404).json({ error: "ID not found"})
    }
})

/**
 * Server Activation
 */

 app.listen(port, () => {  
     console.log(`Listening to request on http://localhost:${port}`);
    })