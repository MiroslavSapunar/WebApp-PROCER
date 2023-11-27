.PHONY: build up quiet logs stop resetStrapi down exec 

build:
	docker compose up --build

up:
	docker compose up

quiet:
	docker compose up -d

logs:
	docker compose logs -f

stop: 
	docker compose stop

resetStrapi:
	docker compose restart strapi

down:
	docker compose down --remove-orphans

exec:
	docker run -it --rm -v "$(PWD):/usr/src/app" -w /usr/src/app node:18.18-alpine3.17 /bin/sh
