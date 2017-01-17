#!/bin/bash

source $PYTHON_ENV/bin/activate

pip install --no-cache-dir -r requirements.txt

SCRIPT="$1"

if [[ ${PROJECT_PATH:0:1} = "/" ]]; then
    export PROJECT_PATH=$PROJECT_PATH
fi

cd $PROJECT_PATH

su -c "cd $PROJECT_PATH; $SCRIPT" -s /bin/bash www-app
