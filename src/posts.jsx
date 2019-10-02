import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Post from "./post";
class Posts extends Component {
  state = {};
  render() {
    return (
      <Query
        query={gql`
          {
            allPosts {
              title
              id
              userId
              body
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading)
            return (
              <div className="alert alert-success" role="alert">
                Loading ...
              </div>
            );
          if (error) {
            console.log(error);
            return (
              <div className="alert alert-danger" role="alert">
                {error.message}
              </div>
            );
          }

          const posts = data.allPosts.map(({ title, id, body }) => (
            <Post key={id} title={title} body={body} />
          ));
          return (
            <div>
              <h1>GraphQL Example:</h1>
              {posts}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default Posts;
