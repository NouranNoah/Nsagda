var form = document.forms['myform']
var password =document.getElementById('pass')
var span = document.querySelector('span')
function Validation(e){
    if(password.value !== '3102003' ){
        var validepass=document.getElementById('validepass')
        validepass.style.display='inline'
        e.preventDefault()
        password.value="" 
    }
}