// classes!!!!
// keyword class***
/*
class pizza  {
    // we use constructor 
    constructor() {
        // we add attributes here
        // for that we need to use * this * keyword****
        this.size = "medium";
        this.crust = "original";
    }
    // it can have methods too****
    /*inorder to create method, just use name the method
    no need to use keyword function inside the class**/
    
    //bake() {
    //   console.log(`baking ${this.size} ${this.crust} crust pizza!`);
        /* inside of template literal we need to 
        * this * keyword to pull values from our
        constructor***/
//    }
//}

// class acts as a blueprint to build objects******
// let's build an object!!
//const myPizza = /*to build object use keyword * new * */ new pizza();
//myPizza.bake();

////////////////////////////////////////////////////////////////////////////////
// class
/*
class pizza {
    constructor () {
        this.size = "medium";
        this.crust = "original";
    }
    bake() {
        console.log(`baking ${this.size} ${this.crust} crust pizza!`);
    }
}

const myPizza = new pizza();
myPizza.bake();
// we console attributes too 
console.log(myPizza.size);
console.log(myPizza.crust);
*/
// class 
/*
class pizza {
    constructor() {
        this.size = "medium";
        this.crust = "original";
    }
    bake() {
        console.log(`baking ${this.size} ${this.crust} crust pizza!`);
    }
}
const myPizza = new pizza();
myPizza.bake();
console.log(myPizza.size);
console.log(myPizza.crust);
   

// class 
class pizza {
    constructor() {
        this.size = "medium";
        this.crust = "crust";
    }
    bake() {
        console.log(`baking  ${this.size} ${this.crust} crust pizza`);
    }
}

const myPizza = new pizza();
myPizza.bake();
*/
////////////////////////////////////////////////////////////////////////////
// class
// pass in some parameters and value;
// also we can pass in one or more parameters***
/*
class pizza {
    constructor(pizzaType,pizzaSize,pizzaCrust) {
        this.type = pizzaType;
        this.size = pizzaSize;
        this.crust = pizzaCrust;
    }
    bake() {
        console.log(`baking ${this.size} ${this.type} ${this.crust} crust pizza!`);
    }
}                                                                                                                                             
const myPizza = new pizza("peperoni","small","original");
myPizza.bake();
*/
/////////////////////////////////////////////////////////
/* we can change our property value just by using dot notation!
however that's not desirable we don't want to access our property directly 
like that****/
/*
class pizza {
    constructor(pizzaType,pizzaSize,pizzaCrust) {
        this.type = pizzaType;
        this.size = pizzaSize;
        this.crust = pizzaCrust;
    }
    // so we need to use getter and setter *********
    get pizzaCrust() {
        return this.crust; /*I'm using different property 
        here not pizzaType because it's confusing if I use same 
        name again and again! */ 
    //}
 //   set pizzaCrust (pizzaCrust) {
 //       this.crust = pizzaCrust;
 //   }
 //   bake() {
 //       console.log(`baking ${this.size} ${this.type} ${this.crust} crust pizza!`);
