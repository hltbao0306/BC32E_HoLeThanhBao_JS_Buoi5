//----------Bài tập 1----------
document.getElementById('btnKetQua').onclick = function(e){
    e.preventDefault();
    
    diemTong = ketQua('diemChuan', 'chonKhuVuc', 'chonDoiTuong', 'diemMon1', 'diemMon2', 'diemMon3');
    
    //In ra màn hình giao diện
    // document.getElementById('ketQua').innerHTML = ketQua + diemTong;
}

function ketQua(id1,id2,id3,id4,id5,id6){//input: id của 6 thẻ nào đó
    var value1 = Number(document.getElementById(id1).value);
    var value2 = document.getElementById(id2).value;
    var value3 = Number(document.getElementById(id3).value);
    var value4 = Number(document.getElementById(id4).value);
    var value5 = Number(document.getElementById(id5).value);
    var value6 = Number(document.getElementById(id6).value);    
    //output: ketQua: string
    var ketQua = "";
    var diemTong = 0;

    diemTong = Number(value4) + Number(value5) + Number(value6) + diemKhuVuc(value2) + diemDoiTuong(value3);
    
    if(value4 == 0 || value5 == 0 || value6 == 0){
        ketQua = 'Không đủ điều kiện vì có một môn bị 0đ.';
    } else if (diemTong >= value1){
        ketQua = 'Chúc mừng bạn đã trúng tuyển.';
    }else{
        ketQua = 'Bạn đã trượt. Xin chia buồn bạn !';
    }
    document.getElementById('ketQua').innerHTML ='👉' + ketQua + ' Tổng điểm: ' + diemTong + 'đ';
}       

function diemKhuVuc(value){
    var khuVuc = 0;
    if (value == "A") {
        khuVuc = 2;
    } else if (value == "B"){
        khuVuc = 1;
    }else if (value == "C"){
        khuVuc = 0.5;
    }else{
        alert("Bạn chưa chọn khu vực ưu tiên");
    }
    return khuVuc;
}
        
function diemDoiTuong(value){
    var doiTuong = 0;
    if (value == "1") {
        doiTuong = 2.5;
    } else if (value == "2") {
        doiTuong = 1.5;
    } else if (value == "3"){
        doiTuong = 1;
    } else {
        alert("Bạn chưa chọn đối tượng ưu tiên");
    }
    return doiTuong;
}

//----------Bài tập 2----------
document.getElementById('btnKetQua_b2').onclick = function(e){
    e.preventDefault();
    var tongTien = 0;

    tongTien = tinhTienDien('hoTen', 'soKW');
}

const gia50kw1 = 500; // 50kw
const gia50kw2 = 650; // 100kw
const gia100kw = 850; // 200kw
const gia150kw = 1100;// 350kw
const giahon350kw = 1300;// >350kw

function tinhTienDien(id_1, id_2){
    var hoTen = document.getElementById(id_1).value;
    var soKW = Number(document.getElementById(id_2).value);
    var ketQua_b2 = "";

    if(0 < soKW && soKW <= 50){
        tongTien = soKW * gia50kw1;
    }
    else if(50 < soKW && soKW <= 100){
        tongTien = 50 * gia50kw1 + (soKW-50)*gia50kw2;
    }
    else if(100 < soKW && soKW <= 200){
        tongTien = 50 * gia50kw1 + 50 * gia50kw2 + (soKW-100)*gia100kw;
    }
    else if(200 < soKW && soKW <= 350){
        tongTien = 50 * gia50kw1 + 50 * gia50kw2 + 100 * gia100kw + (soKW-200)*gia150kw;
    }
    else if(350 < soKW){
        tongTien = 50 * gia50kw1 + 50 * gia50kw2 + 100 * gia100kw + 150 * gia150kw + (soKW-350)*giahon350kw;
    }
    else{
        ketQua_b2 = 'KW không hợp lệ !';
        tongTien = 0;
    }
    document.getElementById('ketQua_b2').innerHTML = '👉' + 'Họ tên khách hàng: ' + hoTen + ' - Số KW: ' + soKW + 'KW ' + ' - Giá tiền điện: ' + tongTien.toLocaleString() + 'VNĐ';
}