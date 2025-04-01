#!/bin/bash

current_date=$(date +%Y-%m-%d)

mkdir "$current_date"

cd "$current_date" || exit

echo "Created and changed to directory: $current_date"

code .