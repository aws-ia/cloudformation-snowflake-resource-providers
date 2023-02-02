#!/bin/bash
#
# This script runs in the buildspec before testing

sed -i "s/WAREHOUSE_NAME/${WAREHOUSE_NAME}/g" inputs/inputs_1_create.json
sed -i "s/ROLE_NAME/${ROLE_NAME}/g" inputs/inputs_1_create.json
sed -i "s/WAREHOUSE_NAME/${WAREHOUSE_NAME}/g" nputs/inputs_1_update.json
sed -i "s/ROLE_NAME/${ROLE_NAME}/g" inputs/inputs_1_update.json
sed -i "s/WAREHOUSE_NAME/${WAREHOUSE_NAME}/g" test/integ.yml
sed -i "s/ROLE_NAME/${ROLE_NAME}/g" test/integ.yml