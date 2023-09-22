#!/bin/bash

FREEQUESTDATAVIEWER_FOLDER=../FreeQuestDataViewer

pushd .

cd $FREEQUESTDATAVIEWER_FOLDER
bash update_dropdata.sh
yarn dist

popd

cp $FREEQUESTDATAVIEWER_FOLDER/dist/* freequest
