// count of .
// count of xx
// permutation - (. + xx)!/(.)!*(xx)!

function fact(num){
    let factorial = 1;
    for (let index = 1; index <= num; index++) {
        factorial = factorial * index;
    }
    return factorial;
}


let input = ".xx..x."

let countOfDot = 0;
let countOfXX = 0;

for (let index = 0; index < input.length; index++) {
    const element = input[index];
    if(element === "."){
        countOfDot += 1;
    }
}

for (let index = 0; index < input.length-1; index++) {
    const element1 = input[index];
    const element2 = input[index+1];
    if(element1 === "x" && element2 === "x"){
        countOfXX += 1;
        index++;
    }
}

console.log(countOfXX + " " + countOfDot)

let ans = fact(countOfXX + countOfDot)/(fact(countOfXX)*fact(countOfDot));

console.log(ans)

