#!/usr/bin/env bash

set -e

RUNTIME_ROOT_PATH=${RUNTIME_ROOT_PATH:-"$( cd "$( dirname "${BASH_SOURCE[0]}" )" && cd ../ && pwd )"}

BITBUCKET_PULL_REQUEST_ID=$("${RUNTIME_ROOT_PATH}"/scripts/bb-pr-id.sh "${BITBUCKET_BRANCH}")

if [ -n "$BITBUCKET_PULL_REQUEST_ID" ]; then
    export SONAR_SCANNER_OPTS="-Xmx1024m"
    sonar-scanner \
        -Dproject.settings=sonar-project.properties \
        -Dsonar.analysis.mode=issues -Dsonar.bitbucket.repoSlug="${BITBUCKET_REPO_SLUG}" \
        -Dsonar.bitbucket.accountName="${BITBUCKET_REPO_OWNER}" \
        -Dsonar.bitbucket.branchName="${BITBUCKET_BRANCH}" \
        -Dsonar.bitbucket.oauthClientKey="${OAUTH_CLIENT_KEY}" \
        -Dsonar.bitbucket.oauthClientSecret="${OAUTH_CLIENT_SECRET}" \
        -Dsonar.login="${SONAR_LOGIN}" \
        -Dsonar.bitbucket.pullRequestId="${BITBUCKET_PULL_REQUEST_ID}"
fi
