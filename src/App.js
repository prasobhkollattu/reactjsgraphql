import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Posts from "./posts";
const client = new ApolloClient({
  uri: "http://localhost:4000/"
});
function App() {
  return (
    <div className="container mt-5">
      <ApolloProvider client={client}>
        <Posts />
      </ApolloProvider>
    </div>
  );
}

export default App;