//    }
//}     
/*                                                                                                                                        
const myPizza = new pizza("peperoni","small");
myPizza.pizzaCrust = "sausage";
myPizza.bake();
*/
/////////////////////////////////////////////////////////////////////////////////////
// class and pass in parameter and values
/*
class pizza {
    constructor(pizzaSize,pizzaType,pizzaCrust){
        this.size = pizzaSize;
        this.type = pizzaType;
        this.crust = pizzaCrust;
    }
    get pizzaCrust() {
        return this.crust;
    }
    set pizzaCrust (pizzaCrust) {
        this.crust = pizzaCrust;
    }
    bake() {
        console.log(`baking ${this.size} ${this.type} ${this.crust} crust pizza! `)
    }
}
const myPizza = new pizza("small","supreme");
//myPizza.bake();
//myPizza.crust = "sausage";
myPizza.pizzaCrust = "sausage";
myPizza.bake();
*/
/////////////////////////////////////////////////////////////////////////
// class (values, parameters, setter and getter method\
/*
class pizza {
    constructor(pizzaSize, pizzaType, pizzaCrust) {
        this.size = pizzaSize;
        this.type = pizzaType;
        this.crust = pizzaCrust;
    }
    get pizzaCrust() {
        return this.crust;
    }
    set pizzaCrust (pizzaCrust) {
        this.crust = pizzaCrust;
    }
    bake() {
        console.log(`baking ${this.size} ${this.type} ${this.crust} crust pizza!`)
    }
}
const myPizza = new pizza("small","supreme")
myPizza.bake();
myPizza.pizzaCrust = "original";
myPizza.bake();
*/
///////////////////////////////////////////////////////////////////////////////////
// class pass in parameters and properties****
/*
class Pizza {
    constructor(pizzaSize, pizzaType, pizzaCrust) {
        this.size = pizzaSize;
        this.type = pizzaType;
        this.crust = "original";
    }
    // getter setter method!
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
    bake() {
        console.log(`baking ${this.size} ${this.type} ${this.crust} crust pizza!`);
    }
}

const myPizza = new Pizza("medium","pepproni");
myPizza.setCrust("thin");
myPizza.bake();
console.log(myPizza.getCrust());
// however this not usually what I do. I do like to refer to name directly 
// and there easy method to it!
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// class pass in parameters and properties****
/*
class Pizza {
    constructor(pizzaSize, pizzaType) {
        this.size = pizzaSize;
        this.type = pizzaType;
        this.crust = "original";
        this.toppings = [];
    }
    // getter setter method!
    getToppings() {
        return this.toppings;
    }
    setToppings(topping) {
        // this is different here because we are working with an array
        this.toppings.push(topping);
    }
////////////////////////////////////////
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
    bake() {
        console.log(`baking ${this.size} ${this.type} ${this.crust} crust pizza!`);
    }
}
const myPizza = new Pizza("medium","pepproni");
myPizza.bake();
myPizza.setToppings("sausage");
myPizza.setToppings("olive");
console.log(myPizza.getToppings());



// let's add another property to practice get set method!
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// javascript classes
// inheritance****!!!! with classes!
// let's create parent class 
/*
class Pizza {
    constructor(pizzaSize) {
        this.size = pizzaSize;
        this.crust = "original";
    }
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
}
/////////////////////////////////////
// let's create our child class!
// use keyword class and name the child class and then use keyword ****extends****
class specialityPizza extends Pizza {
constructor(pizzaSize) {
    // so before we can use this. keyword to add property we need to call **super()**
    super(pizzaSize)// inside of it put the parent class's parameter that we wanna inherite***
    // now we can use this. keyword to add it's own property
    this.type = "The works";
}
// child class can have its own methods too!
slice() {
    console.log(`Our ${this.size} ${this.type} pizza has 8 slices.`);
}
}
// here no to create object for parent class we can directly do for the child class****

const mySpeciality = new specialityPizza("medium");
mySpeciality.slice();
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// javascript classes!!
// inheritance!
/*
class LandVehicle {
    constructor(LvWheels,LvDoors) {
        this.wheels = LvWheels;
        this.doors = LvDoors;
        this.engine = "vroom!";
    }
    startEngine() {
        console.log(`${this.engine}....${this.engine}${this.engine}!!!!!`);
    }
}
class Truck extends LandVehicle {
    constructor(LvWheels) {
        super(LvWheels)
        this.doors = 2;
    }
}

const myTruck = new Truck(4);
myTruck.startEngine();
console.log(myTruck.doors);
console.log(myTruck.wheels);
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// class 
/*
class Animal {
    constructor(nameOfTheAnimal) {
        this.animal = nameOfTheAnimal;
        this.alive = true;
        this.eat = true;
        this.sleep = true;
    }
    hunt() {
        console.log(`this ${this.animal} is hunting`);
    }
}

class Birds extends Animal {
    constructor(nameOfTheAnimal) {
        super(nameOfTheAnimal)
        this.bird = true;
    }
    fly() {
        console.log(`this ${this.animal} is flying!`);
    }
}

const myBird = new Birds("Bald Eagle");
console.log(myBird.fly());
*/
///////////////////////////////////////////////////////////////////////////////////////////
// 25/12/2023
// class again!
/*
class pizza {
    constructor(pizzaSize,pizzaType) {
        this.size = pizzaSize;
        this.type = pizzaType;
        this.crust = "original";
    }
    get pizzaCrust () {
        return this.crust;
    }
    set pizzaCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
    bake() {
        console.log(`baking ${this.size} ${this.type} ${this.crust} crust pizza!`);
    }
}

const myPizza = new pizza("medium","supreme");
myPizza.pizzaCrust = "pepperoni";
myPizza.bake();

*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
class pizza {
    constructor(pizzaSize,pizzaType) {
        this.size = pizzaSize;
        this.type = pizzaType;
        this.crust = "original";
    }
    get pizzaCrust() {
        return this.crust;
    }
    set pizzaCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
    bake() {
        console.log(`baking ${this.type} ${this.size} ${this.crust} crust pizza!`);
    }
}

const myPizza = new pizza("medium","pepperoni");
myPizza.pizzaCrust = "supreme";
myPizza.bake();
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////
// 25/01/2024
// back to the good old days
// need to wake up 3:00 am 
/* need to learn every technologies for the full-stack developement 
html css javascript mongo.db express.js react.js node.js */
// must learn c++ 
// must grind leet code problems to understand the fundamentals datastructures.
//////////////////////////////////////////////////////////////////////////////////////////////////
// class 
/*
class pizza {
    consturctor (pizzaSize,pizzaType) {
        this.size = pizzaSize;
        this.type = pizzaType;
        this.crust = "original";
    }
    bake() {
        console.log(`baking ${this.type} ${this.size} ${this.crust} crust pizza!`);
    }
} 

const myPizza = new pizza ("medium","supreme");
myPizza.bake();
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// class 12/02/2024
/*
class Pizza {
    
}
*/
/////////////////////////////////////////////////////////////////////////////
// writing a program to convert usd to inr****
/*
function convertUsdToInr (money) {
    let exchange = 80.00;
    let conversion = (money * exchange + " rupees/-");
    alert(conversion);
    console.log(conversion);
}
convertUsdToInr(prompt("Enter your amount🤑: "));
*/
//////////////////////////////////////////////////////////////////////////////////
// 15/02/2024
// class again!!!
/*
class Pizza {
    constructor () {
        this.size = "medium";
        this.crust = "peperoni";

    }
    bake() {
        console.log(`baking ${this.size} ${this.crust} crust pizza!`);
    }
}

const myPizza = new Pizza();
myPizza.bake();
*/
/*
class Pizza {
    constructor (pizzaType,pizzaSize,pizzaCrust) {
        this.size = pizzaSize;
        this.type = pizzaType;
        this.crust = pizzaCrust;
    }
    bake() {
        console.log(`baking ${this.size} ${this.crust} ${this.type} crust pizza!`);
    }
}

const myPizza = new Pizza("original","small","peperoni");
myPizza.bake();
*/
/*
class Pizza {
    constructor (pizzaSize,pizzaType) {
        this.size = pizzaSize;
        this.type = pizzaType;
        this.crust = "original"; 
    }
    bake() {
        console.log(`baking ${this.size} ${this.type} ${this.crust} crust pizza!`);
    }
}

const myPizza = new Pizza("small","peperoni");
myPizza.bake();
myPizza.type = "supreme";
myPizza.bake();
console.log(myPizza.type);
*/
/* well this is not the desirable, we don't really want to access those 
properties directly like that
so to prevent that happening, really javascript doesn't prevent it from
happening!
so we need to understand the concept of getter and setter method!!!*** */

