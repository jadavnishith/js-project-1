// ----Question 1------

var fix=50;
var unit=3;
var subsidy=10;
var useunit=100;
var bill=((useunit*unit)+fix);
var per=(bill*10)/100;
var tot=bill-per;
console.log("Bill : ",bill);
console.log("Subsidy : ",per);
console.log("Pay Bill : ",tot);

// ----Question 2-----

var sal=500000;
var mon=sal/12;
var home=0.2;
var ha=mon*home;
var travel=0.05;
var ta=mon*travel;
var final=mon-ha-ta;
console.log("Month Salary :",mon);
console.log("Home Allowance :",ha);
console.log("Travel Allowance",ta);
console.log("Total Salary",final);
