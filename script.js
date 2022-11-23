const cardBackCode = document.querySelector(".card-back-code");
const cardFrontCode = document.querySelector(".card-front-code");
const cardName = document.querySelector(".card-name");
const expirationDateMonth = document.querySelector(".mm");
const expirationDateYear = document.querySelector(".yy");

const cardBackCodeInput = document.getElementById("cvc");
const cardFrontCodeInput = document.getElementById("card-number");
const cardNameInput = document.getElementById("name");
const expirationDateMonthInput = document.getElementById("mm");
const expirationDateYearInput = document.getElementById("yy");

// ERROR HANDLING

const form = document.querySelector(".form");
const nameError = document.querySelector(".name-error");
let nameValid = false;
const numberError = document.querySelector(".num-error");
let numberValid = false;
const mmError = document.querySelector(".mm-error")
let mmValid = false;
const yyError = document.querySelector(".yy-error")
let yyValid = false;
const cvcError = document.querySelector(".cvc-error")
let cvcValid = false;

form.addEventListener("submit", (e) => { 
   // CARDHOLDER NAME
   if (cardNameInput.value.match("[0-9]+")) {
      cardNameInput.style.cssText = ("border: 2px solid hsl(0, 100%, 66%)")
      nameError.classList.remove("display-none");
      nameError.textContent = "Please enter a valid name"
      cardNameInput.addEventListener("focus", () => {
         inputBorderName.classList.add("input-border-display")
      })
      e.preventDefault();
   } else if (cardNameInput.value.length == 0) {
      nameError.classList.remove("display-none");
      nameError.textContent = "Can't be blank"
      cardNameInput.style.cssText = ("border: 2px solid hsl(0, 100%, 66%)")
   } else {
      cardNameInput.style.cssText = ("border: 1px solid hsl(270, 3%, 87%)")
      nameError.classList.add("display-none")
      nameValid = true;
   }

   // CARD CODE
   if (cardFrontCodeInput.value.match("[a-zA-Z]+")) {
      cardFrontCodeInput.style.cssText = ("border: 2px solid hsl(0, 100%, 66%)")
      cardFrontCodeInput.addEventListener("focus", () => {
         inputBorderName.classList.add("input-border-display")
      })
      numberError.classList.remove("display-none")
      numberError.textContent = "Wrong format, numbers only"
      e.preventDefault();
   } else if (cardFrontCodeInput.value.length == 0) {
      numberError.classList.remove("display-none");
      numberError.textContent = "Can't be blank"
      cardFrontCodeInput.style.cssText = ("border: 2px solid hsl(0, 100%, 66%)")
      e.preventDefault();
   } else {
      cardFrontCodeInput.style.cssText = ("border: 1px solid hsl(270, 3%, 87%)")
      numberError.classList.add("display-none")
      numberValid = true
   }

   // CVC CODE
   if (cardBackCodeInput.value.match("[a-zA-Z]+")) {
      cardBackCodeInput.style.cssText = ("border: 2px solid hsl(0, 100%, 66%)")
      cvcError.classList.remove("display-none")
      cvcError.textContent = "Wrong format, numbers only"
      cardBackCodeInput.addEventListener("focus", () => {
         inputBorderName.classList.add("input-border-display")
      })
      e.preventDefault();
   } else if (cardBackCodeInput.value.length == 0) {
      cvcError.classList.remove("display-none")
      cvcError.textContent = "Can't be blank"
      cardBackCodeInput.style.cssText = ("border: 2px solid hsl(0, 100%, 66%)")
      e.preventDefault();
   } else {
      cardBackCodeInput.style.cssText = ("border: 1px solid hsl(270, 3%, 87%)")
      cvcError.classList.add("display-none")
      cvcValid = true
   }

   // MONTH
   if(expirationDateMonthInput.value.match("[a-zA-Z]+")) {
      expirationDateMonthInput.style.cssText = ("border: 2px solid hsl(0, 100%, 66%)")
      mmError.classList.remove("display-none")
      mmError.textContent = "Wrong format, numbers only"
      expirationDateMonthInput.addEventListener("focus", () => {
            inputBorderName.classList.add("input-border-display")
      })
      e.preventDefault();
   } else if (expirationDateMonthInput.value.length == 0) {
      mmError.classList.remove("display-none");
      mmError.textContent = "Can't be blank"
      expirationDateMonthInput.style.cssText = ("border: 2px solid hsl(0, 100%, 66%)")
      e.preventDefault();
   } else {
      expirationDateMonthInput.style.cssText = ("border: 1px solid hsl(270, 3%, 87%)")
      mmError.classList.add("display-none")
      mmValid = true;
   }

   // YEAR
   if(expirationDateYearInput.value.match("[a-zA-Z]+")) {
      expirationDateYearInput.style.cssText = ("border: 2px solid hsl(0, 100%, 66%)")
      yyError.classList.remove("display-none")
      yyError.textContent = "Wrong format, numbers only"
      expirationDateYearInput.addEventListener("focus", () => {
         inputBorderName.classList.add("input-border-display")
      })
      e.preventDefault();
   } else if (expirationDateYearInput.value.length == 0) {
      yyError.classList.remove("display-none");
      yyError.textContent = "Can't be blank"
      expirationDateYearInput.style.cssText = ("border: 2px solid hsl(0, 100%, 66%)")
      e.preventDefault();
   } else {
      expirationDateYearInput.style.cssText = ("border: 1px solid hsl(270, 3%, 87%)")
      yyError.classList.add("display-none")
      yyValid = true;
   }

   // FINAL VALIDATION
   if (nameValid && numberValid && mmValid && yyValid && cvcValid) {
      form.classList.add("display-none")
      thankYou.classList.remove("thank-you-display")
      e.preventDefault()
   }
})

