#!/bin/bash

mysql --user=root --password="${DB_ROOT_PASSWORD}" --execute "CREATE DATABASE IF NOT EXISTS ${MAIN_SITE_DB_NAME}"
mysql --user=root --password="${DB_ROOT_PASSWORD}" --execute "CREATE DATABASE IF NOT EXISTS ${MEMBERS_SITE_DB_NAME}"

mysql --user=root --password="${DB_ROOT_PASSWORD}" --execute "CREATE USER IF NOT EXISTS '${MAIN_SITE_DB_USER}'@'%' IDENTIFIED BY '${MAIN_SITE_DB_PASS}'"
mysql --user=root --password="${DB_ROOT_PASSWORD}" --execute "CREATE USER IF NOT EXISTS '${MEMBERS_SITE_DB_USER}'@'%' IDENTIFIED BY '${MEMBERS_SITE_DB_PASS}'"

mysql --user=root --password="${DB_ROOT_PASSWORD}" --execute "GRANT ALL ON ${MAIN_SITE_DB_NAME}.* TO '${MAIN_SITE_DB_USER}'@'%'"
mysql --user=root --password="${DB_ROOT_PASSWORD}" --execute "GRANT ALL ON ${MEMBERS_SITE_DB_NAME}.* TO '${MEMBERS_SITE_DB_USER}'@'%'"

