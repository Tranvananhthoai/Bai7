function tinhLaiKep (vonGoc, laiSuat = 0.05, soNam = 1) {
    return vonGoc * Math.pow (1+ laiSuat, soNam);
}
console.log(tinhLaiKep(1000, 0.05, 3).toFixed(3));
const tinhLaiKeparrow = (vonGoc, laiSuat = 0.05, soNam = 1) => vonGoc * Math.pow (1+ laiSuat, soNam);
console.log(tinhLaiKeparrow(1000, 0.05, 3).toFixed(3));