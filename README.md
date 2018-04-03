# Docker all the things!

Docker compose demo for a web app with Django (backend) and Express
(frontend).

## What is this?

Main goal of this architecture was to have separate frontend and backend
applications. Nginx is used here to avoid CORS and to ease development.
Postgres is the database chosen for the backend.

Coordination between these applications is _documented_ in
`docker-compose.yml`. Each one of this apps has a Dockerfile.

## TODO:

* expressjs app with PM2
* setup nginx to handle static files (backend & frontend)
