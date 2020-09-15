const axios = require('axios');

const { assignCoin } = require('./util');

const instance = axios.create({
    baseURL: 'https://api.btcgateway.pro/',
    timeout: 30 * 1000,
});

exports.getCurrentPrice = function (coin) {
    coin = assignCoin(coin);
    return instance.get(`market/detail/merged`, {
        params: {
            symbol: `${coin}_CQ`,
        },
    }).then(res => res.data.tick);
}

exports.getMaPrice = function (coin) {
    coin = assignCoin(coin);
    return instance.get(`market/history/kline`, {
        params: {
            symbol: `${coin}_CQ`,
            period: '15min',
            size: 2000,
        },
    }).then(res => res.data.data);
}

module.exports = exports;