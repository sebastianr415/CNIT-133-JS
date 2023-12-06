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


// homework 6 section 

//After the user types the number in the input box and clicks on the button to submit, you need to make sure that the number has AT LEAST 4 decimal positions (no less than that)
// If the user types an invalid number, you will display an error message in the output/result area
// If the user types a valid number (with 4 decimals and it is a number), you will use Math.round, Math.sqrt, Math.floor, toFixed() etc. to obtain the following:
// TIPS:
// when reading the input, make sure you will be using parseFloat() to not lose the decimal numbers before doing the calculations requested
// remember to use the toFixed() only at the time you will present the final result
// round the floating-point number to the nearest integer
// calculate the square root of the floating-point number and round it to an integer
// round the floating-point number to the nearest tenths position
// round the floating-point number to the nearest hundredths position
// round the floating-point number to the nearest thousandths position
// You will then present in the output/result area the original number typed by the user and the results you found for each calculation requested above
function onSubmit() {
var inputNum = document.getElementById("numInputs").value;
var numRegex = /^\d*\.\d{4,}$/;


if (!numRegex.test(inputNum)) {
document.getElementById("textarea").innerHTML =
    "Numbers needs atleast 4 decimal positions no less than that";
} else if(numRegex.test(inputNum)){
var y  = Math.round(inputNum)
var squareRoot = Math.sqrt(Math.round(inputNum))
var roundTenths = Math.floor(inputNum * 10 + .5) /10
var roundHundreds = Math.floor(inputNum * 100 + .5) / 100
var roundThousands = Math.floor(inputNum * 1000 + .5) / 1000 
document.getElementById("textArea").innerHTML = `you typed ${parseFloat(inputNum)}
Rounded to the Nearest Integer = ${y}
Square root rounded to integer = ${squareRoot}
Rounded to the nearest 10th position = ${roundTenths}
Rounded to the nearest 100th positon = ${roundHundreds}
Rou nded to the nearest 1000nd postion = ${roundThousands}`;
} 

}
function eraseText(){
document.getElementById("textArea").value = ""
document.getElementById("numInputs").value = ""
}
//Ending of part 1 hw6

//beggining of part 2 hw6
function clickOn(){
{var count = 0 ;
var oneLetter = document.getElementById("oneLetterInput").value.toLowerCase().charAt(0)
var oneLetter = oneLetter.toLowerCase()

var stringToSearch = document.getElementById("textContent").value
var stringToSearch = stringToSearch.toLowerCase()


for(i=0; i < stringToSearch.length;i++){
if(stringToSearch.charAt(i) == oneLetter)
count++
}
if(count == 0){
var newWindow = window.open("","_blank","toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=300,width=300,height=100")
newWindow.document.write("<p>Search character " + oneLetter + " is not found in the content you typed</p>" + 
"<br><button type = button onclick = closeWindow()>Close</button>" + "<br><script>function closeWindow(){window.close()}</script>")
const inputElement = document.getElementById("outputBox")
inputElement.value = ""
}
else {document.getElementById("outputBox").value = count + 
" occurrence(s) of " + oneLetter + " found" }

}
}

// script for hw6 part 3

function numFun (){
var phoneNumber = document.getElementById("phoneNumber").value
var phoneRegex = /^\((\d{3})\)(\d{3})-(\d{4})$/

if(!phoneRegex.test(phoneNumber)){
document.getElementById("areaCode").value = ""
document.getElementById("firstThree").value = ""
document.getElementById("lastFour").value = ""
document.getElementById("errorMsg").innerHTML = "Please enter the phone number in the format (999)999-9999"
return
}

const phoneArray = phoneNumber.match(/^\((\d{3})\)(\d{3})-(\d{4})$/)
const areaCode = phoneArray[1]
const firstThree = phoneArray[2]
const lastFour = phoneArray[3]

document.getElementById("areaCode").value = areaCode
document.getElementById("firstThree").value = firstThree
document.getElementById("lastFour").value = lastFour
}

// jquery extra credit
$('input[name = "phoneNumber"]').mask('(000)000-0000');

