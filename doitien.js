function check(){
    let Amount = document.getElementById("amount").value;
    let To = document.getElementById("to").value;
    let From = document.getElementById("from").value;
    let result;
    if(From === "VND" && To === "USD"){
        result = Amount/24000 + "$";
    }else if(From === "USD" && To === "VND"){
        result = Amount*24000 + "đ";
    }else if(From === "USD" && To === "USD"){
        result = Amount + "$";
    }else{
        result = Amount + "đ";
    }
    document.getElementById("result").innerHTML = result;
}