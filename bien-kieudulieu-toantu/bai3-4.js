function check(){
    let bankinh = +document.getElementById("number").value;
    let pi = Math.PI;
    let dientich = bankinh * bankinh * pi;
    let chuvi = 2*pi*bankinh;
    document.getElementById("result").innerHTML = `Dien tich cua hinh tron co ban kinh ${bankinh} la: ${dientich} va chu vi la : ${chuvi}`;
}