// alert(
//     $('#test').length
// );

// function User(firstName, seconedName, age) {
//     this.firstName = firstName;
//     this.seconedName = seconedName;
//     this.age = age;

// let getAgeValue = function () {  
// the output is undefined because the scope of this.age is the function in line 10 
//  age is not defined in getAgevalue   function 
//     return this.age;
// }

//     let getAgeValue =() => {
//          return this.age;      
//         }

//     this.getAge = function () {
//         return getAgeValue;
//     }


// };
// User.prototype.name = function () {
//     return this.firstName + ' ' + this.seconedName;
// }

// let m = new User('Gehad', 'Tarek', 20);
// let age = m.getAge();
// console.log(m.name());

// console.log(age());

// let showButton=$('#showButton'),
// hideButton=$('#hideButton'),
// toggleButton=$('#toggleButton'),
// image=$('#image');


// showButton.on('click', function(){
//     // image.show();
//     image.fadeIn();
// });

// hideButton.on('click', function(){
//     // image.hide();
//     image.fadeOut();
// });

//     toggleButton.on('click', function(){
//         // imag.toggle();
//         image.fadeToggle();
//     });





// $(function () {
//     let buttons = $('button'),
//         image = $('img');


//     buttons.on('click', function () {
//         let currentButton = $(this),
//         id = currentButton.attr('id');

//         if (id == 'showButton') {
//             image.show();
//         } else if (id == 'hideButton') {
//             image.hide();
//         } else if (id == 'toggleButton') {
//             image.toggle();
//         }
//     });
// });

$(function () {
    let image = $('img'),
        big = $('.big'),
        small = $('.small'),
        buttons = $('button');

    buttons.on('click', function () {
        let currentButton = $(this),
            id = currentButton.attr('id');

        if (id == 'showButton') {
            image.addClass('big');
            image.removeClass('small');
        }
        else if (id == 'hideButton') {
            image.addClass('small');
            image.removeClass('big');
        }
    });
});























