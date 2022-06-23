
//Cамостоятельная работа

const workers = [
    { name: "John", salary: 999 },
    { name: "Mike", salary: 1001 },
    { name: "Linda", salary: 1300 }];

let getWorthyWorkers = (mass) => {
    let arr = [];
    let index;
    for (index = 0; index < mass.length; index++) {
        if (mass[index].salary > 1000)
            arr.push(mass[index].name);
    }
    return arr
}
console.log(getWorthyWorkers(workers));






// Воркшоп. Вариант 1 

let newArr =[];
const getRichestWorkers = (workersArr) => {

  for (let i= 0; i < workersArr.length; i++) {

    const currentWorker = workersArr[i];

    if( currentWorker.salary > 1000) {
        newArr.push(currentWorker.name);
    }}
    return newArr
    };


console.log(getRichestWorkers(workers));


// Воркшоп. Вариант 2 


const getBestWorkers = (workersArr) => {
    const result = [];
    workersArr.forEach(currentWorker => {
        if ( currentWorker.salary>1000) {
            result.push(currentWorker.name)
        }
    })
    return result
}

console.log (getBestWorkers(workers))