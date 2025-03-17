var cibil = 751;
var salary = 48300;

if (cibil > 800 && salary > 60000) {
    console.log("congratualations you are eligible for 20Lakhs Loan");
}
else if(cibil > 789 && salary > 50000) {
    console.log("congratualation you are eligible for 15Lakhs loan")
}
else if(cibil > 750 && salary > 40000) {
     console.log("congratualation you are eligible for 10Lakhs loan");
}
else if(cibil > 720 && salary > 30000){
    console.log("congratualation you aer eligible for 5Lakha loan");
}
else{
    console.log("You are not eligible, Better luck Next time :(");
}