
let container = document.querySelector('div#container');

let subcon = document.querySelector('div#subcon');


let loginbtn = container.querySelector('input#login-button');
let loginid = container.querySelector('input#testid');
let loginpw = container.querySelector('input#testpw');
let target_name = container.querySelector('input#target_name');

console.log(loginpw);
console.log(loginid);

        
    loginbtn.onclick =function(){
        
          // alert(`아이디는 ${loginid.value} 비번은 ${loginpw.value}`);
    if(loginid.value == "root" && loginpw.value == "root"){
        alert('Hello');
        window.open("/data.html");
        
            
    }else{
        alert('돌아가');
    }
}

function submit() {
    alert('U have clicked submit');
}

function printName()  {
    const valdata = document.getElementById('typevalue').value;
    document.getElementById("result").innerText = valdata;
    }

