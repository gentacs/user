#!/bin/bash
export PGPASSWORD=mysecretpassword
FILE_CREATION=./createDatabase.sql
FILE_DATA=./testData.sql

echo "starting container..."
docker run --rm --name postgres-server -p 5432:5432 -e POSTGRES_PASSWORD=$PGPASSWORD -d postgres:alpine
echo "OK"
sleep 2
echo "creating schema..."
PGPASSWORD=$PGPASSWORD psql -h localhost -U postgres -f $FILE_CREATION
echo "OK"

echo "Inserting data..."
PGPASSWORD=$PGPASSWORD psql -h localhost -U postgres -d guser -f $FILE_DATA
echo "OK"
