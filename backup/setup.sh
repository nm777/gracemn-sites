#!/usr/bin/env bash

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

read -p "gracemn.com MariaDB wordpress password: " PW1
read -p "members.gracemn.com MariaDB wordpress password: " PW2

sudo mkdir -p /srv/backup/gracemn.com 2>/dev/null
sudo mkdir -p /srv/backup/members.gracemn.com 2>/dev/null

sudo cp -f $SCRIPT_DIR/backup.sh /srv/backup/

COUNT=$(sudo crontab -l | grep -c '/srv/backup/backup.sh')
if [ $COUNT -gt 0 ]; then
    sudo (crontab -l 2>/dev/null; echo "0 0 * * * /srv/backup/backup.sh >> /var/log/backup.log 2>&1") | crontab -
fi
