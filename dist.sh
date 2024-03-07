#!/bin/bash

STAGE=$1
if [[ $STAGE != "stg" && $STAGE != "dev" ]]; then
    echo "Unknown stage: $STAGE"
    exit -1
fi
DISTDIR=/var/www/html/$STAGE/

if [[ ! -d $DISTDIR ]]; then
    mkdir -p $DISTDIR
fi
cp -Rp chaldea freequest questbondcalculator index.html $DISTDIR
