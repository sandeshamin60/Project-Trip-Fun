    
function check2(){
    if(document.getElementById("b1").value==""){
        alert("! INPUT USERNAME");
        return false;
    }if(document.getElementById("b2").value==""){
        alert("! INPUT PASSWORD");
        return false;
    }else{
        return true;
    }
}