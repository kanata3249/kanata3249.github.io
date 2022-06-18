#!/bin/sh

CHALDEAVIEWER_FOLDER=../ChaldeaViewerProd

pushd .

cd $CHALDEAVIEWER_FOLDER
yarn dist

popd

cp $CHALDEAVIEWER_FOLDER/dist/* chaldea