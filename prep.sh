#! /bin/bash
yarn build
rm -rf throwback
rm throwback.zip
mv build throwback
zip -r throwback.zip throwback