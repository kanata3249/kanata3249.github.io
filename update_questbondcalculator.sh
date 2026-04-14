#!/bin/bash

QUESTBONDCALCULATOR_FOLDER=../QuestBondCalculator

pushd .

cd $QUESTBONDCALCULATOR_FOLDER
pnpm build

popd

rm -Rf questbondcalculator/*
cp -Rp $QUESTBONDCALCULATOR_FOLDER/build/* questbondcalculator
