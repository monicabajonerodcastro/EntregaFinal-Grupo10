const fs = require('fs');
const { faker } = require('@faker-js/faker');

var dataTechnique = "";

const convertPrioriFileToArrayObject = async () => {
    const data = fs.readFileSync('./features/web/step_definitions/data/post_data.txt', {encoding:'utf8', flag:'r'});
    this.prioriData = buildData(data);
}

const setDataTechnique = (technique) => {
    this.dataTechnique = technique;
}

const getDataTechnique = () => {
    return this.dataTechnique;
}

const getPrioriDataFromArray = (field) => {
    const randomNumber = getRandomInt(0, this.prioriData.length);
    var object = this.prioriData[randomNumber];
    return object[field];
}

const getDataFromArray = (field) => {
    const randomNumber = getRandomInt(0, this.prioriData.length);
    var object = this.prioriData[randomNumber];
    return object[field];
}

const getFakerData = (field) => {
    switch(field){
        case 'postShortTitle':
            return faker.lorem.sentences(3);
        case 'postLongTitle':
            return faker.lorem.sentences(50);
        case 'postShortBody':
            return faker.lorem.paragraph();
        case 'postLongBody':
            return faker.lorem.paragraphs(20);
        case 'postRigthUrl':
            return faker.internet.url();
        case 'postWrongUrl':
            return faker.internet.domainWord();
        case 'postFutureDate':
            return convertDate(faker.date.between('2023-01-01T00:00:00.000Z', '2023-12-31T23:59:00.000Z'));
        case 'postPastDate':
            return convertDate(faker.date.between('2022-01-01T00:00:00.000Z', '2022-10-31T23:59:00.000Z'));
        case 'postWordsTags':
            return faker.lorem.words(2);
        case 'postSentenceTags':
            return faker.lorem.sentences(15);
        case 'postWrongTags':
            return faker.internet.domainWord();;
} 
}

module.exports = {
    convertPrioriFileToArrayObject, 
    setDataTechnique, 
    getDataTechnique, 
    getPrioriDataFromArray,
    getDataFromArray,
    getFakerData
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function buildData(data){
    var returnedObject = [];
    const lines = data.split(/\n/);
    for(let i = 1; i < lines.length; i++){
        var dataObject = {};
        const dataLine = lines[i].split(/\t/);
        dataObject.postShortTitle = dataLine[0];
        dataObject.postLongTitle = dataLine[1];
        dataObject.postShortBody = dataLine[2];
        dataObject.postLongBody = dataLine[3];
        dataObject.postRigthUrl = dataLine[4];
        dataObject.postWrongUrl = dataLine[5];
        dataObject.postFutureDate = dataLine[6];
        dataObject.postPastDate = dataLine[7];
        dataObject.postWordsTags = dataLine[8];
        dataObject.postSentenceTags = dataLine[9];
        dataObject.postWrongTags = dataLine[10];
        returnedObject.push(dataObject);
    }
    return returnedObject;
}

function convertDate(date){
    const year = date.getFullYear();    
    const month = date.getMonth() + 1 ;
    const newMonth = month < 10 ? "0"+month : month;
    const day = date.getDate();
    const newDay = day < 10 ? "0"+day : day;
    return year+"-"+newMonth+"-"+newDay;
}
