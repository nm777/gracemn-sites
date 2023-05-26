#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

setDbPassword() {
    FQDN=$1
    CONFIG_DIR=$2
    ENV_FILE="$CONFIG_DIR/.env"

    if ! grep -q 'SITE_FQDN' $DIR/sites/gracemn/.env 2>/dev/null; then
        echo "SITE_FQDN=$FQDN" >> $ENV_FILE
    fi

    if ! grep -q 'DB_PASS' $DIR/sites/gracemn/.env 2>/dev/null; then
        read -p "Enter the database password for $FQDN: " DB_PASS
        echo "DB_PASS=$DB_PASS" >> $ENV_FILE
    fi
}

copyFiles() {
    BASE=/srv/wordpress

    sudo cp sites/members/uploads.ini $BASE/members.gracemn.com/
}

recompose() {
    COMPOSE_DIR=$1
    HERE=`pwd`

    cd $DIR/$COMPOSE_DIR
    docker compose up -d --force-recreate

    cd $HERE
}

# Set up passwords
setDbPassword members.gracemn.com sites/members
setDbPassword gracemn.com sites/gracemn

# Update files that may have changed
copyFiles

# Update versions
recompose sites/members
recompose sites/gracemn
recompose traefik
