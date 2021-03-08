// Creating class

class Student {
    // constructor
    constructor(Name, age, intrests) {
        this.sthisame = Name;
        this.age = age;
        this.intrests = intrests;

    }

    bio() {
        return `Hi, my name is ${this.name}.\nI am ${this.age} years old.\nI am intrested in ${this.intrests}.\n`;
    }
}

// inheritance
class Team extends Student {
    constructor(Name, age, intrests, project) {
        super(Name, age, intrests);
        this.project = project;
    }
    bio_data() {
        return `${super.bio()}I have done a project in ${this.project}.`;

    }
}

let obj1 = new Team("Bharath", 18, ["ML", "Web Development"], "Malaria Detection");
let obj2 = new Student("Sairam", 20, ["ML", "Deep Learning", "Computer Vision"], "Digit Recognization");
console.log(obj1.bio_data())

/*
Output :
Hi, my name is undefined.
I am 18 years old.
I am intrested in ML,Web Development.
I have done a project in Malaria Detection.
*/