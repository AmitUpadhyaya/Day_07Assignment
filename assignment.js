// Question 1
var sub1 = 45;
var sub2 = 70;
var sub3 = 80;
var sub4 = 88;
var sub5 = 60;
var avg = (sub1+sub2+sub3+sub4+sub5)/5;
document.write(avg);

// Question 2
var age= 14
var movie = ["Horror", "Funny", "sci-fi"]
if (age<12 && movie== "Horror")( 
document.write("Not Allowed"))
else (
document.write("Allowed"))


// question 3
var num =[];
var size = 5;
for (var i=0; i <size; i++){
  num[i]= prompt('Enter Element' + (i+1));
}
var res = num.sort(function(a, b){return a-b});
document.write(res)