FROM python:3.6-alpine

ENV PYTHONUNBUFFERED 1
ENV DJANGO_ENV dev
ENV DOCKER_CONTAINER 1

COPY . /code/
WORKDIR /code/

RUN apk update \
		&& apk add --virtual build-deps gcc python3-dev musl-dev \
		&& apk add postgresql-dev \
		&& pip install pipenv \
		&& pipenv install \
		&& apk del build-deps

EXPOSE 8000
