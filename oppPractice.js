//// THIS IS MY OPP PRACTICE JS FILE //
//
////function personDetails(name,city) {
////    console.log("My name is " + name + " and I live in" + city + ".")
////    
////    document.getElementById("display").innerHTML="My name is " + name + " and I live in " + city + ".";
////    }
////
////personDetails("Sajin", "London");
////personDetails("Jack", "Surrey");
//
//// Lets create an object to structure out data//
//
///*
//var person = {
//    
//    name:"Max",
//    city:"Grove Park",
//    personData:function() {
//    
//    console.log("My name is " + person.name + " and I live in" + person.city + ".");
//    document.getElementById("display").innerHTML="My name is " + person.name + " and I live in " + person.city + ".";
//   
//    }
//};
//
//person.personData();
//console.log(person.name);
//console.log(person.city);
//*/
//
//
//
////Now we are going to build our CONSTRUCTOR ( a constructor must have a capital letter)
//
//var ourPeople = [];
//
//function People(fullName, location) {
//    this.name = fullName;
//    this.city = location;
//
//    /* ourPeople.push(this.name);
//     ourPeople.push(this.city);*/
//    
//    ourPeople.push([this.name,this.city]);
//
//    this.personData = function () {
//
//        console.log("My name is " + this.name + " and I live in" + this.city + ".");
//        document.getElementById("display").innerHTML += "My name is " + this.name + " and I live in " + this.city + ".";
//
//    }
//}
//
//var Panna = new People("Panna G", "Paris");
//var Peter = new People("Peter N", "Tokyo");
//
//Panna.personData();
//
//ourPeople.push(Panna);
//
//console.log(ourPeople);



//============THIS IS MY JSON DEMO FILE==========//




//var car = {
//    "model":"bmw",
//    "price": 2500000,
//    "fuel":"Petrol"
//    
//}
//
//console.log(car.model);
//
//var f1Drivers = ["Lewis","Kimi", "Alonso"];
//
//console.log(f1Drivers[2]);



// {
//    "data": [
//        {
//            "car": "mercedes",
//            "driver": "Lewis",
//            "wins": 2
//
//        },
//        {
//            "circuit": "Monaco",
//            "pointSystem": [
//                {
//                    "firstPlace": 25,
//                    "secondPlace": 18,
//                    "thirdPlace": 15
//                }
//
//            ],
//            "teams":11
//        }
//    ]
//}
//
//
//
//console.log(f1.data[1].pointSystem[0].thirdPlace);


//============THIS IS MY JAVASCRIPT ARRAY DEMO==========//



// creating a new array CONSTRUCTOR //

//var myList = new Array();
//var myList = new Array(10,2,4);
//
//console.log(myList);
//document.getElementById("display").innerHTML="<h1>" + myList +"</h1>";


//============THIS IS MY JAVASCRIPT ARRAY LITERAL=========//

//var myList = []; //empty array//
//var myList =[1,2,3,4];
//
//document.getElementById("display").innerHTML="<h1>" + myList +"</h1>";


// DO not just imsert any index number to an array to add an element//


//var myList =[1,2,3,4];
//
//myList[4] = 77;// will add 77 to the last element of the array//
//myList[12] = 77; // this will create 8 empty elements (incorrect)//
//
//
//console.log(myList);
//
//document.getElementById("display").innerHTML="<h1>" + myList +"</h1>";


// Arrays are actually just objects in JS//

//var myList =[1,2,3,4];
//
//myList["cool"] = "zlan is a cool plater"; //Arrays will show elements as properties of an object (example purpose only... not correct syntax)//
//
//console.log(myList);
//
//document.getElementById("display").innerHTML="<h1>" + myList +"</h1>";


// Adding elements into the array using push() method //

//var myFamily = ["Biato","Julia"];
//
//myFamily.push(2,"tony");
//
//console.log(myFamily);
//
//document.getElementById("display").innerHTML="<h1>" + myFamily +"</h1>";

// Now lets the use the shift() and unshift() methods//

//var myBigFamily = ["Dad","uncle","myself"];
//
//myBigFamily.unshift("Dad's GF");  // adds elements at the beginning of the array//
//myBigFamily.shift();  //removes first element of the array//
//
//var theLength = myBigFamily.length; // shows length of the array//
//
//console.log(theLength);
//
//console.log(myBigFamily);
//
//document.getElementById("display").innerHTML="<h1>" + myBigFamily +"</h1>";


// if i want to find the index of an element in an array i'm going to use the indexOf() menthod//


//var myList = [1,2,3,4].indexOf(3); // will return 2 as 3 is the 2nd index in the array
//
//console.log(myList);
//
//document.getElementById("display").innerHTML="<h1>" + myList +"</h1>";


// slicing an array with the slice() method, that removes elemenets infront of the array//

//var myGFs = ["Michu","Doreen","Wendy","lisa","Caroline","Urika"];
//
//myGFs.slice(2);
//
//console.log(myGFs.slice(2)); // removes the first 2 names in the array //
//
//document.getElementById("display").innerHTML="<h1>" + myGFs.slice(2) +"</h1>";



// slicing an array with the splice() method,//

//var myGFs = ["Michu","Doreen","Wendy","lisa","Caroline","Urika"];
//
////myGFs.splice(2,2); // at position index 2 remove two items
//
//console.log(myGFs);
//
//document.getElementById("display").innerHTML="<h1>" + myGFs.splice(2,2) +"</h1>";




// JS includes 5 built in methods: forEach(),map(),filter(),some() and every()- they all have simular syntax and structure and most hold 3 parameters which are element
//index, and the array



//var myList = [1,2,3,4].forEach(function(el,idx,arr) {//element. index, array//
//    
//    
//    
////    console.log(el);
//
//    document.getElementById("display").innerHTML+="<h1>" + el +"</h1>";
//    
//});


//var myArray = [10,20,"hello",{},7];
//
//var myFunction = function(item) {
//    console.log("For an element" +item);
//
//document.getElementById("display").innerHTML+="<h1>" + item + "</h1>";
//
//}
//myArray.forEach(myFunction);

//the map() mutliplies every element by itself
//
//var myArray = [1,2,3,4].map(function(el,idx,arr){
//    return el*el;
//});
//
//console.log(myArray);
//
//document.getElementById("display").innerHTML+="<h1>" + myArray + "</h1>";



//the some() will return true or false

//var myArray = [1,2,3,4].some(function(el,idx,arr){
//    return el>2;
//});
//
//console.log(myArray);
//
//document.getElementById("display").innerHTML="<h1>" + myArray + "</h1>";

//the every() will return true or false but is checking evry element in the array

//var myArray = [1,2,3,4].every(function(el,idx,arr){
//    return el>2;
//});
//
//console.log(myArray);
//
//document.getElementById("display").innerHTML="<h1>" + myArray + "</h1>";

//the reduce()


var myArray = [1,2,3,4].reduce(function(sum,el,idx,arr){
    return sum +el; // adds all the elemets in the array//
}20); // 20 will be added to the total of the sum of thw array

console.log(myArray);

document.getElementById("display").innerHTML="<h1>" + myArray + "</h1>";




















