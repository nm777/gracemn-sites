#!/bin/bash

BASE=/srv/wordpress

# The basics
sudo mkdir $BASE 2>/dev/null
sudo cp ./wait-for-it.sh $BASE

# members.gracemn.com
NAME=members
FQDN=members.gracemn.com
SITE_BASE=$BASE/$FQDN
sudo mkdir $SITE_BASE 2>/dev/null
sudo cp ./$NAME/uploads.ini $SITE_BASE

read -p "Enter the MariaDB password for $FQDN: " DB_PASS

echo "Enter credentials for restricted access to the member web site:"
read -p "Username: " WEB_USER
read -p "Password: " WEB_PASSWORD

echo "SITE_FQDN=$FQDN" > ./$NAME/.env
echo "DB_PASS=$DB_PASS" >> ./$NAME/.env
cp ./$NAME/.env .
docker compose -p $NAME -f $NAME/docker-compose.yml up -d

# gracemn.com
NAME=gracemn
FQDN=gracemn.com
SITE_BASE=$BASE/$FQDN
sudo mkdir $SITE_BASE 2>/dev/null
sudo cp ./$NAME/googlec6efad7d42b69962.html $SITE_BASE

read -p "Enter the MariaDB password for $FQDN: " DB_PASS

echo "SITE_FQDN=$FQDN" > ./$NAME/.env
echo "DB_PASS=$DB_PASS" >> ./$NAME/.env
cp ./$NAME/.env .
docker compose -p $NAME -f $NAME/docker-compose.yml up -d
