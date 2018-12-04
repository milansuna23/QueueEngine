const fetch = require('node-fetch');

module.exports = async function onRequest(data, reply) {
  console.log('Request received.');

  const kittenResponse = await fetch('https://api.thecatapi.com/v1/images/search');
  const kittenJson = await kittenResponse.json();
  const kittenUrl = kittenJson[0].url

  reply({ result: kittenUrl});
}
