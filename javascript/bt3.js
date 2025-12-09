 const nhapSinhVien = () => {
    const hoTen = prompt ("Nhập họ tên:");
    const tuoi = parseFloat(prompt ("Nhập tuổi:"), 10);
    const diaChi = prompt ("Nhập địa chỉ:");
    const sdt = prompt ("Nhập số điện thoại:");
     return {hoTen, tuoi, diaChi, sdt};
};
const xayDungChuoi = (sinhVien) => {
    return `Tên: ${sinhVien.hoTen}, Tuổi: ${sinhVien.tuoi}, Địa chỉ: ${sinhVien.diaChi}, Số điện thoại: ${sinhVien.sdt}`; 
};
const inDanhSachSV = (dsSinhVien) => {
    dsSinhVien.forEach (sinhVien =>{
         console.log(xayDungChuoi(sinhVien));
    });
};
const xapXepDanhSachSV = (dsSinhVien) => {
    return dsSinhVien.sort((a, b) => a.hoTen.localeCompare(b.hoTen));
};
const timSinhVienTheoSdt = (dsSinhvien, sdt) => {
    const sinhVien = dsSinhvien.find (sv => sv.sdt === sdt);
    return sinhVien ? sinhVien : "Không tìm thấy số điện thoại";
};
const timSinhVienTheoTuoi = (dsSinhvien, tuoi) => {
    const sinhVien = dsSinhvien.filter (sv => sv.tuoi === tuoi);
    return sinhVien.length > 0 ? sinhVien : "Không tìm thấy tuổi";
};
let dsSinhvien = [];
dsSinhvien.push(nhapSinhVien());
dsSinhvien.push(nhapSinhVien());
console.log("Danh sách sinh viên:");
inDanhSachSV(dsSinhvien);
let dsSinhvienstory = xapXepDanhSachSV(dsSinhvien);
console.log("Danh sách sau khi sắp xếp sinh viên theo tên:");
inDanhSachSV (dsSinhvienstory);
let sinhVienTimDuoc = timSinhVienTheoSdt(dsSinhvien, "0123456789");
console.log("Danh sách sinh viên được tìm theo số điện thoại 0123456789:");
console.log(sinhVienTimDuoc);
let sinhVienTimTheoTuoi = timSinhVienTheoTuoi(dsSinhvien, 18);
console.log("Danh sách tìm sinh viên theo tuổi 18:");
console.log(sinhVienTimTheoTuoi);


