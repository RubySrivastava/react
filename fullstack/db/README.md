# DB

This is a regular elastic search database bootstrapped with some fake data to give us something to work with.

**NOTE** You need to build this image before you can continue with the project. 

## Build it

```bash
./docker_build.sh
```

## Run it

```bash
./docker_run.sh
```

## Query it

Elastic search has an extensible query language. You probably won't have to touch it too much in practice - there is a provided lib for that in the `be` project. 

You can however query it for testing purposes.

```
curl -s http://localhost:9200/_all_/_search
curl -s http://localhost:9200/hosts/_search\?q\=description:this
```


## Add stuff to it

For testing only

```
curl -X PUT http://localhost:9200/testing/_doc/1\?pretty -H 'Content-Type: application/json' \
     -d'{"description" : "this is a test","timestamp" : "2021-03-01T12:34:45"}'
```
