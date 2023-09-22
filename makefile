.PHONY: up logs stop down

build:
	docker compose up --build

up:
	docker compose up -d

logs:
	docker compose logs -f

stop:
	docker compose stop

down:
	docker compose down --remove-orphans
