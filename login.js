const hlg = document.getElementById('loginbutton1');

let id = document.querySelector('input#testid');
let pw = document.querySelector('input#testpw');

hlg.addEventListener('click',function() {

    

    let id = document.querySelector('input#testid');
    let pw = document.querySelector('input#testpw');
    if(id.value == "root" && pw.value == "root"){
        alert('Hello World');
    }
    else{
        alert('Nope');
    }
})

function printName()  {
    const valdata = document.getElementById('typevalue').value;
    document.getElementById("result").innerText = valdata;
    }

/*function check() {
    let valid = document.getElementById('testid');
    let valpw = document.getElementById('testpw');

    if(valid.value == "root" && valpw.value == "root"){
        alert('Hello');
        
    }else{
        alert('Nope');
    }
}*/