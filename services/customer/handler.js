const { isAccountValid } = require('./schema');

module.exports = async function onRequest(data, reply) {
  console.log('-------');
  console.log(JSON.stringify(data, null, 2));
  console.log('-------');

  reply({ status: 'DONE', result: isAccountValid(data) });
}