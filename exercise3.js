const student = {
    firstName: 'John',
    lastName: 'Doe',
    studentId: '12345',
    courses:[],

    //Fullname method
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    },

    //Courses
    enrollCourse(courseName){
        this.courses.push(courseName);
        return this;
    },

    //courseCount
    getCourseCount(){
        return this.courses.length;
    }
};

//chaining method 4 courses
student.addCourse("Math").addCourse("English").addCourse("Science");