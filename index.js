
const filterByAge = (el) => {
    return el.age < 50;
};

const filterByScore = (el) => {
    return el.score >= 75;
};

const filterByServiceRecord = (el) => {
    return el.serviceRecord >= 5;
};

const sortByScore = (arr) => {
    return arr.sort((a, b) => a.score - b.score);
};

const getMeanAge = (arr) => {
    let sum = 0;
    for (let el of arr) {
        sum += el.age;
    };
    return sum / arr.length;
};

const getMeanAgeReduce = (arr) => {
    let ageArr = arr.map(el => el.age);
    let ageSum = ageArr.reduce((acc, el) => acc += el);
    return ageSum / ageArr.length;
};

const getNamesOnly = (arr) => {
    return el => el.name;
};

module.exports = {
filterByAge,
filterByScore,
filterByServiceRecord,
sortByScore,
getMeanAge,
getMeanAgeReduce,
getNamesOnly,
};
