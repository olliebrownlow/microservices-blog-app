# Microservices Blog App

## Description

Simple app in which a user can create a post (title only!) and then create comments on the post, and have them displayed under the post title.

- Example screenshot:
  ![screenshot1](./client/public/screenshots/example-screenshot.png)

## Project structure

The project currently contains 3 services:

- posts (port 4000)
- comments (port 4001)
- query (port 4002)

an event broker:

- event-bus (port 4005)

and a react front end

- client (port 3000)

All posts and comments are held in memory. The browser must be refreshed for posts and comments to appear.

## How it works

Each time a post is submitted, it is stored in memory and an event is emitted to the event bus. The event is picked up by the event bus which then sends it back to the service it originated from and to all of the other services. The other services then deal with the event, and in the case of the query service, it stores the information about the event in a data structure like this:

```javascript
posts ===
  {
    j123kw: {
      id: "j123kw",
      title: "post title",
      comments: [{ id: "kle9yd", content: "comment!" }],
    },
  };
```

The react front end then makes a single request to the query service and is able to use the data structure that is returned to populate the view with all of the current posts and comments.

## Getting started

Clone this repository, navigate into each sub folder in a **separate** command line console and run `npm start`. This will start each element and allow them to communicate with each other as you create and post comments and blog posts.

## Tech stack

- React
- Express
- Nodemon
- Axios
