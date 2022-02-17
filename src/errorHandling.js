const chalk = require('chalk')

function errorHandling (err) {
    throw new Error(chalk.red(err.message))
}

module.exports = errorHandling;