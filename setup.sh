#!/usr/bin/env bash

docker compose down -v

docker compose up --build -d --remove-orphans
