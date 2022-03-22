// function suman(){
//     //argemental function

//     console.log("this is suman gangopadhyay");
// }

// function Guvi(){
//     suman();
//     //calls the suman() function as an argument
// }
// Guvi(); // guvi() is a callback function


// function Guvi(){
//     suman();
//     //calls the suman() function as an argument
// }
// function suman(){
//     //argemental function

//     console.log("this is suman gangopadhyay from bangalore");
// }
// Guvi();


//Modern way to write a callback

// function Suman(num1, num2) {
//     let result = num1 + num2;
//     return result;
// }

// function Guvi(data) {
//     console.log(data);
// }

// let val = Suman(20, 30);
// Guvi(val);


//Callback function

// function Suman() {
//     alert("Suman gangopadhyay!");
// }

// function timer() {
//   setTimeout(function()  {
//       Suman(),5000
      
//   });
// };

// timer();

// function Suman() {
//     alert("Suman gangopadhyay!");
//     console.log("suman function");
// }

// function Pizza(){
//     console.log("pizza function");
// }

// function timer() {
//     setTimeout(function()  {
//         Suman(),5000
        
//     });
//   };

//   timer();
// // Suman();
// // Pizza();



// const url = "https://api.thedogapi.com/v1/breeds";
// //display of the fetched data from the guvi() function
// function Suman(data) {
//     let Suman = document.getElementById("suman");
//     Suman.innerHTML = data;
// }

// //fetching the data from the API
// function Guvi(url, my_callback_function){
//     let request = new XMLHttpRequest();
//     request.open("GET", url);
//     request.onload = function(){
//         if(request.status == 200){
//             my_callback_function(this.responseText);
//         } else {
//             my_callback_function(request.status);
//         }
//     };
//     request.send();
// }

// //calling the callback function Guvi() which calls Suman() Function as an argument

// Guvi(url, Suman);


// function move(){
//     let bar = document.getElementById("progress_bar");
//     let width = 1;
//     let id = setInterval(frame, 10); //callback & async way of coding

//     function frame() {
//         if(width >=100) {
//             clearInterval(id);
//         } else {
//             width = width + 1;
//             bar.style.width = width + "%" ;

//         }
//     }
// }
//
