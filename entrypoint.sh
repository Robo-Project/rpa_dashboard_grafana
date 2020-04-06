#!/bin/bash
set -xe
: "${BACKTOKEN?Need an api token}"

sed -i "s/BACKTOKEN/$BACKTOKEN/g" /var/lib/grafana/plugins/task-launch-panel/module.js
sed -i "s#BACKURL#$BACKURL#g" /var/lib/grafana/plugins/task-launch-panel/module.js

exec "$@"
