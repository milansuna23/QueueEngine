const faker = require('faker');

module.exports = async function onRequest(data, reply) {
  console.log('Request received.');

  const isAuth = faker.random.boolean();

  reply({ isAuth });
}
