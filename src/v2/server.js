'use strict';

/**
 * Created by park9eon on 2019-01-25
 */
const {Producer} = require("node-rdkafka");
const device = require("./device");

const producer = new Producer({
    'metadata.broker.list': 'localhost:9092',
    'dr_cb': true
});

producer.on('event.log', function(log) {
    console.log(log);
});

producer.on('event.error', function(err) {
    console.error('Error from producer');
    console.error(err);
});

producer.on('ready', function(arg) {
    deviceConnect();
});

producer.connect();

async function deviceConnect() {
    await device.start();
}

function request(message) {
    console.log(`[SERVER] Message is requested! [${message}]`);
    sendToMQ(message);
}

function sendToMQ(message) {
    const key = Math.round(Math.random() * 1000);
    producer.produce('topic-name', -1, Buffer.from(message), key + "");
}

module.exports = {
    request
};


