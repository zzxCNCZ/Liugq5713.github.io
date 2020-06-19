# docker

## image

### [image is being used by stopped container](https://stackoverflow.com/questions/51188657/image-is-being-used-by-stopped-container)

移除某一个镜像 docker image rm <image_id>

移除所有镜像 `docker rm $(docker ps -q -a)`

### [docker tag](https://docs.docker.com/engine/reference/commandline/tag/)

打包镜像的时候，有的镜像可能没有 tag，需要手动打

`docker tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]`

## 参考

- [Docker 入门教程 - 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2018/02/docker-tutorial.html)
- [https://mherman.org/blog/dockerizing-a-react-app/](https://mherman.org/blog/dockerizing-a-react-app/)
