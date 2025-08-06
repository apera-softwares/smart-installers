import { gql } from "@apollo/client";

export const GET_SERVICES = gql`
  query GetServices {
    services {
      id
      title
      description
      icon {
        id
        url
      }
    }
  }
`;

export const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      id
      title
      description
      icon {
        id
        url
      }
    }
  }
`;
