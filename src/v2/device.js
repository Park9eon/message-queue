'use strict';

/**
 * Created by park9eon on 2019-01-25
 */

function work(message) {
    require("./server").request(message);
}

function start() {
    return new Promise((resolve, reject) => {
        for (let i = 0 ; i < 10 ; i++) {
            setTimeout(((i) => () => {
                work(`Count : ${i}`);
                console.log('[DEVICE] work!');
                if (i === 9) {
                    resolve();
                }
            })(i), 1000 * i);
        }
    });
}

module.exports = {
    start
};

