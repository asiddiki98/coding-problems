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