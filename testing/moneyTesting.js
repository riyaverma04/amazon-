import { formatCurrency } from "../script/money.js";
//basic test case
if(formatCurrency(1000) !== "$10.00"){
    console.log("formatCurrency function is not working properly")
}else{
    console.log("All tests passed")
}



//edge case
if(formatCurrency(0) !== "$0.00"){
    console.log("formatCurrency function is not working properly")
}else{
    console.log("All tests passed")
}   




//
if(formatCurrency(2000.5) !== "$20.01"){
    console.log("formatCurrency function is not working properly")
}else{
    console.log("All tests passed")
}
