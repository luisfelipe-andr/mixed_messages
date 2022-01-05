function generateRandomNumber(num) {
    return Math.floor(Math.random() * num);
}

const collectiveWisdom = {
    signInfo: ['star', 'moon', 'sun', 'comet'],
    fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
    advice: ['go out and eat', 'not read this', 'play more', 'trust no one']
}

// store the wisdom in an array
let personalWisdom = [];

// iterate over the object
for (let prop in collectiveWisdom) {
    let optionIdx = generateRandomNumber(collectiveWisdom[prop].length);

    // use the object's properties to customize the message being added to pesonalWisdom
    switch(prop) {
        case 'signInfo':
            personalWisdom.push(`Your sign right now is a "${collectiveWisdom[prop][optionIdx]}".`)
            break;
        case 'fortuneOutput':
            personalWisdom.push(`You are having: "${collectiveWisdom[prop][optionIdx]}".`)
            break;
        case 'advice':
            personalWisdom.push(`You should: "${collectiveWisdom[prop][optionIdx]}".`) 
            break;
        default:
            personalWisdom.push(`There is not enough info.`)
    }
}

function formatWisdom(wisdom) {
    const formatted = personalWisdom.join('\n');
    console.log(formatted);
}

formatWisdom(personalWisdom);   