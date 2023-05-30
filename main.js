let serail = document.getElementById("serail");
let Password_Length = document.getElementById("Password-Length");
let btn = document.getElementById("generate");
let Only_Numbers = document.getElementById("Numbers");
let Only_letters = document.getElementById("Letters");
let Only_SC = document.getElementById("SC");
btn.onclick = function () {
  let character = "";
  if (
    Only_Numbers.checked == true &&
    Only_letters.checked == true &&
    Only_SC.checked == true
  ) {
    character = `0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*()-_=+|}{][''"";:/?><.,\``;
  } else if (Only_Numbers.checked == true && Only_letters.checked == true) {
    character = `0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM`;
  } else if (Only_Numbers.checked == true && Only_SC.checked == true) {
    character = `0123456789!@#$%^&*()-_=+|}{][''"";:/?><.,\``;
  } else if (Only_letters.checked == true && Only_SC.checked == true) {
    character = `qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*()-_=+|}{][''"";:/?><.,\``;
  } else if (Only_Numbers.checked == true) {
    character = `0123456789`;
  } else if (Only_letters.checked == true) {
    character = `qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM`;
  } else if (Only_SC.checked == true) {
    character = `!@#$%^&*()-_=+|}{][''"";:/?><.,\``;
  }
  let Password_char_Number = Password_Length.value - 1;
  let Password = "";
  for (let i = 0; i <= Password_char_Number; i++) {
    Password += character[Math.floor(Math.random() * character.length)];
  }
  if (character == "") {
    serail.textContent = `Choose Something`;
  } else {
    serail.textContent = Password;
  }
};
