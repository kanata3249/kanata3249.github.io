#!/bin/bash
DISTDIR=~/deploy/dev/kanata3249

STAGE=$1
if [[ $STAGE != "stg" && $STAGE != "dev" ]]; then
    echo "Unknown stage: $STAGE"
    exit -1
fi
DISTDIR=~/deploy/$STAGE/kanata3249

if [[ ! -d $DISTDIR ]]; then
    mkdir $DISTDIR
fi
cp -Rp chaldea freequest index.html $DISTDIR
