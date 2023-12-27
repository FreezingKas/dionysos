#!/bin/sh

deno task build &
pid=$!

sleep 60

kill -s INT "$pid"