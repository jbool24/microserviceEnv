FROM phusion/baseimage:0.9.19

RUN apt-get update &&\
    apt-get install -y npm &&\
    npm install -g n

ARG NODE_VERSION=latest
ARG NODE_ENV=production
ARG DEBUG=false
ARG PROJECT_PATH=/opt/app/
ARG YARN=false

ENV YARN=$YARN
ENV PROJECT_PATH=$PROJECT_PATH
ENV NODE_ENV=$NODE_ENV
ENV DEBUG=$DEBUG

# Add
RUN groupadd -r www-app &&\
    useradd -r -g www-app www-app

# Install the specified NODE_VERSION or grab latest
RUN n "$NODE_VERSION"

# Install Yarn

RUN if [ ${YARN} = true ]; then \
    npm install -g yarn \
;fi

RUN if [ ${BUNDLER} = true ]; then \
    npm install -g ${BUNDLER_NAME} \
;fi

COPY scripts/run-nodock.sh /usr/bin/run-nodock

RUN chmod 700 /usr/bin/run-nodock

WORKDIR /opt/app
