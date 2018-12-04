module.exports = function(app, messageBroker) {
  function getKitten(req, res, next) {
    const exchange = messageBroker.default()
    const rpc = exchange.queue({ name: "kitten.get", prefetch: 1, durable: false });

    exchange.publish({}, {
        key: "kitten.get",
        reply: onReply
      }
    );

    function onReply(data) {
      res.json(data.result);
    }
  }

  app.get('/api/kitten', getKitten);
}
