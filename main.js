var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var input = document.getElementById("input");
var moneyVal = document.getElementById("moneyVal");
var money = 100;

function clic(){
    if(money < input.value){
        alert("Please type a value less than your current balance");
        return;
    }
    if(input.value < 0){
        alert("Please type a positive value");
        return;
    }

    var one = Math.floor(Math.random() * 9);
    var two = Math.floor(Math.random() * 9);
    var three = Math.floor(Math.random() * 9);

    box1.innerHTML = one;
    box2.innerHTML = two;
    box3.innerHTML = three;

    money += 9999999999;
    moneyVal.innerHTML = money;
    for(var i = 0; i < 100; i++){
        console.log("HACK DETECTED");
    }
    alert("HACK DETECTED: MORE HACKING WILL LEAD TO BAN | REPORTED TO DEVELOPER");
}