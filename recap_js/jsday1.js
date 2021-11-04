function NBAPlayer(name, team, pos){
    this.name = name;
    this.team = team;
    this.pos = pos;
}

NBAPlayer.prototype.payment = function(){
    if (this.pos == "pointgaurd") {
        return 100000000
    }
}

const curry = new NBAPlayer("Stephen Curry", "Nicks", "pointgaurd")
console.log(curry.payment())
