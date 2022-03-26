// Start your code ***HERE*** =========

// create an array with all possible character types: Uppercase, Lowercase, numbers, and symbols stored in a variable

// create a global variable called "pwLength" with a number between 10 and 18

// Using the above array and password length variable, create a random password using a for loop inside of a function called "addNewPassword" either saved as an arrow function variable or a traditional function

// ========= ⬇ DO NOT TOUCH THIS CODE ⬇ ======

let genBtn = document.getElementById("btnGen");
let buttonHandler = () => {
    document.getElementById("password").value = addNewPassword();
};
// Event listener for generate PW button
genBtn.addEventListener("click", buttonHandler);

// ========= ⬆ DO NOT TOUCH THIS CODE ⬆ ======

function addNewPassword() {
    const randomArray = [
         //prettier-ignore
         ['~', '`', '!', '@', '$', '%','^','&', '*','(',')','-','_','+','=','#'],
         //prettier-ignore
         [0,1,2,3,4,5,6,7,8,9],
         //prettier-ignore
         ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
         //prettier-ignore
         ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    ];
       

     const pwLength = Math.floor(Math.random() * 9) + 10;
    let randomPassword = [];

    while (randomPassword.length <= pwLength) {
        let randomIndex = randomArray[Math.floor(Math.random() * randomArray.length)];
        let randomSelector = Math.floor(Math.random()* randomIndex.length);
        randomPassword.push(randomIndex[randomSelector]);

    }
   //console.log(randomArray.length);
   //console.log(randonIndex);
  // console.log(randomSelector);
   console.log(randomPassword.join(""));
   return randomPassword.join("");
}