#!/bin/bash
#
# This script runs in the buildspec before testing

cat example_inputs/inputs_1_create.json | sed "s/WAREHOUSE_NAME/${WAREHOUSE_NAME}/g" | sed "s/ROLE_NAME/${ROLE_NAME}/g" > inputs/inputs_1_create.json
cat example_inputs/inputs_1_update.json  | sed "s/WAREHOUSE_NAME/${WAREHOUSE_NAME}/g" | sed "s/ROLE_NAME/${ROLE_NAME}/g" > inputs/inputs_1_update.json
cat test/integ-template.yml | sed "s/WAREHOUSE_NAME/${WAREHOUSE_NAME}/g" | sed "s/ROLE_NAME/${ROLE_NAME}/g" > test/integ.yml