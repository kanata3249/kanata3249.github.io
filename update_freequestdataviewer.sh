#!/bin/sh

FREEQUESTDATAVIEWER_FOLDER=../FreeQuestDataViewer

pushd .

cd $FREEQUESTDATAVIEWER_FOLDER
yarn dist

popd

cp $FREEQUESTDATAVIEWER_FOLDER/dist/* freequest
