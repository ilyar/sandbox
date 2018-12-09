'use strict'

const cz = require('./.cz-config')

const level = {
  warning: 1,
  error: 2,
}

module.exports = {
  rules: {
    'body-leading-blank': [
      level.error,
      'always'
    ],
    'footer-leading-blank': [
      level.error,
      'always'
    ],
    'header-max-length': [
      level.error,
      'always',
      cz.subjectLimit
    ],
    'scope-case': [
      level.error,
      'always',
      'kebab-case'
    ],
    'scope-enum': [
      level.warning,
      'always',
      cz.scopes.map(type => type.name)
    ],
    'subject-empty':
      [level.error,
        'never'
      ],
    'subject-full-stop': [
      level.error,
      'never',
      '.'
    ],
    'type-case': [
      level.error,
      'always',
      'lower-case'
    ],
    'type-empty': [
      level.error,
      'never'
    ],
    'type-enum': [
      level.error,
      'always',
      cz.types.map(type => type.value)
    ]
  }
}
