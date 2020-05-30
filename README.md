# Microservices Blog App

## Description

Simple app in which a user can create a post (title only!) and then create comments on the post, and display them under the post title.

- Example screenshot:
  ![screenshot1](./client/public/screenshots/example-screenshot.png)

## Project structure

The project currentlyt contains 2 services:

- posts (port 4000)
- comments (port 4001)

an event broker:

- event-bus (port 4005)

and a react front end

- client (port 3000)

All posts and comments are held in memory. The browser must be refreshed for posts and comments to appear.

## How it works

Each time a post is submitted, it is stored in memory and it emits an event to the event bus. The event is picked up by the event bus which then sends it back to the service it originated from and to all of the other services.

## Getting started

Clone this repository, navigate into each sub folder in a **separate** command line console and run `npm start`. This will start each element and allow them to communicate with each other as you create and post comments and blog posts.

## Tech stack

- React
- Express
- Nodemon
- Axios
