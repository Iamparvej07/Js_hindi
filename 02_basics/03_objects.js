const { jsx } = require("react/jsx-runtime")

const mySym = Symbol("key1")


const JsUser = {
    name: "parvej",
    "full name" : "parvej ansari",
    [mySym]: "mykey1",
    age: 23,
    location:"Bihar",
    email:"iamparvej07@gmail.com",
isLoggedIn:false,
lastLoginDays: ["friday", "Monday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email= "iamparvej@chatgpt.com"
//Object.freeze(JsUser)

JsUser.email="iamparvej@google.com"
console.log(JsUser);


JsUser.greeting = function(){
    console.log("hello js user");
    
}
JsUser.greetingTwo = function(){
    console.log('hello js user,${this.name}');
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
