#!/usr/bin/env node

const chalk = require('chalk');
const getFile = require('./index');
const validateURLs = require('./errorHandling');

const path = process.argv;

async function textProcess (path) {
    
    const result = await getFile(path[2]);

    if (path[3] === 'validate') {
        console.log(chalk.yellow("Validate Links: "), await validateURLs(result))
    } else {
        console.log(chalk.yellow("Links List: "), result)
    }
}

textProcess(path)