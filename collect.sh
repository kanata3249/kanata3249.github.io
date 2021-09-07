#!/bin/sh

FREEQUESTDATAVIEWER_FOLDER=../FreeQuestDataViewer
CHALDEAVIEWER_FOLDER=../ChaldeaViewerProd

pushd .

cd $FREEQUESTDATAVIEWER_FOLDER
yarn dist

popd
pushd .

cd $CHALDEAVIEWER_FOLDER
yarn dist

popd

cp $FREEQUESTDATAVIEWER_FOLDER/dist/* freequest
cp $CHALDEAVIEWER_FOLDER/dist/* chaldea