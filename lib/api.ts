import { graphql, GraphqlResponseError } from "@octokit/graphql";

interface IRepositoryIssueComment {
  totalCount: number;
}

interface IRepositoryIssue {
  databaseId: number;
  title: string;
  body: string;
  createdAt: number;
  comments: IRepositoryIssueComment;
}

export interface IRepositoryNode {
  node: IRepositoryIssue;
}

interface IRepositoryEdges {
  edges: IRepositoryNode[];
}

interface IRepository {
  repository: {
    issues: IRepositoryEdges;
  };
}

export async function getIssues() {
  const graphqlWithAuth = graphql.defaults({
    headers: {
      authorization: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
    },
  });

  const repositoryQuery = `
    {
      repository(owner: "zue-dev", name: "blog") {
          issues(last: 10, states: [OPEN], orderBy: {field: UPDATED_AT, direction: DESC}) {
              edges {
                  node {
                      databaseId
                      title
                      createdAt
                      comments {
                          totalCount
                      }
                  }
              }
          }
      }
    }
  `;

  try {
    const repository: IRepository = await graphqlWithAuth(repositoryQuery);
    return repository;
  } catch (error) {
    if (error instanceof GraphqlResponseError) {
      // throw graphql error
    } else {
      throw error;
    }
  }
}
