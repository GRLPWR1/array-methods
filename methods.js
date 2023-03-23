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

const filterByScore = (arr) => {
    for (let el of arr){
        if (el.score >= 75) {
            cosmonauts.push(arr);
        };
    };
    return cosmonauts;
};
console.log(filterByScore(candidates));

const filterByServiceRecord = (arr) => {
    for (let el of arr){
        if (el.serviceRecord >= 5) {
            arr.push(el);
        };
    };
    return cosmonauts;
};
console.log(filterByServiceRecord(candidates));

const sortByScore = (arr) => {
    let newArr = arr.slice();
    return newArr.sort((a, b) => b.score - a.score);
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