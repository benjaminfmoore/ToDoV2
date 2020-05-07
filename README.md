# To Do API

(Endpoints)
(Need to define requests(input) and the response(outputs))

# APIS

## Get all items from list (read)

GET `/api/items`
Sample Response Body:

```
[{
    "id": 1
    "item": "Remember Milk"
    "complete": false
}, {
    "id": 2
    "item": "Get eggs"
    "complete": true
}]
```

## Create a new item

POST `/api/items`
Sample request body:

```
{
    "item": "What we just added" 
}
```

Once it does that, it returns the following response:

```
{
    "id": 3,
    "item": "What we just added",
    "Completed": false
}
```

## Delete an item

DELETE `/apid/item/:id[i]`
Once it does that, it returns the item that was deleted

```
{
    "id": 3,
    "item": "What we just added",
    "Completed": false
}
```

## Update the item (Checkbox/strikethrough)

PATCH `/apid/item/:id[i]`
Sample request body:

```
{
    "item": "get beer"
    "completed": true
}
```
Returns the updated item