#!/bin/bash

docker-compose up -d

docker exec sport_app_node sh -c "killall -9 node && node ace serve --watch"
