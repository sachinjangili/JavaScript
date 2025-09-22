//Data Types
// 1.primitive 2.non-primitive
// Primitive - Number, String, Boolean, undefined, null (small data)
// Non-Primitive - Array, Object (large data)
// window, this command in inspect-console to display all functions of javascript

a = 345;
console.log(typeof(a));   //type of data
name = "sachin";
console.log(typeof name);
c = true;
console.log(typeof c);
data = null;
console.log(typeof data);
d = undefined;
console.log(typeof d);

//Non primitive
array = [58, "sachin", true, null];
console.log(typeof array);
obj = {
    name : "sachin",
    age : "22",
    dept : "AIML",
};
console.log(typeof obj);