# Docker Broadlink RM http server

Small 50-65Mb docker container that trigger IR commands from Broadlink RM device with http

This image will run on both 32-bit (armv7l) and 64-bit (aarch64) Raspberry Pi and Intel plattform


## Usage

```python

Run container for test

docker run \
  --name broadlink-rm-http-server
  -p 1880:1880 \
  -e TZ=<timezone> \
  --network="host" \
  maxxar79/broadlink-rm-http-server:latest

-------------------------

Recommended way create volume example

 docker volume create --driver local \
      --opt type=none \
      --opt device=/home/ubuntu/docker/broadlink \
      --opt o=bind \
      broadlink

------------------------

Docker-compose

version: "2"
services:
  broadlink:
    image: maxxar79/broadlink-rm-http-server:latest
    restart: always
    ports:
      - 1880:1880
    network_mode: host
    environment:
      - TZ=<timezone>
    volumes:
      - broadlink:/app

```

## Config

See [https://github.com/TheAslera/broadlink-rm-http](https://github.com/TheAslera/broadlink-rm-http) for more info

Thanks to [https://github.com/jaedb/broadlink-http-node](https://github.com/jaedb/broadlink-http-node) for config examples