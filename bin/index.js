#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const { program } = require('commander');

const { executeMaPrice } = require('./zMaPrice');
const { executeCurrentPrice } = require('./zCurrentPrice');
const { getCurrentPrice, getMaPrice } = require('./http');


const package = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../package.json')));


program
    .version(package.version, '-v, --version')
    .option('-c, --getCurrentPrice <string>', 'get price from the market', getCurrentPrice)
    .option('-a, --getMaPrice <string>', 'get move average price from the market', getMaPrice);

program.parse(process.argv);

if (program.getCurrentPrice !== undefined) {
    executeCurrentPrice(program);
};

if (program.getMaPrice !== undefined) {
    executeMaPrice(program);
};
