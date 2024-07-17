// SingleTon Object

// const tinderUser = new Object();
const tinderUser = {

};
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "someone@gmail.com",
    fullName: {
        userfullname: {
            firstName: "Sai",
            lastName: "Kumar"

        }
    }
}
// console.log(regularUser.fullName?.userfullname?.firstName);

// Combining Objects

const obj1 = {
    1: "a",
    2: "b"
};

const obj2 = {
    3: "C",
    4: 'd'
};

const obj4 = {
    5: "e",
    6: "f"
}

// const obj3 = {obj1,obj2}
// console.log(obj3);

// const obj3 = Object.assign({},obj1,obj2,obj4)
// console.log(obj3);

const obj3 = { ...obj1, ...obj2 }
// console.log(obj3);

const users = [{
    id: 1,
    email: "sai@gmail.com"
},
{
    id: 2,
    email: "sai@gmail.com"
}, {
    id: 3,
    email: "sai@gmail.com"
}, {
    id: 4,
    email: "sai@gmail.com"
}, {
    id: 5,
    email: "sai@gmail.com"
}, {
    id: 6,
    email: "sai@gmail.com"
}, {
    id: 7,
    email: "sai@gmail.com"
}
]

// console.log(users[2].email);
// console.log(tinderUser);


// console.log((Object.keys(tinderUser)));
// console.log(Object.values(tinderUser));


// console.log(tinderUser.hasOwnProperty('isLogedIn'));


const course = {
    courseName : "js in Hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor;
// const {courseInstructor} = course
const {courseInstructor: instructor} = course
// console.log(courseInstructor);
console.log(instructor);


// const navbar =  ({company}) =>{

// }

// navbar(company="hitesh"));

// {
//     name:"sai",
//     courseName:"js",
//     price: "free"
// }




[
    {},
    {},
    {}
]