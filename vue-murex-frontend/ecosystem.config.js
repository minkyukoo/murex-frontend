module.exports = {
  apps: [
    {
      name: 'vue-nuxt-pro',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs'
    }
  ]
}
