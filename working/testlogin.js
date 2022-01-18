let container = document.querySelector('div#container');

let id = container.querySelector('input#loginid');
let pw = container.querySelector('input#loginpw');

let cookie = document.cookie;
document.cookie = "user=A";

const hlg = document.getElementById('loginfunc');
hlg.addEventListener('click',function() {
    
    if(id.value == "root" && pw.value == "root"){
        alert("Hello!");
        console.log("Hello",id.value);
        setCookie();
        //login cookie save 
    }else{
        alert("No");
    }

    //if login then login page 판별 cookie  값 

})

var setCookie = function() {
	var date = new Date();
	date.setTime(date.getTime() + 24*60*60*1000);
	document.cookie = 'A' + '=' + '1' + ';expires=' + date.toUTCString() + ';path=/';
};
