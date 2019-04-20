#!/bin/bash

sudo mkdir /srv/mariadb
sudo mkdir -p /srv/wordpress/{gracemn.com,members.gracemn.com}/{plugins,themes,uploads}

docker-compose up -d

