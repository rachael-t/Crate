import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../src/setup/schema'

describe("user queries", () => {
  let server;

  beforeAll(() => {
    server = express();
    server.use(
      '/',
      graphqlHTTP({
        schema: schema,
        graphiql: false
      })
    );
  });

  it('returns all users', async () => {
     const response = await request(server)
     .get('/')
     .send({ query: '{ users { id name } }'})
     .expect(200)

     expect(response.body.data.users.length).toEqual(2)
  });

  it("returns a user by id", async() => {
    const reponse = await request(server)
    .get('/')
    .send({ query: '{ user(id: ) { id name eamil image role } }'})
    .expect(200)

    
    expect(response.body.data.user.name).toEqual('The Admin')
    expect(response.body.data.user.role).toEqual('admin')
    expect(response.body.data.user.id).toEqual('1')
    expect(response.body.data.user.email).toEqual('admin@crate.com')
    expect(response.body.data.user.image).toEqual('https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=939&q=80')
  })
})