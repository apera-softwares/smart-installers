import { ApolloClient, InMemoryCache } from "@apollo/client";
import { BACKEND_API_URL } from "@/constants/api";

const client = new ApolloClient({
  uri: BACKEND_API_URL,
  cache: new InMemoryCache(),
});

export default client;
