const env = {
    PUBLIC_PATH: import.meta.env.PUBLIC_PATH || "/",
    VITE_SERVER_URL: import.meta.env.VITE_SERVER_URL || "http://127.0.0.1:4000",
    VITE_GRAPHQL_URL: import.meta.env.VITE_GRAPHQL_URL,
    VITE_SUBSCRIPTIONS_URL: import.meta.env.VITE_SUBSCRIPTIONS_URL,
  };
  
  // Parse server URL
  const urlObject = new URL(env.VITE_SERVER_URL);
  const urlProtocol = urlObject.protocol;
  const urlDomain = urlObject.hostname;
  const urlPort = urlObject.port;
  
  // Ensure GraphQL and Subscriptions URLs have fallback values
  const graphqlUrl = env.VITE_GRAPHQL_URL || `${urlProtocol}//${urlDomain}:${urlPort}/graphql/`;
  const subscriptionsUrl = env.VITE_SUBSCRIPTIONS_URL || `ws://${urlDomain}:${urlPort}/graphql/`;
  
  // Construct final config object
  const config = {
    ...env,
    VITE_GRAPHQL_URL: graphqlUrl,
    VITE_SUBSCRIPTIONS_URL: subscriptionsUrl,
  };
  
  console.log(config);
  
  export default config;
  