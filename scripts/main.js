//Question 1
function helloWorld () {
    return ("Hello World!");
}
console.log(helloWorld());

helloWorld();

//Question 2
function greeting(name) {
    return "Hello " + name;
}
console.log(greeting('Kristy'));

//Question 3
function divisibleByThree(num) {
    if (num%3) return false;
    else return true;
}
console.log(divisibleByThree(18));

//Question 4
function averageAge(arr) {
    var sum=0;
    for(var i in arr) {
        sum +=arr[i];
    }
    var totalNumbers = arr.length;
    return(sum/totalNumbers);
}
var arr = new Array(2,4,6);
var avg= averageAge(arr);

console.log(avg);

//Question 5
function leetSpeak(str) {
    return str.replace(/[e]/g,'3');

}
console.log(leetSpeak('meeting'));

//not sure how to set this up as a loop to go back and change the 3 to a 4

