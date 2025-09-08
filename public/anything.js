
// FOR LOOP


for (let i = 2; i <= 12; i++) {
    console.log(i);
}


// NOTES

// let i = 1 - start
// i <= 12 - condition
// i++ - 
// for skip counting - instead i=of i++ do i=i+2
// ****PRACTICE FOR OVER THE OTHERS

// TODO ; master loops, research more about arrays


// WHILE LOOP - 

i = 1;
while (i <= 12) {
    console.log(i)
    i++
}

// DO WHILE LOOP 

i = 1;
do {
    console.log(i)
    i++
} while (i <= 12);

// SKIP COUNTING

i = 2;
while (i <= 14) {
    console.log(i)
    i=i
}



// ARRAYS
grades = [75, 98, 99, 100]
for (let i = 0; i < 4; i++) {
    console.log(grades[i])
}

for(var grade of grades) {
    console.log(grade)
}




// FAV FOR NI SIR

grades.forEach(print_grade)

function print_grade(grade) {
    console.log(grade)
}