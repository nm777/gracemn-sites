#!/bin/bash

TODAY=`date +\%a`
YEAR=`date +\%Y`
BACKUP_DIR=/srv/backup
WORDPRESS_ROOT=/srv/wordpress

backup () {
	SITE=$1
	DB_CONTAINER=$2
	DB_ROOT_PASSWORD=$3
	BACKUP_PATH=$BACKUP_DIR/$SITE/$TODAY

	tar -cvpzf $BACKUP_PATH.tar.gz --exclude="$SITE/uploads" -C $WORDPRESS_ROOT $SITE

	if [ "$SITE" == "members.gracemn.com" ] && [ "$TODAY" == "Mon" ]; then
		RETURN_TO=`pwd`
		cd $WORDPRESS_ROOT
		find $SITE/uploads -type f -newermt $YEAR-01-01 | tar -cvpzf $BACKUP_DIR/$SITE/uploads-$YEAR.tar.gz -T -
		cd $RETURN_TO
	fi

	if [ "$SITE" != "members.gracemn.com" ]; then
		tar -cvpzf $BACKUP_DIR/$SITE/uploads.tar.gz -C $WORDPRESS_ROOT $SITE/uploads
	fi

	rm -rf $BACKUP_PATH
	mkdir -p $BACKUP_PATH

	docker exec -i $DB_CONTAINER sh -c "/usr/bin/mariadb-backup --backup --target-dir=/backup/$TODAY --user=root --password=$DB_ROOT_PASSWORD"

	chmod -R a+r $BACKUP_PATH
	find $BACKUP_PATH -type d -exec chmod 755 {} +
}

backup 'gracemn.com'         'gracemn-db-1' 'd2AW3SzX3ebZmUhL'
backup 'members.gracemn.com' 'members-db-1' 'yFqHB9CGTukxU8gl'

