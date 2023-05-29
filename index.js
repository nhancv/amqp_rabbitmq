require('dotenv').config();
// https://www.npmjs.com/package/amqplib
const amqplib = require('amqplib/callback_api');

// Sync connect with callback. 
// Avoid special chars in password such as '@' -> Convert to Percent-encoding
// https://developer.mozilla.org/en-US/docs/Glossary/percent-encoding 
// https://amqp-node.github.io/amqplib/channel_api.html
// https://www.urlencoder.org

amqplib.connect(process.env.AMQP_URL, (err, conn) => {
  if (err) throw err;
  console.log('AMQ connects successfully');
  conn.close();
});

