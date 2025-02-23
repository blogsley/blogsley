const config = {
    PUBLIC_PATH: import.meta.env.PUBLIC_PATH,
    VITE_SERVER_URL: import.meta.env.VITE_SERVER_URL,
    VITE_GRAPHQL_URL: import.meta.env.VITE_GRAPHQL_URL,
    VITE_SUBSCRIPTIONS_URL: import.meta.env.VITE_SUBSCRIPTIONS_URL,
  };
  
  console.log(config);
  
  export default config;
  