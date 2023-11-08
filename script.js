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