/*
class Pizza {
    constructor (pizzaSize,pizzaType) {
        this.size = pizzaSize;
        this.type = pizzaType;
        this.crust = "original"; 
    }
    get pizzaCrust() {
        return this.crust;
    }
    set pizzaCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    } 

    bake() {
        console.log(`baking ${this.size} ${this.type} ${this.crust} crust pizza!`);
    }
}

const myPizza = new Pizza("small","peperoni");
myPizza.pizzaCrust = "thin";
myPizza.bake();
console.log(myPizza.pizzaCrust);
*/
// let's make getter & setter method (instead of function)
// these are more readable inside code****                                                                                                                                                                                                           
/*
class Pizza {
    constructor (pizzaSize,pizzaType) {
        this.size = pizzaSize;
        this.type = pizzaType;
        this.crust = "original"; 
    }
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    } 

    bake() {
        console.log(`baking ${this.size} ${this.type} ${this.crust} crust pizza!`);
    }
}
/*
const myPizza = new Pizza("small","peperoni");
myPizza.pizzaCrust = "thin";
myPizza.bake();
console.log(myPizza.pizzaCrust); */
/*
const myPizza = new Pizza("small","peperoni");
myPizza.setCrust("thin");
myPizza.bake();
console.log(myPizza.getCrust()); */

