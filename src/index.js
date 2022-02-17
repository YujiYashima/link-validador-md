const chalk = require('chalk');
const fs = require('fs');
const errorHandling = require('./http-validation')

const extractLinks = text => {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResults = [];
    let temp;

    while ((temp = regex.exec(text)) !== null) {
        arrayResults.push({ [temp[1]]: temp[2] })
    }

    return arrayResults.length === 0 ? 'Links Not Found!!' : arrayResults;
}

async function getFile(filePath){
    try {
        const text = await fs.promises.readFile(filePath, 'utf-8')
        console.log(chalk.bgGreen("Operation Completed Successfully!!"))        
        console.log("")
        return extractLinks(text)
    } catch (error) {
        console.log(chalk.bgRed("Failed to Complete the Operation!!"))        
        console.log("")
        errorHandling(error)
    }
}

module.exports = getFile;