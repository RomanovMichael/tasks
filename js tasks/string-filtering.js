// Самостоятельная работа 


const vowels = ["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я"]
const string = "Привет! Как дела?";
let getVowels = function (str) {
    let letter = '';
    str = str.toLowerCase()
    for (let char of str) {
        if (vowels.includes(char)) {
            letter += char
        }
    }
    return letter;
}

console.log(getVowels(string));


// Воркшоп. Вариант 1 

const phrase = "Здравствуй, Катя) Как дела ?)";

const onlyVowels = stringToFilter => {
    let extractedVowels = '';


    for (let i = 0; i < stringToFilter.length; i++) {
        const letter = stringToFilter[i].toLowerCase();

        if (vowels.indexOf(letter) != -1) {
            extractedVowels += letter;
        }
    }

    return extractedVowels
}

console.log(onlyVowels(phrase));


// Воркшоп. Ввариант 2 

const topVowels = stringForFilter => {
    let newVowels = '';

    for (let i = 0; i < stringForFilter.length; i++) {
        const vowelsItem = stringForFilter[i].toLowerCase();

        if (vowels.includes(vowelsItem)) {
            newVowels += vowelsItem
        }
    }
    return newVowels;
}

console.log(topVowels(string));