#!/bin/bash

# Build the mount point for Traefik
BASE=/srv/traefik
sudo mkdir $BASE
sudo touch $BASE/acme.json
sudo chmod 600 $BASE/acme.json
sudo cp traefik.yaml $BASE
sudo chown -R root:root $BASE

# Start Traefik
docker compose -p traefik down > /dev/null
docker compose -p traefik up -d

