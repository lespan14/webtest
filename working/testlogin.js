let container = document.querySelector('div#container');

let id = container.querySelector('input#loginid');
let pw = container.querySelector('input#loginpw');

let namec = container.querySelector('input#makecokname');
let value = container.querySelector('input#makecokval');
let exp = container.querySelector('input#makecokexp');

let delname = container.querySelector('input#delcokname');

const hlg = document.getElementById('loginfunc');
hlg.addEventListener('click',function() {
    

    if(id.value == "root" && pw.value == "root"){
        alert("Hello!");
        console.log("Hello",id.value);
        setCookie(namec,value,exp);
        //login cookie save 
    }else{
        alert("No");
    }

    //if login then login page 판별 cookie  값 

})

let cokdelbtn = container.querySelector('button#cokdelbtn');
cokdelbtn.onclick = function(){

    deleteCookie(delname);
    alert('Del cookie');

}

let cokmakebtn = container.querySelector('button#cokmakebtn');
cokmakebtn.onclick = function() {

    setCookie(namec,value,exp);
}

let setCookie = function(name, value, exp) {
	let date = new Date();
	date.setTime(date.getTime() + exp*24*60*60*1000);
	document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
}

let deleteCookie = function(name) {
	document.cookie = name + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
}

let getCookieval = function(name) {
	let value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    
	return value? value[2] : null;
}