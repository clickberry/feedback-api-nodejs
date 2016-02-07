#!/bin/bash
set -e

# set env variables
if [ -n "$NSQD_PORT_4150_TCP_ADDR" ] && [ -n "$NSQD_PORT_4150_TCP_PORT" ]; then
  export NSQD_ADDRESS="${NSQD_PORT_4150_TCP_ADDR}"
  export NSQD_PORT="${NSQD_PORT_4150_TCP_PORT}"
fi
echo "USING NSQD: ${NSQD_ADDRESS}:${NSQD_PORT}"

# execute nodejs application
exec npm start