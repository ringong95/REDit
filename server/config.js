const nconf = require('nconf');
export const config = nconf

  .env([
    'PATH',
    'STATIC_PATH',
    'POSTGRESHOST',
    'POSTGRESUSER',
    'POSTGRESPASSWORD',
    'POSTGRESDBNAME',
  ])
  .argv()
  .defaults({
    'STATIC_PATH': '../web.browser/build',
    'HTTPS': (process.env.NODE_ENV === 'production')
  })
