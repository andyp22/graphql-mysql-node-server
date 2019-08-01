# GraphQL - MySQL Server

A simple node server designed to interface with a MySQL server via GraphQL.

## Setup

First you will need to clone the project and run:

``` bash
npm install
```

Next, you will need a MySQL database setup and running with access credentials and configurations provided by a configs-db.json file. To create your own configs-db.json file, duplicate and rename configs-db.example.json and modify the settings accordingly. You will at the very least need:

* db_name - The name of the database being accessed.
* db_user - The name for the user which is used to access the database.
* db_pass - The password for the specified user.
* db_host - The host used by the database.
* server_port - The port that the server should use.

The GraphiQL query page can be found at **_/graphiql_**.

* Example: http:\\\\localhost:3000\graphiql

## Use
In a terminal, run:

``` bash
babel-node server.js
```
