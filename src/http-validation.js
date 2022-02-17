const fetch = require('node-fetch');
const errorHandling = require('./errorHandling')

async function checkStatus (arrayURLs) {
    try {
        const arrayStatus = await Promise.all(arrayURLs.map(async url => {
            const res = await fetch(url)
            return `${res.status} - ${res.statusText}`;
        }))
        return arrayStatus;
    } catch (error) {
        errorHandling(error)
    }
}

const generateUrlArrays = arrayLinks => arrayLinks.map(linkObject => Object.values(linkObject).join())

async function validateURLs (arrayLinks){
    const links = generateUrlArrays(arrayLinks)
    const status = await checkStatus(links)

    const result = arrayLinks.map((object, index) => ({
        ...object, 
        statusCode: status[index] 
    }))

    return result
}

module.exports = validateURLs;