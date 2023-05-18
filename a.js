let a;

let input_id;
let input_pw;
let message;

window.onload=function(){
    input_id=document.getElementById("id")
    input_pw=document.getElementById("pw")
    message=document.getElementById("message")
}

function login(){
    let local_id=input_id.value;
    let local_pw=input_pw.value;
    
    if(local_id==ajdajddl && local_pw==1234){
        message.innerHTML=(local_id +" 님 환영합니다!")
    }else{
        message.innerHTML=("아이디/비밀번호가 틀렸습니다.")
    }
}