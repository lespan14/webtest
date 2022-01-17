let container = document.querySelector('div#container');

let id = container.querySelector('input#loginid');
let pw = container.querySelector('input#loginpw');


const hlg = document.getElementById('loginfunc');
hlg.addEventListener('click',function() {
    
    if(id.value == "root" && pw.value == "root"){
        alert("Hello!");
        console.log("Hello",id.value);
    }else{
        alert("No");
    }




})