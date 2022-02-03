import { graphql, GraphqlResponseError } from "@octokit/graphql";

interface IRepositoryIssueComment {
  totalCount: number;
}

export interface IRepositoryNode {
  node: {
    title: string;
    comments: IRepositoryIssueComment;
  };
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
            issues(last: 3) {
                edges {
                    node {
                        title
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
