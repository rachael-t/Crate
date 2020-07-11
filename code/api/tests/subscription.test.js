import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../src/setup/schema';

describe("user queries", () => {
  let server;

  beforeAll(async () => {
    server = express();

    server.use(
      '/',
      graphqlHTTP(request => ({
        schema: schema,
        graphiql: false
      })
    ))
  });

  it('returns all subscriptions', async () => {
     const response = await request(server)
     .get('/')
     .send({ query: '{ subscriptions { id user { id } crate { id } } }'})
     .expect(200)

     expect(response.body.data.subscriptions.length).toEqual(4)
  });
});