// CARD DISPLAY CHANGES DEPENDING ON INPUT

cardBackCodeInput.onkeyup = function () {
   cardBackCode.textContent = cardBackCodeInput.value
}

cardFrontCodeInput.onkeyup = function () {
   cardFrontCode.textContent = cardFrontCodeInput.value
}

cardNameInput.onkeyup = function () {
   cardName.textContent = cardNameInput.value
}

expirationDateMonthInput.onkeyup = function () {
   expirationDateMonth.textContent = expirationDateMonthInput.value
}

expirationDateYearInput.onkeyup = function () {
   expirationDateYear.textContent = expirationDateYearInput.value
}

// INPUT BORDER CHANGES WHEN INPUT IS FOCUSED

const inputBorderBackCode = document.querySelector(".input-border-cvc");
const inputBorderFrontCode = document.querySelector(".input-border-card-number");
const inputBorderName = document.querySelector(".input-border-name");
const inputBorderExpirationDateMonth = document.querySelector(".input-border-mm");
const inputBorderExpirationDateYear = document.querySelector(".input-border-yy");

cardBackCodeInput.addEventListener("focus", () => {
   inputBorderBackCode.classList.remove("input-border-display")
})
cardBackCodeInput.addEventListener("focusout", () => {
   inputBorderBackCode.classList.add("input-border-display")
})

cardNameInput.addEventListener("focus", () => {
   inputBorderName.classList.remove("input-border-display")
})
cardNameInput.addEventListener("focusout", () => {
   inputBorderName.classList.add("input-border-display")
})

cardFrontCodeInput.addEventListener("focus", () => {
   inputBorderFrontCode.classList.remove("input-border-display")
})
cardFrontCodeInput.addEventListener("focusout", () => {
   inputBorderFrontCode.classList.add("input-border-display")
})

expirationDateMonthInput.addEventListener("focus", () => {
   inputBorderExpirationDateMonth.classList.remove("input-border-display")
})
expirationDateMonthInput.addEventListener("focusout", () => {
   inputBorderExpirationDateMonth.classList.add("input-border-display")
})

expirationDateYearInput.addEventListener("focus", () => {
   inputBorderExpirationDateYear.classList.remove("input-border-display")
})
expirationDateYearInput.addEventListener("focusout", () => {
   inputBorderExpirationDateYear.classList.add("input-border-display")
})

// BUTTON POPUP

const btnConfirm = document.querySelector(".btn-confirm");
const btnContinue = document.querySelector(".btn-continue");
const thankYou = document.querySelector(".thank-you")

form.addEventListener("submit", (e) => {
   
})

btnContinue.addEventListener("click", () => {
   alert("Thank you for testing! <3")
})