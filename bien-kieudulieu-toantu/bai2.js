function check(){
    let doC = +document.getElementById("doC").value;
    let doF = (doC*9/5)+32;
    document.getElementById("doF").innerHTML = doF + "℉";
}
