// config/webenv.js
// const path = require('path')
//const DotEnv = require('dotenv')

export default () => {
  console.log('configuring')
  // Let Vite handle it
  /*const envPath = path.resolve(__dirname, '.env')
  const dotenv = DotEnv.config({ path: envPath }).parsed
  console.log('dotenv')
  console.log(dotenv)*/

  var publicPath = import.meta.env.PUBLIC_PATH
  if (!publicPath) {
    import.meta.env.PUBLIC_PATH = publicPath = '/'
  }

  var serverUrl = import.meta.env.VITE_SERVER_URL
  if (!serverUrl) {
    import.meta.env.VITE_SERVER_URL = serverUrl = 'http://127.0.0.1:4000'
  }

  const url_object = new URL(serverUrl)
  const url_protocol = url_object.protocol
  const url_domain = url_object.hostname
  const url_port = url_object.port

  var graphqlUrl = import.meta.env.GRAPHQL_URL
  if (!graphqlUrl) {
    import.meta.env.GRAPHQL_URL = graphqlUrl = `${url_protocol}//${url_domain}:${url_port}/graphql/`
  }
  var subscriptionslUrl = import.meta.env.SUBSCRIPTIONS_URL
  if (!subscriptionslUrl) {
    import.meta.env.SUBSCRIPTIONS_URL = subscriptionslUrl = `ws://${url_domain}:${url_port}/graphql/`
  }
  // Need to stringify for webpack
  const env = Object.assign({}, import.meta.env)
  // console.log(env)

  for (const key in env) {
    if (typeof env[key] === 'string') {
      env[key] = JSON.stringify(env[key])
    }
  }
  // console.log('env')
  // console.log(env)

  return env
}