// let's add one more property for our practice!***
/*
class Pizza {
    constructor (pizzaSize,pizzaType) {
        this.size = pizzaSize;
        this.type = pizzaType;
        this.crust = "original";
        this.toppings = []; 
    }
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
    getToppings() {
        return this.toppings;
    } 
    // here we need to understand that arrays work differently!****
    // that's we are using new parameter "topping" in setter method!****
    setToppings(topping) {
       // this.toppings = topping.push(); // wrong syntax!
       this.toppings.push(topping);
    }
    bake() {
        console.log(`baking ${this.size} ${this.type} ${this.crust} crust pizza!`);
    }
}
const myPizza = new Pizza("small","peperoni");
myPizza.setToppings("sausage");
myPizza.setToppings("olives");
myPizza.bake();
console.log(myPizza.getToppings()); */
/*
class Pizza {
    constructor (pizzaSize,pizzaType) {
        this.size = pizzaSize;
        this.type = pizzaType;
        this.crust = "original";
        this.toppings = []; 
    }
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
    getToppings() {
        return this.toppings;
    } 
    setToppings(topping) {
       this.toppings.push(topping);
    }
    bake() {
        console.log(`baking ${this.size} ${this.type} ${this.crust} crust pizza!`);
    }
} */
///////////////////////////////////////////////////////////// 
// practice***
/*
class Pizza {
    constructor(pizzaSize,pizzaType) {
        this.type = pizzaType;
        this.size = pizzaSize;
        this.Crust = "original";
        this.toppings = []
    }
    getCrust() {
        return this.Crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
    getToppings() {
        return this.toppings;
    }
    setToppings(topping) {
        this.toppings.push(topping);
    }
    bake() {
        console.log(`baking ${this.size} ${this.type} ${this.crust} crust pizza!`);
    }
}
const myPizza = new Pizza("medium","peperoni");
myPizza.setCrust("supreme");
myPizza.setToppings("sausage");
myPizza.setToppings("olives");
myPizza.bake();
console.log(myPizza.getCrust());
console.log(myPizza.getToppings()); */

