function showPassword() {
  let showPass = document.getElementById("input-pass");
  if (showPass.type === "text") {
    showPass.type = "password";
  } else {
    showPass.type = "text";
  }
}
// Change type to show and hide password



function logout(){
  location.href = '/login.html';
}

function store(){
  let username = document.getElementById('input-email');
  let pass = document.getElementById('input-pass');
  if(username.value.length == 0){
      alert('Please fill in email');

  }else if(pass.value.length == 0 ){
      alert('Please fill in password');

  }
  else if(username.value.length == 0 && pass.value.length == 0){
      alert('Please fill in email and password');
  }else{
      localStorage.setItem('username',[ username.value]);
      localStorage.setItem('pass', pass.value);
      location.href='/home.html';
  }
}

//checking
function check(){
  let storedName = localStorage.getItem('username');
  let storedPw = localStorage.getItem('pass');

  let userName = document.getElementById('input-email');
  let userPass = document.getElementById('input-pass');
  
  if(userName.value.length == 0){
    alert('Please fill in email');

}else if(userPass.value.length == 0 ){
    alert('Please fill in password');

  }else if(userName.value == storedName && userPass.value == storedPw){
    location.href='/home.html';
  }else{
    alert(`Account not found`);
  };
};

 
  





