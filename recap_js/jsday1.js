// const arr = [1, 2, 3, 4, 5, 6, 7, 8]


// const toHash = str => {
//     let idx = 0;

//     for (let char of str) {
//         debugger
//         const charCode = char.charCodeAt();
//         console.log(charCode);
//         idx += charCode % 5
//         console.log(idx)
//     }
//     return idx
// }

// arr[toHash("banana")] = "squid"

// console.log(arr)


// function NBAPlayer(name, team, pos){
//     this.name = name;
//     this.team = team;
//     this.pos = pos;
// }

// NBAPlayer.prototype.payment = function(){
//     if (this.pos == "pointgaurd") {
//         return 100000000
//     }
// }

// const curry = new NBAPlayer("Stephen Curry", "Nicks", "pointgaurd")
// console.log(curry.payment())

// let callback = function() {
//     console.log("you're in")
// }

// setTimeout(() => console.log("you're in"), 5000)

function mysteryScoping1() {
    const x = 'out of block';
    if (true) {
        const x = 'in block';
        console.log(x);
    }
    console.log(x);
}
// mysteryScoping1()

function madLib(verb, adj, noun){
    return `We shall ${verb} the ${adj} ${noun}`
}

// console.log(madLib("fuck", "hottest", "bitches"))

const isSubstring = function(string, s){
    return string.split(" ").includes(s)
}

// console.log(isSubstring("time to program", "time"))
// console.log(isSubstring("Jump for joy", "joys"))

const isPrime = (arg1) => {
    for (let i = 2; i < arg1; i ++){
       if (arg1 % i === 0)  return false ;
        continue ;
    }
    return true
};

// console.log(isPrime(2))
// console.log(isPrime(10))
// console.log(isPrime(15485863))
// console.log(isPrime(3548563))


// Array.prototype.uniq = function(){
//     const uniq = []
//     for (let num of this){
//         if (uniq.includes(num)) continue ;
//         uniq.push(num)
//     }
//     return uniq
// }

// console.log([1, 2, 2, 3, 3, 3].uniq())

// Array.prototype.twoSum = function() {
    
//     let pair = [];
//     // debugger
//     loop1: for (let num in this){
//         for (let n in this){
//             // debugger
//             if (num !== n && (this[num] + this[n] === 0)) {
//                 // pair.push(num, n)
//                 return [num, n]
//                 // break loop1
//             }
//         }
//     }

// }

// console.log([5,1,2,-2, -5].twoSum())

Array.prototype.transpose = function() {
    const transposed = [];
    
    for (let row = 0; row < this.length; row ++){
        let curr = []
        for ( let col = 0; col < this[row].length; col++){
            curr.push(this[col][row])
        }
        transposed.push(curr)
    }
    return transposed
}

const x = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// console.log(x.transpose())
const NUMS = [1, 2, 3, 4, 5];

Array.prototype.myEach = function(callback){
    // debugger
    for (let i = 0; i < this.length; i ++){
        callback(this[i])
    }
}

NUMS.myEach((num) => {
    // console.log(`square of ${num} is ${num * num}`);
});

Array.prototype.myMap = function(cb){
 
    const mappedArray = []

     this.myEach(element => mappedArray.push(cb(element)))

    return mappedArray
}

// console.log(NUMS.myMap(num => num * num));


function getNumberOfIslands(binaryMatrix) {
    let numOfIsles = 0;
    debugger
    for (let row = 0; row < binaryMatrix.length; row++) {
        for (let col = 0; col < binaryMatrix[row].length; col++) {
            if (binaryMatrix[row][col] === 1) {
                // console.log(binaryMatrix[row][col])
                if (col !== binaryMatrix[row].length -1  && binaryMatrix[row][col + 1] === 1) numOfIsles++;
                // console.log(binaryMatrix[row][col + 1])
                if (col !== 0 && binaryMatrix[row][col - 1] === 1) numOfIsles++;
                // console.log(binaryMatrix[row][col - 1])
                if (row !== 0 && binaryMatrix[row - 1][col] === 1) numOfIsles++;
                // console.log(binaryMatrix[row - 1][col])
                if (row !== binaryMatrix.length - 1  && binaryMatrix[row + 1][col] === 1) numOfIsles++;
                binaryMatrix[row][col] = 0;
            }
        }
    }
    return numOfIsles 
}

const binaryMatrix = [[0, 1, 0, 1, 0],
[0, 0, 1, 1, 1],
[1, 0, 0, 1, 0],
[0, 1, 1, 0, 0],
[1, 0, 1, 0, 1]]

[   [1, 0, 1, 0], 
    [0, 1, 1, 1], 
    [0, 0, 1, 0], 
    [1, 1, 0, 0], 
    [0, 1, 0, 1]]

console.log(getNumberOfIslands(binaryMatrix))
