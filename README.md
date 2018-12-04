# hdengine
Node based API engine, provides integration layer.

**Service oriented version.**

## Concepts
The idea is to create a flexible architure that could allow to move service
in their own repo with their own release cycle later on.

A few concepts to quite in mind:
  - Decouple service from API definition
  - Queue based communication
  - Heroku specificities
    - app.json for review apps
    - Procfile for dynos formation
  - Nodejs performance improvements (throng for multi theading)


## Project Organization

The project is follow a simple architecture.
  /
  |-- scripts  // scripts used to setup different environments
  |-- services // contains all services (i.e. customer, auth, invoice...)
  | |-- service 1
  | | |-- index.js // script to start a service
  | | |-- handler.js // function executed by the service
  | |-- ...
  | |-- service N
  |-- web // create the interfaces to one or more serivce (API and/or UI)
  | |-- lib // common libraries
  | |-- pages // web UI
  | |-- routes // API Interface
  | |-- index.js // script to start the web server
  | |-- web.js // web application definition
  |-- app.json
  |-- Procfile

## Installation

### Dev

RabbitMQ is required for this app to work.
Install locally or use docker (run on port 5672)