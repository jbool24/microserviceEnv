FROM python:3.5

# defualt env variables, over-ride on main docker-compose.yml
ARG PYTHON_ENV=/opt/app/flask/.env
ARG PROJECT_PATH=/opt/app/flask

ENV PYTHON_ENV=$PYTHON_ENV
ENV PROJECT_PATH=$PROJECT_PATH

# Add user
RUN groupadd -r www-app &&\
    useradd -r -g www-app www-app

RUN pip3 install virtualenv

RUN virtualenv $PYTHON_ENV

COPY scripts/build-flask.sh /usr/bin/build-flask

RUN chmod 700 /usr/bin/build-flask

WORKDIR /opt/app/flask

