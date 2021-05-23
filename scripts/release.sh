#!/bin/bash
# requires https://hub.github.com
git remote get-url origin | grep -q 'govuk-react/govuk-react' || exit 1 # ensure origin doesn't point to a fork
git checkout -b release/next origin/master # make a new branch for next version from master
git fetch --tags # lerna uses tags to determine what has changed, we need to make sure we have all tags locally
yarn lerna publish --skip-npm # update version numbers
VERSION=$(node -e 'console.log(require("./packages/govuk-react/package.json").version)') # get new version number
git tag -d v$VERSION # delete local tag
git branch -m release/v$VERSION # rename branch
git push -u origin release/v$VERSION # publish new branch
hub pull-request -m v$VERSION # open a pull request
hub release create -d v$VERSION -m v$VERSION # create a draft release
