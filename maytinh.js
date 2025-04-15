
function checkTong(){
    let number = +document.getElementById("number").value;
    let number1 = +document.getElementById("number1").value;
    let result = number + number1;
    document.getElementById("result").innerText = result;
}
function checkHieu(){
    let number = +document.getElementById("number").value;
    let number1 = +document.getElementById("number1").value;
    let result = number - number1;
    document.getElementById("result").innerText = result;
}
function checkTich(){
    let number = +document.getElementById("number").value;
    let number1 = +document.getElementById("number1").value;
    let result = number * number1;
    document.getElementById("result").innerText = result;
}
function checkThuong(){
    let number = +document.getElementById("number").value;
    let number1 = +document.getElementById("number1").value;
    if(number1 !== 0){
        let result = number / number1;
        document.getElementById("result").innerText = result;
    }else {
        document.getElementById("result").innerText = `Khong the chia ${number} cho 0`;
    }

}
