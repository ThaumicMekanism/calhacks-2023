all: start

start:
	docker-compose up -d --build

populatedb:
	docker exec -it uc-berkeley-hackathon-2023-backend-1 python3 manage.py populate_db

resetdb:
	docker exec -it uc-berkeley-hackathon-2023-backend-1 python3 manage.py reset_db