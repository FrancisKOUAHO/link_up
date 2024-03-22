#!/usr/bin/env bash

docker compose down -v

docker compose up --build -d --remove-orphans

sleep 10

docker exec -it back node ace migration:rollback --batch 0

docker exec -it back node ace migration:run  

docker exec -it back node ace db:seed --files "./database/seeders/user_seeder.ts"

docker exec -it back node ace db:seed --files "./database/seeders/entreprise_seeder.ts"

docker exec -it back node ace db:seed --files "./database/seeders/card_seeder.ts"

docker exec -it back node ace db:seed --files "./database/seeders/card_share_seeder.ts"
