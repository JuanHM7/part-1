let cash = 50;
let price = 60;
let extra = cash - price;
let below =price - cash;

if (cash > price){
    console.log("you paid extra - here's "+ extra + " dollars change")
}
else if ( cash === price) {
    console.log ("you paid the exact amount, have a nice day")
}
else {
    console.log("not enough money you still owe " + below +" dollars")
}