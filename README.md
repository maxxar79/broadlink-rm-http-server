# Docker Broadlink RM http server

Small 63Mb docker container that trigger IR commands from Broadlink RM device with http

This image will run on ARM64 and Intel, tested with Raspberry Pi 4


## Usage

```python

Create volume

 docker volume create --driver local \
      --opt type=none \
      --opt device=/home/ubuntu/docker/broadlink \
      --opt o=bind \
      broadlink

-------------------------

Run container

docker run \
  -p 1880:1880 \
  -e TZ=<timezone> \
  -v broadlink:/app \
  network_mode:host \
  maxxar79/broadlink-rm-http-server:latest

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