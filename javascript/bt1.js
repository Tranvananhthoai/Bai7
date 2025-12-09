// 1. Hàm declaration - Tính thể tích hình hộp (Có kiểm tra nhập lại thông số)
function tinhTheTichHinhHop(chieuDai, chieuRong, chieuCao) {
    // Kiểm tra đầu vào, yêu cầu nhập lại nếu giá trị không hợp lệ
    if (isNaN(chieuDai) || isNaN(chieuRong) || isNaN(chieuCao) || chieuDai <= 0 || chieuRong <= 0 || chieuCao <= 0) {
        console.log("Vui lòng nhập lại các giá trị hợp lệ (số dương và là số).");
        return;
    }
    return chieuDai * chieuRong * chieuCao;
}

// 2. Nhập thông tin chiều dài, chiều rộng, chiều cao từ người dùng và tính thể tích
let chieuDai = parseFloat(prompt("Nhập chiều dài:"));
let chieuRong = parseFloat(prompt("Nhập chiều rộng:"));
let chieuCao = parseFloat(prompt("Nhập chiều cao:"));

// Kiểm tra thể tích khi nhập thông số
let theTich = tinhTheTichHinhHop(chieuDai, chieuRong, chieuCao);
if (theTich) {
    console.log(`Thể tích hình hộp là: ${theTich}`);
}

// 3. Viết lại hàm dưới dạng arrow function (gọn nhất có thể)
const tinhTheTichHinhHopArrow = (chieuDai, chieuRong, chieuCao) => 
    (isNaN(chieuDai) || isNaN(chieuRong) || isNaN(chieuCao) || chieuDai <= 0 || chieuRong <= 0 || chieuCao <= 0) 
    ? "Vui lòng nhập lại các giá trị hợp lệ (số dương và là số)." 
    : chieuDai * chieuRong * chieuCao;

// Kiểm tra với arrow function
try {
    let theTichArrow = tinhTheTichHinhHopArrow(chieuDai, chieuRong, chieuCao);
    if (theTichArrow) {
        console.log(`Thể tích tính bằng arrow function là: ${theTichArrow}`);
    }
} catch (e) {
    console.log("Lỗi với arrow function: " + e.message);  // Nếu gặp lỗi hoisting khi gọi trước khai báo
}
