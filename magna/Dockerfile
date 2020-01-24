# Official Base Image
FROM python:3.8.0-alpine

# set working directory
WORKDIR /code

# set environment variable
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install dependencies
RUN pip install --upgrade pip
COPY requirements.txt /code/
RUN pip install -r requirements.txt

COPY . /code/

RUN python manage.py runserver