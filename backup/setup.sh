#!/usr/bin/env bash

read -p "gracemn.com MariaDB wordpress password: " PW1
read -p "members.gracemn.com MariaDB wordpress password: " PW2

sudo mkdir /srv/backup 2>/dev/null
sudo mkdir /srv/backup/gracemn.com 2>/dev/null
sudo mkdir /srv/backup/members.gracemn.com 2>/dev/null

# Wordpress data
sudo echo "00 00 * * *    root    tar -cvpzf /srv/backup/gracemn.com/`date +\%a`.tar.gz -C /srv/wordpress gracemn.com" | sudo tee /etc/cron.d/gracemn
sudo echo "05 00 * * *    root    tar -cvpzf /srv/backup/members.gracemn.com/`date +\%a`.tar.gz -C /srv/wordpress members.gracemn.com" | sudo tee /etc/cron.d/members

# MariaDB data
sudo echo "50 23 * * *    root    docker run --rm --net=gracemn_db -u root -v /srv/backup/gracemn.com:/backup mariadb sh -c \"mysqldump -h db -u wordpress --password='$PW1' wordpress > /backup/`date +\%a`.sql\"" | sudo tee -a /etc/cron.d/gracemn
sudo echo "55 23 * * *    root    docker run --rm --net=members_db -u root -v /srv/backup/members.gracemn.com:/backup mariadb sh -c \"mysqldump -h db -u wordpress --password='$PW2' wordpress > /backup/`date +\%a`.sql\"" | sudo tee -a /etc/cron.d/members
