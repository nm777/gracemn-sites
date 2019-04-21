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

