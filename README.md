# User

## Features
* Basic login.
* Endpoint return user information.
* Docker with database in postgresql.
* Use express framework.
* Proxy

## Requirements
* node
* pass
* Docker
* PostgreSql

## Start 

### pgp
```
gpg --full-gen-key
```

### pass
```
pass init "write pub key getted in previous step"
pass insert postgres/postgres
pass insert postgres/guser
```

### Docker with postgres

```
cd resources 
./runPgServer.sh
```

### Express

```
npm install
PG_PASS='pass postgres/guser' npm run start
```

## Next features

* https 
