// /api/users/login

//signup /api/users/

const logInHandler = async (e) => {
  e.preventDefault();
  console.log("login Called")

  const userName = document.querySelector("#logUsername").value.trim();
  const userPassword = document.querySelector("#logPassword").value.trim();
  
  console.log(userName)
  console.log(userPassword)
  if (userName && userPassword){
  const response = await fetch('/api/users/login', {
      method: "POST",
      body: JSON.stringify({
         userName, userPassword
      }),
      headers: {
           'Content-Type': 'application/json',
      },
  });
  console.log(response)
   if(response.ok) {
       console.log("RESPONSE OK")
      document.location.replace('/');
  } else {
      console.log()
      alert('Failed To Login ' + response.body);
  }}
}

const signUpFormHandler = async (e) => {
  e.preventDefault();
  console.log("Signup click")
  const name = document.querySelector('#signUpUsername').value;
  const email = document.querySelector('#signUpEmail').value;
  const password = document.querySelector('#signUpPassword').value;

  if (name && email && password) {
      const response = await fetch('/api/users', {
          method: 'POST',
          body: JSON.stringify({ name, email, password }),
          headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
          document.location.replace('/');
      } else {
          alert(response.statusText)
      }
  }
}

const $logInForm = document.querySelector("#logInForm");
const $signUpForm = document.querySelector("#signUpForm");

$logInForm.addEventListener("submit", logInHandler)
$signUpForm.addEventListener("submit", signUpFormHandler)