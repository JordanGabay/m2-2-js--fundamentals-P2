// Q12
// Build on what you did for Q9.
// This time the function should return a letter grade instead of the average.
// Here is how I calculate the grades
// <60 	is F
// <70 	is D
// <80 	is C
// <90 	is B
// <100 is A

// Write function here

function average(grades) {
    let sum = 0;

    for(let x=0; x < grades.length; x++){
        sum +=grades[x];
    }

    let avg = Math.round(sum/grades.length);

    if (avg < 60) return `F`;
    if (avg >= 60 && avg < 70) return `D`;
    if (avg >= 70 && avg < 80) return `C`;
    if (avg >= 80 && avg < 90) return `B`;
    if (avg >= 90 && avg < 100) return `A`;
    
}

// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]

console.log(average([48, 95, 65, 48, 59, 78, 72, 65]));
// Try with other values as well

console.log(average([30, 90, 90, 92, 50, 45, 82, 79]));
