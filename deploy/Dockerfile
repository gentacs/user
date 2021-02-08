FROM arm64v8/node:alpine3.10

RUN apk update && apk add postgresql-client

ADD src /opt/user 
ADD node_modules/ /opt/node_modules/
ADD resources/*.sql /opt/resources/
ADD create_db_and_load_data.sh /bin/
ADD init.sh /opt/init.sh

EXPOSE 8000

ENTRYPOINT ["/opt/init.sh"]
