---
title: 'REST API From Scratch'
description: "To better understand how REST servers and HTTP connections work, I decided to build one from scratch starting with a TCP connection that is handed over to a connection manager that spawns goroutines for different to parse the http request and route it to the right endpoints.\n

The overall functionality of the server is to store and retrieve contact information in a SQLite database through two endpoints, a GET endpoint to retrieve all and a POST to save a new contact."
technologies: "Go,REST,SQLite,Concurrency"
github: "https://github.com/durid-ah/go_rest_web_server"
---