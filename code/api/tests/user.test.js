import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../src/setup/schema'

describe("user queries", () => {
  let server;
  let newImage;
  let newDescription;

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

  it("returns a user by id", async () => {
    const response = await request(server)
    .get('/')
    .send({ query: '{ user(id: 1) { id name email image role } }'})
    .expect(200)

    expect(response.body.data.user.name).toEqual('The Admin')
    expect(response.body.data.user.role).toEqual('ADMIN')
    expect(response.body.data.user.id).toEqual(1)
    expect(response.body.data.user.email).toEqual('admin@crate.com')
    expect(response.body.data.user.image).toEqual('https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1145&q=80')
  });

  it('can update user image', async () => {
    newImage = 'https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1145&q=80'

    const response = await request(server)
    .post('/')
    .send({ query: `mutation { userUpdate(id: 2, image: "https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1145&q=80") { id image } }`})
    .expect(200)

    expect(response.body.data.userUpdate.image).toEqual(newImage)
  })

  it('can update user description', async () => {
    newDescription = "I love fashion"

    const response = await request(server)
    .post('/')
    .send({ query: 'mutation { userUpdate(id: 2, description: "I love fashion") { id description } }'})
    .expect(200)

    expect(response.body.data.userUpdate.description).toEqual(newDescription)
  })

  it('can update shipping address', async () => {
    const response = await request(server)
    .post('/')
    .send({query: `mutation { userUpdate(id: 2, address: "567 Crate St.", city: "Irvine", state: "CA", zip: "92602") { id address city state zip}}`})
    .expect(200)

    expect(response.body.data.userUpdate.address).toEqual("567 Crate St.")
    expect(response.body.data.userUpdate.city).toEqual("Irvine")
    expect(response.body.data.userUpdate.state).toEqual("CA")
    expect(response.body.data.userUpdate.zip).toEqual("92602")
  })

  it('can update email address', async () => {
    const repsonse = await request(server)
    .post('/')
    .send({ query: 'mutation { userUpdate(id: 2, email: "zach@crate.com") { id email } }' })
    .expect(200)

    expect(response.body.data.userUpdate.email).toEqual('zach@crate.com')
  })
});
