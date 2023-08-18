//Property Shorthand:
//In this example, you're using property shorthand to create an object named fullName. The variable names name and surname match the property names you're assigning, so you can use the shorthand syntax.

const name = 'Hriday';
const surname = 'Jadhav';

const fullName = {name, surname}
console.log(fullName);  // output { name: 'Hriday', surname: 'Jadhav' }


//Computed Property Names:
//Here, you're using computed property names to create an object named overall. The values of keyname and keyvalue are used as property names and values, respectively.

const keyname = 'color';
const keyvalue = 'red';

const overall = {
    [keyname] : keyvalue
}
console.log(overall); // output { color: 'red' }


//Method Shorthand:
//In this section, you're defining an object named calc with two methods: add and subtract. The methods use the shorthand syntax, omitting the function keyword.

const calc = {
    add(a,b){
        return a+b;
    },
    subtract(a,b){
        return a-b;
    }
}
console.log(calc);


// objects method definitions
//Here, you're defining an object named person with a property myname and a method greetHey. The method uses the shorthand syntax for method definitions.

const person = {
    myname : 'Hriday',
    greetHey(){
        console.log(`Hey, I am ${person.myname}`);    //here we can use person as well as this
    },
}
person.greetHey(); // output Hey, I am Hriday

