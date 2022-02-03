import { graphql, GraphqlResponseError } from "@octokit/graphql";

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
    const repository = await graphqlWithAuth(repositoryQuery);
    return repository;
  } catch (error) {
    if (error instanceof GraphqlResponseError) {
      // throw graphql error
    } else {
      throw error;
    }
  }
}
