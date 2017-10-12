#!/bin/bash

#run as normal user
umask 002

#make build dir
echo "Creating build/js dir"
mkdir -p build/js

#bundle up pre-minify js
echo "Creating bundle.."
cat \
  "blockly_compressed.js" \
  "blocks_compressed.js" \
  "blocks/coins.js" \
  "javascript_compressed.js" \
  "php_compressed.js" \
  "msg/js/en.js" \
  > build/js/blockly.bundle.js
echo "SUCCESS: build/js/blockly.bundle.js"
