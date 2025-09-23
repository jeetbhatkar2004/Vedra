SHELL := /bin/bash
ENV ?= .env

include $(ENV)

.PHONY: up down logs init reset roles users

up:
	docker compose --env-file $(ENV) up -d

down:
	docker compose --env-file $(ENV) down

logs:
	docker compose --env-file $(ENV) logs -f web

init: up
	# Wait for services to be ready
	echo "Services started. Web server available at http://localhost:8080"
	echo "This is a simplified setup - full InvenioRDM installation requires manual setup"

roles:
	# Custom roles will be implemented in the full InvenioRDM setup
	echo "Custom roles defined in invenio-vedra extension"
	echo "Roles: institution_admin_university, institution_admin_college, institution_admin_department, institution_student, individual, publisher, founder"

users:
	# User management will be handled by InvenioRDM when fully installed
	echo "Admin user: admin@local.test / admin123 (configured in .env)"
	echo "User management will be available through InvenioRDM interface"

reset:
	docker compose --env-file $(ENV) down -v
	rm -rf data/db data/opensearch data/redis || true
