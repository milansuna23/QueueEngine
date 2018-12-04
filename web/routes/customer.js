const authGuard = require('../lib/auth');

module.exports = function(app, messageBroker) {
  function createCustomer(req, res, next) {
    const { body } = req;
    const exchange = messageBroker.default()
    const rpc = exchange.queue({ name: "customer.create", prefetch: 1, durable: false });

    exchange.publish(body, {
      key: "customer.create",
      reply: onReply
    });

    function onReply(data) {
      res.json(data);
    }
  }

  app.post('/api/customer', createCustomer);
  // app.post('/api/customer', authGuard(messageBroker), createCustomer);
}
