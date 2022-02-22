module.exports = {
  apps: [
    {
      name: 'murex-frontend',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs'
    }
  ]
}
