const throng = require('throng');
const jackrabbit = require('jackrabbit');
const onRequest = require('./handler');


const CONCURRENCY = process.env.WEB_CONCURRENCY || 1;
const RABBIT_URL = process.env.CLOUDAMQP_URL || 'amqp://localhost';

throng({ workers: CONCURRENCY, lifetime: Infinity }, start);

function start(id) {
  console.log({ type: 'info', message: `starting kitten service id: ${id}` });

  const rabbit = jackrabbit(RABBIT_URL);

  rabbit.once('connected', create);
  process.once('uncaughtException', onError);

  function create() {
    const exchange = rabbit.default();
    const rpc = exchange.queue({ name: "kitten.get", prefetch: 1, durable: false });

    rpc.consume(onRequest);
  }

  function onError(err) {
    console.log({ type: 'error', service: 'kitten', error: err, stack: err.stack || 'No stacktrace' }, process.stderr);
    console.log({ type: 'info', message: 'killing kitten' });
    process.exit();
  }
}