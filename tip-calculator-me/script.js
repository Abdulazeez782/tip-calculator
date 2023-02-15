let bill = document.getElementById("bill");
let noOfPeople = document.getElementById("no-of-people");
let tipPerPerson = document.getElementById("tip-person");
let totalPerPerson = document.getElementById("total-person");
let btnReset = document.getElementById("reset");
let custom = document.getElementById("custom"); 
let tips = document.querySelectorAll(".btn");

btnReset.onclick = function() {
    bill.value = "";
    noOfPeople.value = "1";
    tipPerPerson.innerHTML = "$0";
    totalPerPerson.innerHTML = "$0";
    custom.value = "";
}


// for (let a = 0; a < btns.length; a++) {
//     btns[a].onclick = function() {
//         let current = document.getElementsByClassName(" active");

//         current[0].className = current[0].className.replace(" active", "");        
//         this.className += " active";

//         if (current.className === " active") {
//             current = parseFloat(current.innerHTML)/100;
            
//         }

//         console.log(current);
//     }
// }

bill.addEventListener('input', setBillValue);
noOfPeople.addEventListener('input', setPeopleValue);
tips.forEach(function (val) {
    val.addEventListener('click', handleClick);
});
custom.addEventListener('input', setCustomValue)

bill.value = "0.0";
noOfPeople.value = "1";
tipPerPerson.innerHTML = "$" + (0.0).toFixed(2);
totalPerPerson.innerHTML = "$" + (0.0).toFixed(2);

let billValue = "0.0";
let peopleValue = "1";
let tipValue = "0.15";

function setBillValue() {
    billValue = parseInt(bill.value);

    calculateTip()
   // console.log(billValue);
}

function setPeopleValue() {
    peopleValue = parseInt(noOfPeople.value);

    calculateTip()
    //console.log(peopleValue);
}

function setCustomValue() {
    tipValue = parseFloat(custom.value / 100);

    tips.forEach(function(val){
        val.classList.remove("active");
    });
    
    calculateTip();
}

function handleClick(event) {
    tips.forEach(function (val) {
        val.classList.remove("active");
        if (event.target.innerHTML == val.innerHTML) {
            val.classList.add("active");
            tipValue = parseInt(val.innerHTML) / 100;
        }
    });
    calculateTip();
}

function calculateTip() {
    if (peopleValue >=1 ) {
        let tipAmount = (tipValue * billValue) / peopleValue;
        let total = (billValue /peopleValue) + tipAmount;

        tipPerPerson.innerHTML = "$" + tipAmount.toFixed(2);
        totalPerPerson.innerHTML = "$" + total.toFixed(2);
    }
}

//let test = document.getElementsByClassName("btn")[0];
//let tests = test.innerHTML.slice(0, 1);
//parseFloat(tests);
//console.log(tests);
