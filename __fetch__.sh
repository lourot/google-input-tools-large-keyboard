#!/usr/bin/env bash

# NOTE(aurelien): I have a script on my machine that globs everyday all `__fetch__.*` files on the filesystem and runs
# them.

set -e

cd thirdparty/badges/
./download.sh
