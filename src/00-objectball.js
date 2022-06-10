


function gameObject(){
    var Object={
    Home:{
        teamName: " Brooklyn Nets",
        Colors: ["Black", "white"],
        Players: {
            "Alan Anderson":{
                Number: 0,
                Shoe: 16,
                Points: 22,
                Rebounds:12,
                Assists:12,
                Steals:3,
                Blocks:1,
                SlamDunks:1,
            },
            "Reggie Evans":{
                Number: 30,
                Shoe: 14,
                Points: 12,
                Rebounds:12,
                Assists:12,
                Steals:12,
                Blocks:12,
                SlamDunks:7,
            },
            "Brook Lopez":{
                Number: 11,
                Shoe: 17,
                Points: 17,
                Rebounds:19,
                Assists:10,
                Steals:3,
                Blocks:1,
                SlamDunks:15,
            },
            "Mason Plumlee":{
                Number: 1,
                Shoe: 19,
                Points: 26,
                Rebounds:12,
                Assists:6,
                Steals:3,
                Blocks:8,
                SlamDunks:5,
            },
            "Jason Terry":{
                Number: 31,
                Shoe: 15,
                Points: 19,
                Rebounds:2,
                Assists:2,
                Steals:4,
                Blocks:11,
                SlamDunks:1,
            }
        }
        },
    Away:{
        teamName: " Charlotte Hornets",
        Colors: ["Turquoise", "Purple"],
        Players: {
            "Jeff Adrien":{
                Number: 4,
                Shoe: 18,
                Points: 10,
                Rebounds:1,
                Assists:1,
                Steals:2,
                Blocks:7,
                SlamDunks:2,
            },
            "Bismak Biyombo":{
                Number: 0,
                Shoe: 16,
                Points: 12,
                Rebounds:4,
                Assists:7,
                Steals:7,
                Blocks:15,
                SlamDunks:10,
            },
            "DeSagna Diop":{
                Number: 2,
                Shoe: 14,
                Points: 24,
                Rebounds:12,
                Assists:12,
                Steals:4,
                Blocks:5,
                SlamDunks:5,
            },
            "Ben Gordon":{
                Number: 8,
                Shoe: 15,
                Points: 33,
                Rebounds:3,
                Assists:2,
                Steals:1,
                Blocks:1,
                SlamDunks:0,
            },
            "Brendan Haywood":{
                Number: 33,
                Shoe: 15,
                Points: 6,
                Rebounds:12,
                Assists:12,
                Steals:22,
                Blocks:5,
                SlamDunks:12,
            }
        }
        }
    }
    return Object;
}

function homeTeamName() {
    let object = gameObject()
    return object['Home']['teamName']
}

console.log(homeTeamName())


let pointer = gameObject();

function players(){
const homePlayers= pointer.Home.Players;
const awayPlayers= pointer.Away.Players;
return Object.assign({}, homePlayers, awayPlayers)
}
function numPointsScored (input){
    for (const playerName in players()){
        if (playerName === input){
            return players()[playerName].Points;
        }
    }
}
console.log (numPointsScored ("Alan Anderson"))

function shoeSize (input2){
    for (const playerName in players()){
        if (playerName === input2){
            return players()[playerName].Shoe;
        }
    }
}
console.log (shoeSize ("Alan Anderson"))

function color(){
    const homeColor = pointer.Home.Colors;
    const awayColor= pointer.Away.Colors;
    return Object.assign({}, homeColor, awayColor)}

function teamColors (teamInput){
    for (const colorTeam in color()){
        if (colorTeam === teamInput){
            return players()[teamInput].Colors;
        }
    }
    }
    teamColors (" Charlotte Hornets")