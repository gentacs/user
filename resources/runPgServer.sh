#!/bin/bash
export PGPASSWORD=$(pass postgres/postgres)
export PGPASSWORD_GUSER=$(pass postgres/guser)
SCRIPT_DIR=$(readlink -f $0)
BASE_DIR=$(dirname $SCRIPT_DIR)
FILE_CREATION=${BASE_DIR}/createDatabase.sql
FILE_CREATION_TABLES=${BASE_DIR}/createTables.sql
FILE_DATA=${BASE_DIR}/testData.sql

echo "starting container..."
docker run --rm --name postgres-server -p 5432:5432 -e POSTGRES_PASSWORD=$PGPASSWORD -d postgres:alpine
echo "OK"

sleep 2

echo "creating database..."
PGPASSWORD=$PGPASSWORD psql -h localhost -U postgres --set=password=$PGPASSWORD_GUSER -f $FILE_CREATION
echo "OK"

export PGPASSWORD=$(pass postgres/guser)

echo "Creating schema..."
PGPASSWORD=$PGPASSWORD_GUSER psql -h localhost -U guseruser -d guser -f $FILE_CREATION_TABLES
echo "OK"

echo "Inserting data..."
PGPASSWORD=$PGPASSWORD_GUSER psql -h localhost -U guseruser -d guser -f $FILE_DATA
echo "OK"
