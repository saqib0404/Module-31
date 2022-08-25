class Instructor {
    person;
    designation = 'Web Course Instructor'
    team = 'Web Team'
    location;
    constructor(person, location = 'Dhaka'){
        this.person = person
        this.location = location;
    }
    startSupportSession(time){
        console.log(`Please Start Support Session at ${time}`)
    }
    createQuiz(module){
        console.log(`Please create Quiz for module-${module}`)
    }
}

const saqib = new Instructor('Saqib',);
console.log(saqib);