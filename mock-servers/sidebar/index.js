const { ApolloServer, gql } = require('apollo-server');
const { fetchApps } = require('./resolvers/resolvers');
const typeDefs = gql`
  type Query {
    apps: [App]

  },
  type App {
    id: ID
    name: String
    domain: String
    url: String
  },
`;

const resolvers = {
    Query: {
      apps: fetchApps,
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen({ port: 4000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
});
