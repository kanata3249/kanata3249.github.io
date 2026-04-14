#!/bin/bash

FREEQUESTDATAVIEWER_FOLDER=../FreeQuestDataViewer

pushd .

cd $FREEQUESTDATAVIEWER_FOLDER
bash update_data.sh
pnpm dist

popd

cp $FREEQUESTDATAVIEWER_FOLDER/dist/* freequest
