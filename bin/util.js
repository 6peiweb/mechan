const chalk = require('chalk');

exports.assignCoin = function (coin) {
    const coins = ['BTC', 'ETH', 'ETC', 'EOS', 'BCH', 'BSV'];
    return Number(coin) > -1 ? coins[coin] : coin;
}

exports.getMa = function (res, n) {
    const len = res.length;
    const sum = res.slice(len - n, len).reduce((a, b) => a + b.close, 0);
    return (sum / n).toFixed(2);
}

exports.judgeTitle = function (data, basic) {
    return data > basic ? chalk.green.bold('↑') : chalk.red.bold('↓');
}

module.exports = exports;