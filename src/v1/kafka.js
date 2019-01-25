'use strict';

/**
 * Created by park9eon on 2019-01-25
 */

const Kafka = require('node-rdkafka');

console.log(Kafka.features);

const producer = new Kafka.Producer.createWriteStream({
    'metadata.broker.list': 'localhost:9092'
}, {}, {
    topic: 'topic-name'
});

const queueResult = producer.write(Buffer.from('Hello, World!'));

if (queueResult) {
    console.log("Success!");
} else {
    console.log("Error!");
}




