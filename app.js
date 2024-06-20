let cash = 50;
let price = 40;
let isStoreOpen = true;

if (cash >= price && isStoreOpen === true){
    console.log('print receipt')
}
else if ( cash === price && isStoreOpen !==true) {
    console.log("you paid the exact amount, have a nice day!")
}
else{
    console.log(`not enough money - you still owe ${difference * -1 } dollars`)
}