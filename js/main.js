//Thêm số
var numArray = [];
function themSo() {
    //lấy giá trị và đổi kiểu
    var num = Number(document.querySelector("#inputNum").value);

    //thêm phần tử vào mảng
    numArray.push(num);
    // console.log(numArray)

    document.querySelector("#btnThem").innerHTML = numArray;

}

document.querySelector("#btnThem").onclick = themSo;

// 1. Tổng số dương

function tongSoDuong() {
    var tongDuong = 0;
    // debugger;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] >= 0) {
            tongDuong += numArray[i];
        }
    }
    document.querySelector("#btnTongDuong").innerHTML = tongDuong;
}
document.querySelector("#btnTongDuong").onclick = tongSoDuong;

// 2. Đếm số dương


function demSoDuong() {
    var demSoDuong = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] >= 0) {
            demSoDuong++;
        }
    }
    document.querySelector("#btnDemDuong").innerHTML = demSoDuong;
}
document.querySelector("#btnDemDuong").onclick = demSoDuong;

// 3. Tìm số nhỏ nhất

function soNhoNhat() {
    var soNhoNhat = numArray[0]
    for (var i = 1; i < numArray.length; i++) {
        if (numArray[i] < soNhoNhat) {
            soNhoNhat = numArray[i];
        }
    }
    document.querySelector("#btnSoNhoNhat").innerHTML = soNhoNhat;
}
document.querySelector("#btnSoNhoNhat").onclick = soNhoNhat;

// 4. Số dương nhỏ nhất

function soDuongNho() {
    var soDuongNhoNhat = numArray[0]
    for (var i = 1; i < numArray.length; i++) {
        if (numArray[i] < soDuongNhoNhat && numArray[i] > 0) {
            soDuongNhoNhat = numArray[i];
        }
    }
    document.querySelector("#btnSoDuongNho").innerHTML = soDuongNhoNhat;
}
document.querySelector("#btnSoDuongNho").onclick = soDuongNho;

// 5. Số chẵn cuối cùng

function soChanCuoi() {
    var soChanCuoi = 0;
    // debugger;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] % 2 == 0) {
            soChanCuoi = numArray[i];
        }
    }
    document.querySelector("#btnSoChanCuoi").innerHTML = soChanCuoi;
}
document.querySelector("#btnSoChanCuoi").onclick = soChanCuoi;

// 6. Đổi chỗ

function doiChoMang() {
    var viTri1 = Number(document.querySelector("#viTri1").value);
    var viTri2 = Number(document.querySelector("#viTri2").value);

    var temp = numArray[viTri1];
    numArray[viTri1] = numArray[viTri2];
    numArray[viTri2] = temp;

    // console.log(numArray);
    document.querySelector("#btnDoiCho").innerHTML = numArray;
}
document.querySelector("#btnDoiCho").onclick = doiChoMang;

// 7. Sắp xếp tăng dần
function soTangDan() {
    var numCoppy = [];
    for (var i = 0; i < numArray.length; i++) {
        numCoppy.push(numArray[i]);
    }

    for (var i = 0; i < numCoppy.length - 1; i++) {
        for (var j = 0; j < numCoppy.length; j++) {
            if (numCoppy[j] > numCoppy[j + 1]) {
                var temp = numCoppy[j];
                numCoppy[j] = numCoppy[j + 1];
                numCoppy[j + 1] = temp;
            }
        }
    }
    // console.log(numCoppy);
    document.querySelector("#btnTangDan").innerHTML = numCoppy;
}
document.querySelector("#btnTangDan").onclick = soTangDan;

// 8. Tìm số nguyên tố đầu tiên
function kiemTraSoNguyenTo(soNguyen) {
    var dem = 0;
    for (var i = 0; i <= soNguyen; i++) {
        if (soNguyen % i === 0) {
            dem++;
        }
    }
    if (dem === 2) {
        return true;
    } else {
        return false;
    }
}

function soNguyenToDau() {
    // debugger;
    for (var i = 0; i < numArray.length; i++) {
        var ktSNT = kiemTraSoNguyenTo(numArray[i]);
        if (ktSNT) {
            document.querySelector("#btnSoNguyenToDau").innerHTML = numArray[i];
            break;
        }
    }
}

// 9. Đếm số nguyên trong mảng
function kiemTraSoNguyen() {
    var demsoNguyen = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (Number.isInteger(numArray[i])) {
            demsoNguyen++
        }
    }
    document.querySelector("#btnSoNguyen").innerHTML = "Trong mảng có " + demsoNguyen + " số nguyên";

}
document.querySelector("#btnSoNguyen").onclick = kiemTraSoNguyen;

// 10. So sánh số âm và số dương
function soSanhSo() {
    var demSoDuong = 0;
    var demSoAm = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            Number.isInteger(demSoDuong++);
        } else if (numArray[i] < 0) {
            Number.isInteger(demSoAm++);
        }
    }
    if (demSoDuong > demSoAm) {
        document.querySelector("#btnDemSoNguyen").innerHTML = "Số dương > số âm";
    } else if (demSoAm > demSoDuong) {
        document.querySelector("#btnDemSoNguyen").innerHTML = "Số dương < số âm";
    } else {
        document.querySelector("#btnDemSoNguyen").innerHTML = "Số dương = số âm";
    }
}
document.querySelector("#btnDemSoNguyen").onclick = soSanhSo;