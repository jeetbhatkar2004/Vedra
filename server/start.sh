#!/bin/bash

# Start PostgreSQL if not running
if ! docker ps | grep -q vedra-pg; then
    echo "Starting PostgreSQL container..."
    docker start vedra-pg
    sleep 2
fi

# Start the FastAPI server
echo "Starting FastAPI server..."
docker run --rm -p 8000:8000 --env-file .env --network host vedra-server
