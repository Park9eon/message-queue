'use strict';

/**
 * Created by park9eon on 2019-01-23
 */

const {connect} = require("./amqp");

(async () => {
    const connection = await connect();
    const channel = await connection.createChannel();
    const q = "task_queue";

    channel.assertQueue(q, {durable: false});
    channel.sendToQueue(q, new Buffer("Hello World!"), {persistent: true});
    console.log(" [x] Sent 'Hello World!'");
})();

(async () => {
    const connection = await connect();
    const channel = await connection.createChannel();
    const q = "task_queue";

    await channel.consume(q, (msg) => {
        console.log(msg.content.toString());
    }, {noAck: true});
})();

(async () => {
    const connection = await connect();
    const channel = await connection.createChannel();
    const q = "task_queue";

    channel.assertQueue(q, {durable: false});
    channel.sendToQueue(q, new Buffer("Hello World!"), {persistent: true});
    console.log(" [x] Sent 'Hello World!'");
})();
