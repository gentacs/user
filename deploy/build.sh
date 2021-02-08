#!/bin/sh
BUILD_PATH=`pwd`/`dirname $BASH_SOURCE`
rm -rf $BUILD_PATH/src
rm -rf $BUILD_PATH/resources/*

cp -r $BUILD_PATH/../src $BUILD_PATH
cp -r $BUILD_PATH/../resources/*.sql $BUILD_PATH/resources/
#cp -r $BUILD_PATH/../node_modules $BUILD_PATH

#docker login
#docker buildx create --use --platform linux/arm64 --name myarm64

docker buildx build --platform linux/arm64 --push -t gentacs/user:0.0.1-11 $BUILD_PATH
