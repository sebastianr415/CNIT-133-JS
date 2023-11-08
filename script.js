function onSubmit(myForm){    
let fullName, userBrowser, userAge,movieItems;
fullName = document.getElementById("fName1").value
userAge = document.querySelector('input[name="age"]:checked')
userBrowser = document.querySelector('input[name ="checkbox"]:checked')

movieItems = myForm.movieList.options[myForm.movieList.selectedIndex].value

console.log(movieItems)


if(fullName && userAge && userBrowser && movieItems){
    document.getElementById("output").innerHTML = `Thanks your data was submitted!`
}else {document.getElementById("output").innerHTML = `your missing inputs`}

}

// part2
function pullDown1(){
var myDestination = document.getElementById("pullDownList").value
window.open(myDestination);
}

function pullDown2(){
var myDestination2 = document.getElementById("pullDownList2").value
window.open(myDestination2);
}

// part 3
function stateName (){

var stateInfo = []
stateInfo[0] = ["AL","Alabama","Montgomery","4,903,185"]
stateInfo[1] = ["AK","Alaska","Juneau","731,545"]
stateInfo[2] = ["AZ","Arizona","Phoenix","7,278,17"]
stateInfo[3] = ["AR","Arkansas","Little Rock","3,017,825"]
stateInfo[4] = ["CA","California","Sacramento","39,512,223"]
stateInfo[5] = ["CO","Colorado","Denver","5,758,736"]
// const stateInfo1 = [
//     {StateAbbr: "al",Statename: "alabama", Capital: "montgomery", population: "4,903,185"},
//     {StateAbbr: "ak",Statename: "alaska", Capital: "juneau", population: "731,545"},
//     {StateAbbr: "az",Statename: "arizona", Capital: "phoenix", population: "7,278,717"},
//     {StateAbbr: "ar",Statename: "arkansas", Capital: "little rock", population: "3,017,825"},
//     {StateAbbr: "ca",Statename: "california", Capital: "sacramento", population: "39,512,223"},
//     {StateAbbr: "co",Statename: "coloradp", Capital: "denver", population: "5,758,736"}
// ]
// Transform the input of the user and the data you are comparing to either to uppercase or to lowercase so you can compare 
// "banana with banana"! Using the toLowerCase() or toUpperCase() methods.
var nameOfState = document.getElementById("nameOfState").value
var userInput = nameOfState.toUpperCase()

for(var i = 0; i < stateInfo.length; i++){
for(var j = 0; j < stateInfo[i].length; j++ ){
stateInfo[i][j] = stateInfo[i][j].toUpperCase();
}
if(!stateInfo){
    document.getElementById("output").innerHTML = `sorry`
}else{
    document.getElementById("output").innerHTML = `You in luck`
}
}

}
