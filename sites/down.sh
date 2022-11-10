#!/usr/bin/env bash

docker compose -p members -f members/docker-compose.yml down
docker compose -p gracemn -f gracemn/docker-compose.yml down

