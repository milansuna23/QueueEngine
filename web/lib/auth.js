module.exports = function(messageBroker) {
  return function (req, res, next) {
    const exchange = messageBroker.default()
    const rpc = exchange.queue({ name: "auth", prefetch: 1, durable: false });

    exchange.publish({}, {
      key: "auth",
      reply: onReply
    });

    function onReply(data) {
      if (data.isAuth) {
        next();
      } else {
        res.status(400).send('Invalid grant type');
      }
    }
  }
}
