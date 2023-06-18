all: start

build:
	docker-compose up --build

start:
	docker-compose up

populatedb:
	docker exec -it calhacks-2023-backend-1 python3 manage.py populate_db

resetdb:
	docker exec -it calhacks-2023-backend-1 python3 manage.py reset_db

stop:
	docker-compose down

clean:
	docker container rm -f $(shell docker container ls -aq)

