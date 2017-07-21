#!/bin/sh

set -e

./node_modules/truffle/build/cli.bundled.js compile
./node_modules/truffle/build/cli.bundled.js migrate
node ./scripts/prepare_web_app.js
./node_modules/http-server/bin/http-server ui
git checkout ui/app.js
