all: start

build:
	docker-compose up --build

start:
	docker-compose up

stop:
	docker-compose down

clean:
	docker container rm -f $(shell docker container ls -aq)