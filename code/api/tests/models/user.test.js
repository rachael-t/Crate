import { graphql } from 'graphql';
import { schema } from 'index'

it('should return all users', async () => {
  //language=GraphQL
  const query = `
    query getAll {
      users {
        id,
        name
      }
    }
  `;
  const rootValue = {};
  const result = await graphql(schema, query, rootValue)
  const { data } = result;

  expect(data.length).toBe(3);
})