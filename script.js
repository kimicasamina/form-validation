const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password1 = document.getElementById('password')
const password2 = document.getElementById('password2')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  checkInputs()
})

function checkInputs(){
  const usernameValue = username.value.trim()
  const emailValue = email.value.trim()
  const password1Value = password1.value.trim()
  const password2Value = password2.value.trim()

  checkIfEmpty(usernameValue, username)
  checkIfEmpty(emailValue, email)
  checkIfValid(emailValue, email)
  checkIfEmpty(password1Value, password1)
  checkIfEmpty(password2Value, password2)
  checkIfMatch(password1Value, password2Value, password2)
}

function checkIfEmpty(inputValue, input){
  if (inputValue === ''){
    // show error
    // add error class
    setErrorFor(input, 'Username cannot be blank')
  } else {
      // add success class
      setSuccessFor(input)
  }
}

function setErrorFor(input, msg){
  const formControl = input.parentElement
  const small = formControl.querySelector('small')
  // add error message inside small
  small.innerText = msg 
  
  // add error class to form control
  formControl.className = 'form-control error'
}

function setSuccessFor(input){
  const formControl = input.parentElement
  
  // add success class to form control
  formControl.className = 'form-control success'
}

function checkIfValid(inputValue, input){
  const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
  console.log(inputValue.match(pattern))
  const isMatch = inputValue.match(pattern)
  if (!isMatch){
    setErrorFor(input, 'Email not valid')
  } else {
    setSuccessFor(input)
  }
}

function checkIfMatch(inputValue1, inputValue2, input){
  if (inputValue1 !== inputValue2){
    setErrorFor(input, 'Passwords does not match')
  } else {
    setSuccessFor(input)
  }
}