#!/bin/bash
#
# This script runs in the buildspec before testing

cat example_inputs/inputs_1_create.json | sed "s/USER_NAME/${USER_NAME}/g" | sed "s/ROLE_NAME/${ROLE_NAME}/g" > inputs/inputs_1_create.json
cat test/integ-template.yml | sed "s/USER_NAME/${USER_NAME}/g" | sed "s/ROLE_NAME/${ROLE_NAME}/g" > test/integ.yml