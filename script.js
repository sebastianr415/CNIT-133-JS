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

function stateNames(){
const stateInfo = [
    {StateAbbr: "al",Statename: "alabama", Capital: "montgomery", population: "4,903,185"},
    {StateAbbr: "ak",Statename: "alaska", Capital: "juneau", population: "731,545"},
    {StateAbbr: "az",Statename: "arizona", Capital: "phoenix", population: "7,278,717"},
    {StateAbbr: "ar",Statename: "arkansas", Capital: "little rock", population: "3,017,825"},
    {StateAbbr: "ca",Statename: "california", Capital: "sacramento", population: "39,512,223"},
    {StateAbbr: "co",Statename: "colorado", Capital: "denver", population: "5,758,736"}
]
// Transform the input of the user and the data you are comparing to either to uppercase or to lowercase so you can compare 
// "banana with banana"! Using the toLowerCase() or toUpperCase() methods.
var inputValue = document.getElementById("nameOfState").value

stateInfo.forEach(info => {
    const stateNameLowerCase = info.Statename.toLowerCase()
    const stateNameUpperCase = info.Statename.toUpperCase()
    if(inputValue === stateNameLowerCase || stateNameUpperCase){
        console.log(`state abbreviation for given state: ${info.StateAbbr}`)
    } return ;
})

// if(inputValueUppercase != userInputAbbr && userInputState){
//     console.log("wrong")
// }else {console.log("right")}
// for(var i = 0; i < stateInfo.length; i++){
// for(var j = 0; j < stateInfo[i].length; j++ ){
// stateInfo[i][j] = stateInfo[i][j].toUpperCase();
// }}
// console.log(userInputState);
// if(inputValue == userInputAbbr || userInputState){
//     console.log("correct")
// } else if (inputValue != userInputAbbr || userInputState){
//     console.log("wrong")
// } else {console.log("wrong again")}
}
