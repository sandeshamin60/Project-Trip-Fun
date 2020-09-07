    
function check1(){
    if(document.getElementById("a1").value==""){
        alert("! INPUT EMIAL");
        return false;
    }if(document.getElementById("a2").value==""){
        alert("! INPUT USERNAME");
        return false;
    }if(document.getElementById("a3").value==""){
        alert("! INPUT PASSWORD");
        return false;
    }if(document.getElementById("a4").value==""){
        alert("! INPUT RE-ENTER PASSWORD");
        return false;
    }
    else{
        return true;
    }

}