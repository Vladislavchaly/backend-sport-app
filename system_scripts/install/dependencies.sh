#!/bin/bash

npm install

node ace migration:run
node ace  db:seed
