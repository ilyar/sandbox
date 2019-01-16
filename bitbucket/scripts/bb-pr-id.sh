#!/usr/bin/env bash

set -e

RUNTIME_ROOT_PATH=${RUNTIME_ROOT_PATH:-"$( cd "$( dirname "${BASH_SOURCE[0]}" )" && cd ../ && pwd )"}

branchName=${1}
accessToken=$("${RUNTIME_ROOT_PATH}"/scripts/bb-token.sh)

curl -s -XGET "https://api.bitbucket.org/2.0/repositories/$BITBUCKET_REPO_OWNER/$BITBUCKET_REPO_SLUG/pullrequests?pagelen=5&state=OPEN&access_token=${accessToken}" | jq ".values[] | select(.source.branch.name==\"${branchName}\") | .id"
