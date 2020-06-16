// Q3.1
// Write a function that accepts two integers and returns
// the greater one. (this is slightly different from the previous question.)

function max(num1, num2) {
    console.log(num1 > num2 ? num1 : num2);
}

max(23, 65);
// Also, wouldn't it be nice if there were a Math method that could simplify the code....
// https://www.w3schools.com/jsreF/jsref_obj_math.asp

// Q3.2
// Without changing the function at all,
// Can you figure out how we could use it to determine the greater number between 4 integers?

let biggestNumber = Math.max(23, 90, 65, 89);
console.log(biggestNumber);

// Q3.3
// Would this work with more integers?

//Yeah it would. YOu can continue to add more numbers as long as you input everything properly.