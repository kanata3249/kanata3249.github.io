#!/bin/bash

CHALDEAVIEWER_FOLDER=../ChaldeaViewer

pushd .

cd $CHALDEAVIEWER_FOLDER
bash update_data.sh
yarn dist

popd

cp $CHALDEAVIEWER_FOLDER/dist/* chaldea