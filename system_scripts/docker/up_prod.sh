#!/bin/bash

docker-compose up -d

docker exec sport_app_node sh -c "killall -9 node && node ace build --production && cp .env build/.env && cd build && npm ci --production && npm run start -d"