//super class! (parent and child classes****)
/*
class Pizza {
    constructor(pizzaSize) {
        this.size = pizzaSize;
        this.crust = "original";
    }
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
}
// to create child class from parent class or super class 
 //keyword "speciality+name of the class" and "extends"
class specialityPizza extends Pizza {
    constructor (pizzaSize) {
        // before we use this.
        // we need to use super() (super class's properties***)
        super(pizzaSize);
        // now we can use this. to give some properties***
        this.type = "The works";
    }
    slice() {
        console.log(`Our ${this.type} ${this.size} pizza has 8 slices`);
    }
}
/* remeber we don't have to create a object or an instance of
class from the parent class or super class.
it just a blueprint to child class, so we need to create
object from child class only!* */
/*
const myNewPizza = new specialityPizza("medium");
myNewPizza.slice();
console.log(myNewPizza.size); */
///////////////////////////////////////////////////////////////////////////////////
/*
class Pizza {
    constructor (pizzaType,pizzaSize) {
        this.type = pizzaType;
        this.size = pizzaSize;
        this.crust = "original";
        this.toppings = [];
    }
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
    getToppings() {
        return this.toppings;
    }
    setToppings(topping) {
        this.toppings.push(topping);
    }
    bake() {
        console.log(`baking ${this.size} ${this.type} ${this.crust} crust pizza!`);
    }
}
const myPizza = new Pizza("small","peperoni");
myPizza.setCrust("thin");
myPizza.setToppings("sausage");
myPizza.setToppings("olivers");
myPizza.setToppings("anchovies");
myPizza.bake();
//console.log(getCrust()); // sh!tty error that always keeps happening to me😤
//console.log(getToppings());
console.log(myPizza.getCrust());
console.log(myPizza.getToppings()); */
///////////////////////
// super class or parent class
/*
class Pizza {
    constructor (pizzaSize) {
        this.size = pizzaSize;
        this.crust = "original";
    }
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
}
// to create a child class 
class specialityPizza extends Pizza {
    constructor(pizzaSize) {
        super(pizzaSize)
        this.type = "DominoDisc";
    }
    slice() {
        console.log(`this ${this.type} ${this.size} ${this.crust} pizza has 8 slices!`);
    }
}
// to create an instance of class
const myNewPizza = new specialityPizza("medium");
myNewPizza.setCrust("thin");
myNewPizza.slice();
console.log(myNewPizza.getCrust());*/

// however the getter and setter methods are not that good, it can be easily changed 
// just by regular update method or dot(.) notation, the name convention is need to be changed to do that we have
// new concept called factory functions****
// to help other developers to understand that these properties are private we have a naming convenction
// so we use _ (this._crust)
/*
class Pizza {
    constructor (pizzaSize) {
        this._size = pizzaSize;
        this._crust = "original";
    }
    getCrust() {
        return this._crust;
    }
    setCrust(pizzaCrust) {
        this._crust = pizzaCrust;
    }
} */
// however this._crust naming convenction didn't solve the problem here******
/* we could still access the properties 
   we could still change the value of the properties
   we could even get the value or log the value of the property to the console 
   just by using dot(.) notation */
// to solve this there is a concept called factory fuction******

// factory function
// this is an another method to create objects**
// as the name suggests it's just a factory for creation of objects
/*
function pizzaFactory (pizzaSize) {
    const size = pizzaSize;
    const crust = "original";
    return {
        // it's quite bit different overhere!
        // the syntax different to return the method
         bake() : {
            console.log(`baking ${this.size} ${this.crust} crust pizza!`)
        } 
        bake: () => console.log(`baking ${this.size} ${this.crust} crust pizza!`)
    };
}

const myPizza = new pizzaFactory("medium");
myPizza.bake(); */

// I got error let me try again!
// factory function again ****
/*
function pizzaFactory(pizzaSize) {
    const size = pizzaSize;
    const crust = "original";
    return {
        bake: () => console.log(`baking ${this.size} ${this.crust} crust pizza!`)
    };
}

const myPizza = pizzaFactory("large");
myPizza.bake(); */

// this doesn't have full support through this version of browser*****

// so we have another concept which works on almost on every version!
// private and public fields******
/*
// **** the proprties which involves the parameters will always comes under or falls under constructor *****
// **** the properties which do not involves the parameter will be above the constructor******
class Pizza {
    // public field ****
    crust = "original"; // no need to use this. ***
    // private field ****
    #sauce = "traditional";
    #size;   // if you want to make private field then need to define it outside the constructor***
    constructor(pizzaSize) {
        this.#size = pizzaSize;
    }
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
    //so let's add a method
    hereYouGo() {
        console.log(`Here's your ${this.#size} ${this.crust} ${this.#sauce} sauce pizza!`);
    }
} */
/*
const myPizza = new Pizza("large");
myPizza.hereYouGo();
console.log(myPizza.getCrust());
console.log(myPizza.sauce); // we can't access the private field***
/* we can't access private field (which are inside the 
    constructor or class ) but we can access the properties 
    which are public field *** */ 

