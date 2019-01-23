'use strict';

/**
 * Created by park9eon on 2019-01-23
 */

const {connect} = require("./amqp");

(async () => {
    const connection = await connect();
    const channel = await connection.createChannel();
    const q = "hello";

    channel.assertQueue(q, {durable: false});
    // Note: on Node 6 Buffer.from(msg) should be used
    channel.sendToQueue(q, new Buffer("Hello World!"));
    console.log(" [x] Sent 'Hello World!'");

    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q);
    channel.consume(q, function(msg) {
        console.log(" [x] Received %s", msg.content.toString());
    }, {noAck: true});
})();
