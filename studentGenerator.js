function studentGradeGenerator() {
    const prompt = require("prompt-sync")()
    let studentaverage = prompt("Enter studentaverage: ")//asks for the user's input
    let grade//shows the grade after user input

    if (studentaverage >= 0 && studentaverage <40) {
        grade = "E"
    }else if (studentaverage >= 40 && studentaverage <40) {
        grade = "D"
    }else if (studentaverage >= 49 && studentaverage <59) {
        grade = "C"
    }else if (studentaverage >= 60 && studentaverage <79) {
        grade = "B"
    }else if (studentaverage >= 79 && studentaverage <=100) {
        grade = "A"
    }
    console.log(grade);//displays the grade 
}studentGradeGenerator()//calling back my function