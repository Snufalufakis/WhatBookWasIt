import { gql } from "@apollo/client";

// user query parameters

export const QUERY_USER = gql`
  query getUser {
    user {
      username
      addedBooks {
        authors
        description
        image
        link
        title
        bookId
      }
    }
  }
`;
