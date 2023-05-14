#!/bin/sh

CHALDEAVIEWER_FOLDER=../ChaldeaViewer

pushd .

cd $CHALDEAVIEWER_FOLDER
yarn dist

popd

cp $CHALDEAVIEWER_FOLDER/dist/* chaldea