let textarea1 = document.getElementById("textarea1");
let textarea2 = document.getElementById("textarea2");
let uppercase = document.getElementById("Uppercase");
let lowercase = document.getElementById("Lowercase");
let Capitalise = document.getElementById("Capitalise");
let copy = document.getElementById("Copy");
let del = document.getElementById("delete");




uppercase.addEventListener("click", function() {
    let x = textarea1.value;
    let y = x.toUpperCase();
    textarea2.innerHTML = y;
})

lowercase.addEventListener("click", function(){
    let x = textarea1.value;
    let y = x.toLowerCase();
    textarea2.innerHTML = y;
})




Capitalise.addEventListener("click", function(){
    let x = textarea1.value;

    let y = x.split(" ");
    let z;
    let r;
    let f;
    let str1;
    let capitalizedString = ""; // new variable to store capitalized string
    for(let i = 0; i < y.length; i++){
        z = y[i].split("");
        r = z[0].toUpperCase();
        f = z[0] = r;
        str1 = z.join("");
        capitalizedString += str1 + " "; // add each capitalized word to the new string
    }
    console.log(capitalizedString); // log the final capitalized string
    textarea2.innerHTML = capitalizedString;

})

copy.addEventListener("click", function() {
    textarea2.select(); // select the text inside the textarea
    document.execCommand("Copy"); // copy the selected text to the clipboard
  });

del.addEventListener("click", function() {
    textarea1.value ="";
    textarea2.innerHTML ="";
})
