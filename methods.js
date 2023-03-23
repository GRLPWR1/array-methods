//сначала всё решила методами массивов и проверила через консоль. всё работает

let candidates = [
    {
    name: 'Василий Петров',
    age: 60,
    score: 98,
    serviceRecord: 36,
    },
    {
    name: 'Екатерина Фёдорова',
    age: 35,
    score: 90,
    serviceRecord: 7,
    },
    {
    name: 'Иван Иванов',
    age: 29,
    score: 67,
    serviceRecord: 2,
    },
    {
    name: 'Зинаида Абрамова',
    age: 45,
    score: 78,
    serviceRecord: 14,
    },
    {
    name: 'Виктор Олегов',
    age: 54,
    score: 85,
    serviceRecord: 21,
    },
];

let cosmonauts = [];

const filterByAge = (candidates) => {
    for (let candidate of candidates) {
        if (candidate.age < 50) {
            cosmonauts.push(candidate);
        };
    };
    return cosmonauts;
};
console.log(filterByAge(candidates));

const filterByScore = (candidates) => {
    for (let candidate of candidates){
        if (candidate.score >= 75) {
            cosmonauts.push(candidate);
        };
    };
    return cosmonauts;
};
console.log(filterByScore(candidates));

const filterByServiceRecord = (candidates) => {
    for (let candidate of candidates){
        if (candidate.serviceRecord >= 5) {
            cosmonauts.push(candidate);
        };
    };
    return cosmonauts;
};
console.log(filterByServiceRecord(candidates));

const sortByScore = (candidates) => {
    return candidates.sort((a, b) => a.score - b.score);
};
console.log(sortByScore(candidates));

const getMeanAge = (arr) => {
    let sum = 0;
    for (let el of arr) {
        sum += el.age;
    };
    return sum / arr.length;
};
console.log(getMeanAge(candidates));

const getMeanAgeReduce = (arr) => {
    let ageArr = arr.map(el => el.age);
    let ageSum = ageArr.reduce((acc, el) => acc += el);
    return ageSum / ageArr.length;

};
console.log(getMeanAgeReduce(candidates));

const getNamesOnly = (arr) => {
    return arr.map(el => el.name);

};
console.log(getNamesOnly(candidates));