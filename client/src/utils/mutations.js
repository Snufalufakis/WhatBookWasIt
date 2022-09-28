import { gql } from "@apollo/client";

// login

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        username
        email
        _id
        password
      }
    }
  }
`;

// create a new user
export const CREATE_USER = gql`
    mutation CreateUser(
        email: String!, 
        password: String!, 
        username: String!) {
        createUser( 
            username: $username,
            email: $email, 
            password: $password) {
            token
            user {
                username
                email
                _id
                password
            }
        }
    }`;

// add a book
export const ADD_BOOK = gql`
  mutation AddBook(
    $description: String!
    $bookId: String!
    $title: String!
    $link: String!
    $image: String!
    $authors: [String]
  ) {
    addBook(
      description: $description
      bookId: $bookId
      title: $title
      link: $link
      image: $image
      authors: $authors
    ) {
      username
      _id
      email
      addedBooks {
        _id
        title
        link
        image
        authors
        bookId
        description
      }
    }
  }
`;

// delete a book
export const DELETE_BOOK = gql`
  mutation DeleteBook($bookId: String!) {
    deleteBook(bookId: $bookId) {
      _id
      username
      addedBooks {
        title
        link
        image
        authors
        bookId
        description
      }
    }
  }
`;
