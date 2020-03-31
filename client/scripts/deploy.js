const { execSync } = require('child_process')

execSync('rimraf dist', { stdio: 'inherit'})

const { SITE_ID } = process.env

switch (SITE_ID) {
  case '@blogsley/blocksley-demo':
    execSync('yarn workspace @blogsley/blocksley-demo deploy', { stdio: 'inherit'})
    break;
  case '@blogsley/blogsley':
    execSync('yarn workspace @blogsley/blogsley deploy', { stdio: 'inherit'})
    break;  
}
