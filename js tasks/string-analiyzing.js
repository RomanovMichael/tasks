
// Самостоятельная работа 
const path = "/users/download/index.html"

const surf ='https://romanovmichael.github.io/surfproject/'
let isHtml = function(way) {
    if (way.includes ('.html')){
        return true 
    } else {
        return false
    }

}
console.log(isHtml(path));


// Воркшоп 

const isItHtml = path => {
const requiredExt = ".html";
const pathExt = path.slice(-5);

 return pathExt == requiredExt

}
console.log(isItHtml(path));