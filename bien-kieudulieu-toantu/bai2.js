function check(){
    let doC = +document.getElementById("doC").value;
    let doF = (doC*9/5)+32;
    document.getElementById("doC").value = doC;
}