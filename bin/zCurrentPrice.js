const ora = require('ora');
const chalk = require('chalk');

exports.executeCurrentPrice = function (program) {
    const spinner = ora('Loading...');
    spinner.start();
    program.getCurrentPrice.then(res => {
        spinner.succeed('Success');
        console.log('Get the Data: ', chalk.yellow.underline.bold(res.close));
    }).catch(e => {
        spinner.fail('Fail');
        console.log(chalk.red.bold(e.toString()));
    });
}

module.exports = exports;