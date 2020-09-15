const ora = require('ora');
const chalk = require('chalk');

const { getMa, judgeTitle } = require('./util');

exports.executeMaPrice = function (program) {
    const spinner = ora('Loading...');
    spinner.start();
    program.getMaPrice.then(res => {
        spinner.succeed('Success');
        const day = getMa(res, 20 * 4 * 4 * 6);
        const h_4 = getMa(res, 20 * 4 * 4);
        const h_1 = getMa(res, 20 * 4);
        const m15 = getMa(res, 20);
        const now = getMa(res, 1);
        console.log(chalk.green('日   线: '), chalk.yellow.underline.bold(day), judgeTitle(day, now));
        console.log(chalk.green('4 小 时: '), chalk.yellow.underline.bold(h_4), judgeTitle(h_4, now));
        console.log(chalk.green('1 小 时: '), chalk.yellow.underline.bold(h_1), judgeTitle(h_1, now));
        console.log(chalk.green('15 分钟: '), chalk.yellow.underline.bold(m15), judgeTitle(m15, now));
        console.log(chalk.green('当   前: '), chalk.yellow.underline.bold(now));

    }).catch(e => {
        spinner.fail('Fail');
        console.log(chalk.red.bold(e.toString()));
    });
}

module.exports = exports;