///////////////////////////////////////////////////////////////////////////////////////////
// again
/*
class Pizza{
    crust = "original";
    #sauce = "traditional";
    #size;
    constructor(pizzaSize) {
        this.#size = pizzaSize;
    }
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
    hereYouGo() {
        console.log(`Here's your ${this.#size} ${this.crust} ${this.#sauce} sauce pizza!`);
    }
}
const myPizza = new Pizza("larger");
myPizza.hereYouGo();
console.log(myPizza.getCrust()); */
///////////////////////////////////////////////////////////////////////////////
// 22/02/2024
// private field and public field
/*
class Pizza {
    // public field
    crust = "original"; // public field
    // you need to define private field outside the constructor****
    // private field (syntax #)
    #sauce = "ketchup";
    // if you want to make "size" as private field you need to define it outside of the constructor
    #size; // now "size" is private field***
    constructor(pizzaSize) {
        this.#size = pizzaSize;
    }
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
     // let's have one method too**
    hereYouGo() {
        // remember you need use the exact syntax (ex: if private field #)
        console.log(`Here's your ${this.#size} ${this.crust} ${this.#sauce} sauce pizza!`);
    }
}
// so let's create object out of this class***
const myPizza = new Pizza("large");
myPizza.hereYouGo();
console.log(myPizza.getCrust()); */
////////////////////////////////////////////////////////////////////////////////////////////
// 25/02/2024
// class 
/*
class Pizza {
    constructor() {
        this.size = pizzaSize;
        this.crust = "original";
        this.type = ""
    }
}*/
//==================================================================================================================================================
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//==================================================================================================================================================
// 27/02/2024 
// recalling:)*****
//class 
/*
class Pizza {
    // properties comes under the constructor**
    constructor() {
        this.size = "large";
        this.crust = "original";
    }
    // class can have methods too*** (remember no need to mention the keyword "function" inside of a class)
    bake() {
        console.log(`baking ${this.size} ${this.crust} crust pizza!`);
    }
}
const myPizza = new Pizza();
myPizza.bake();
///////////////////////////
// we also can pass in some parameters so let's try to do that!
class Pizza {
    constructor(pizzaType,pizzaSize) {
        this.type = pizzaType;
        this.size = pizzaSize;
        this.crust = "original";
    }
    bake() {
        console.log(`baking ${this.type} ${this.size} ${this.crust} crust pizza!`);
    }
}
const myPizza = new Pizza("peperoni","large");
myPizza.bake();
console.log(myPizza.type);
// we can also change or update any property inside the class just dot(.) notation
// however this not desirable*** // so there another probably naming or new concept called getter and setter****
myPizza.type = "supreme";*/
/////////////////////////////
// getter and setter method (get & set)
/*
class Pizza {
    constructor(pizzaType,pizzaSize) {
        this.type = pizzaType;
        this.size = pizzaSize;
        this.crust = "origianl";
    }
    get pizzaCrust() {
        return this.crust;
    }
    set pizzaCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
    bake() {
        console.log(`baking ${this.type} ${this.size} ${this.crust} crust pizza!`);
    }
}
const myPizza = new Pizza("peperoni","large");
myPizza.bake();
console.log(myPizza.type); 
////////////////////////////
class Pizza {
    constructor(pizzaType,pizzaSize) {
        this.type = pizzaType;
        this.size = pizzaSize;
        this.crust = "origianl";
    }
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
    bake() {
        console.log(`baking ${this.type} ${this.size} ${this.crust} crust pizza!`);
    }
}
const myPizza = new Pizza("peperoni","large");
myPizza.bake();
console.log(myPizza.getCrust());
myPizza.setCrust("supreme");
console.log(myPizza.getCrust()); 
//////////////////////////////////////
// let's add another getter and setter for practice*****
class Pizza {
    constructor(pizzaSize,pizzaType) {
        this.size = pizzaSize;
        this.crust = "original";
        this.type = pizzaType;
        this.toppings = [];
    }
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
    getToppings() {
        return this.toppings;
    }
    // here we need to understand that arrays work differently***
    setToppings(topping) {
        this.toppings.push(topping);
    }
    hereYouGo() {
        console.log(`Here's your ${this.type} ${this.size} ${this.crust} ${this.toppings} sauce pizza!`);
    }
}
const myPizza = new Pizza("large","peperoni");
myPizza.setToppings("suasage");
myPizza.setToppings("olives");
console.log(myPizza.getToppings());
myPizza.hereYouGo(); 
//////////////////////////////////////////
// inheritance***
// let's create a super or parent class**
class Pizza {
    constructor(pizzaSize) {
        this.size = pizzaSize;
        this.crust = "origianl";
    } 
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
}
// let's create a child class (remember the syntax)
//class mySpeciality extends Pizza
class myPizza extends Pizza {
    constructor(pizzaSize) {
        // before you use this. you need to use super() to call in the super class's properties and methods
        super(pizzaSize) 
        this.type = "The works";
    }
    slice() {
        console.log(`Our ${this.type} ${this.size} pizza has 8 slices!`);
    }
}
// we don't need to create objects from super or parent class while we are using the inheritance***
// always you need to create objects from childs only!
const myNewPizza = new myPizza("medium");
myNewPizza.slice();
myNewPizza.setCrust("thin");
console.log(myNewPizza.getCrust());
console.log(myNewPizza.size); 
//////////////////////////////////////////////
// inorder to tell other developers that these particular properties are private
// we have to use new naming convection
class Pizza {
    constructor(pizzaSize,pizzaType) {
        this.size = pizzaSize;
        this.type = pizzaType;
        this._crust = "original";
    }
    getCrust() {
        return this._crust;
    }
    setCrust(pizzaCrust) {
        this._crust = pizzaCrust;
    }
}
const myPizza = new Pizza("large","peperoni");
myPizza.setCrust("thin");
console.log(myPizza.getCrust());
// however we still can access the property just by dot(.) notation
// to solve this problem we have another concept**** 
////////////////////////////////////////////
// factory fuctions
// as the name indicates it's a factory for the creation of objects***
function myPizzaFactory (pizzaSize,pizzaType) {
    const size = pizzaSize;
    const type = pizzaType;
    return {
        bake: () => {
            console.log(`baking ${size} ${type} pizza!`);
        }
    }
}
const myPizza = myPizzaFactory("large","peperoni");
myPizza.bake();
// for the first time the factory function is working***
console.log(myPizza.type);
console.log(myPizza.size); 
// so we can't access properties that are within the function that's why we 
// learned about ** scope ** (and you need to recall scope again!)

// however this method is not supported for all the browser version***
// so we have final legit method which solves every problems
// **** private field and public fields *****
// properties that involves the parameters will fall under the constructor***
// use # to create a private (ex: #size)
class Pizza {
    crust = "original";
    #sauce = "traditional";
    // if you wanna make a parameter private that is inside a constructor
    // you need to define it outside the constructor****
    #size;
    constructor(pizzaSize) {
        this.#size = pizzaSize;
    }
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
    hereYouGo() {
        console.log(`Here's your ${this.#size} ${this.crust} ${this.#sauce} sauce pizza!`);
    }
}
const myPizza = new Pizza("large");
myPizza.setCrust("thin");
myPizza.hereYouGo();
console.log(myPizza.getCrust());
console.log(myPizza.crust);
console.log(myPizza.size);
console.log(myPizza.#size);
*/
//
class Pizza {
    //the properties which don't have parameter comes above the constructor
    crust = "original";
    #sauce = "traditional";
    // you can make any property private (if wanna make size private then you need to declare it before the constructor)
    #size;
    constructor (pizzaSize) {
        this.size = pizzaSize;
    }
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
   }
   hereYouGo() {
    console.log(`Here's your ${this.#size} ${this.crust} ${this.#sauce} sauce pizza!`);
   }
}
const myPizza = new Pizza("large");
myPizza.hereYouGo();
myPizza.setCrust("thin")
console.log(myPizza.getCrust());
//console.log(myPizza.#sauce);
//console.log(myPizza.#size);
















































