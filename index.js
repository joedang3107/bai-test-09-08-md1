// câu lệnh để hiển thị lên hộp thoại
// alert("hello everyone")

// câu lệnh nhận giá trị từ hộp thoại
// let a = prompt("Nhập số a :")
// tich = a * a
// alert("bình phương số a là: " + tich)

// bai 3: tính S = a * b và hiện ra thẻ h1

// function multiply() {
//     let input1 = document.getElementById("input1").value
//     let input2 = document.getElementById("input2").value
//     let result = document.getElementById("result")

//     result.innerHTML = input1 * input2
// }

// bai 4: nhập vào input và hiện ra thẻ p 

// nhập vào a, b tính a^2, a^b

// function phepToan() {
//     let input3 = document.getElementById("input3").value
//     let input4 = document.getElementById("input4").value
//     let result1 = document.getElementById("result1")
//     let result2 = document.getElementById("result2")

//     result1.innerHTML = input3 * input4
//     result2.innerHTML = Math.pow(input3, input4)
// }

// nhap a va b, tinh tong cac so tu a -> b

// function phepToan() {
//     let input3 = +document.getElementById("input3").value
//     let input4 = +document.getElementById("input4").value
//     let result1 = 0;

//     for (let index = input3; index <= input4; index++) {

//         result1 += index;
//     }
//     document.getElementById("result1").innerHTML = result1;
// }

function theky() {
    let nam = +document.getElementById('nam').value;

    if (nam % 100 == 0) {
        tk = nam / 100;
        document.getElementById('theky').innerHTML = 'thế kỷ ' + Math.trunc(tk);
    } else {
        tk = nam / 100 + 1;
        document.getElementById('theky').innerHTML = 'thế kỷ ' + Math.trunc(tk);
    }
}
