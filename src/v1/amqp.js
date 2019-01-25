'use strict';

/**
 * Created by park9eon on 2019-01-23
 */
const amqp = require("amqplib");

module.exports = {
    connect: async () => {
        const connection = await amqp.connect('amqp://localhost');
        return connection;
    }
};
