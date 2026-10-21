# Grace Ministries Web Server Setup

## Prerequisites

- Some physical or virtual hardware, properly configured
- Ubuntu Server 16.04

## Overview

1. Manual server setup
2. Automated tool configuration
3. Sites setup
4. Backup configuration
5. Monitoring (TODO)
6. Password changes (TODO)

## Manual server setup

Look at the script under `server-setup/01-first-steps.sh` and either copy/paste
or hand-key the steps to configure a user. You're basically bootstrapping your
access so you can do the rest of the configuration over a remote terminal, as
most KVM-style access doesn't offer good copy/paste features.

## Automated tool configuration

Execute `server-setup/02-apps.sh`. This script does the following:

- Set the timezone
- Remove the password requirement from sudo
- Install and configure docker
- Install docker-compose
- Install and configure vim

## Sites setup

Execute `server-setup/03-sites.sh`. This script does the following:

- Starts a Traefik instance
- Starts both the base site and the members site. You'll need to provide
  passwords for the database for both sites (and you should make them
  different)

## Backup configuration

Execute `server-setup/03-sites.sh`. This script does the following:

- Create cron entries to backup key wordpress files
- Create cron entries to backup MariaDB data

## Monitoring

TODO

## Password changes

This isn't a step in the configuration. It is a note about where password reside
so that in event that you need to change a password you know where to do it.

MariaDB passwords are stored in the following places:

- In the environment of both the Wordpress and MariaDB docker containers. Update
  an .env file and redeploy the entire compose stack with the updated password.
- In the `/etc/cron.d/<site>` file. These are used to create rotating backups.

## PHP security image (October 2026)

Both sites build `sites/wordpress/Dockerfile`, using WordPress 7.1.3 and rebuilding
PHP 8.3.36 from checksum-verified source to fix CVE-2026-109618 and CVE-2026-109619.
The build checks the PHP
version, required extensions, and Apache configuration. Switch back to a patched
official WordPress image once available, removing the custom build from both
Compose files.

After backing up the databases and WordPress files, run these commands on the
server from the repository root. Build successfully before replacing either
container; this does not upgrade or recreate MariaDB:

```bash
docker compose --project-directory sites/gracemn build --pull site
docker compose --project-directory sites/gracemn run --rm --no-deps site php -v
docker compose --project-directory sites/gracemn up -d --no-deps --force-recreate site
docker compose --project-directory sites/members up -d --no-deps --force-recreate site
docker compose --project-directory sites/gracemn exec site php -v
docker compose --project-directory sites/members exec site php -v
```

Stop if the build or version check fails. Confirm PHP 8.3.36 in both containers,
then check both sites, admin login, uploads, and image thumbnails. The image
replacement does not change the existing content or database bind mounts.
Do not use `update.sh` for this targeted rollout: it also updates MariaDB and
Traefik. Do not use `down -v`, which removes Docker-managed volumes.

## Maximum upload size

Wordpress has a default maximum upload size of 2MB. That's quite low for most
things. This has been increased, but if there is a need to increase it further
that can be done by editing `/sites/members/uploads.ini`. Note that you need to
update `memory_limit`, `upload_max_filesize`, and `post_max_size`.

Once you've updated the file, simply execute `/update.sh` on the server to
refresh the site with the updated settings.
