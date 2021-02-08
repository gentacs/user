#!/bin/sh
SQL_PATH=/opt/resources
PG_HOST=$POSTGRES_HOST
PG_PORT=$POSTGRES_PORT
PG_USER=$POSTGRES_USER
PG_PASSWORD=$POSTGRES_PASSWORD
PG_DB=$POSTGRES_DB

echo "creating database..."
PGPASSWORD=$PG_PASSWORD psql -h $PG_HOST -U $PG_USER -d $PG_DB --set USER_PASSWORD=$USER_PASSWORD --set GUSER=$GUSER -f $SQL_PATH/createDatabase.sql

echo "creating tables..."
PGPASSWORD=$USER_PASSWORD psql -h $PG_HOST -U $GUSER -d guser -f $SQL_PATH/createTables.sql
