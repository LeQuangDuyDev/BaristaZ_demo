import fs from "fs";
import path from "path";

// Thư mục hiện tại chứa rename.js
const folderPath = process.cwd();

// Lấy danh sách ảnh
const files = fs.readdirSync(folderPath).filter(file => {
    return /\.(jpg|jpeg|png|webp)$/i.test(file);
});

// Sắp xếp tên file
files.sort((a, b) =>
    a.localeCompare(b, undefined, { numeric: true })
);

// Đổi tên ảnh
files.forEach((file, index) => {
    const oldPath = path.join(folderPath, file);
    const newPath = path.join(folderPath, `setup-${index + 1}.jpeg`);

    fs.renameSync(oldPath, newPath);

    console.log(`${file} => setup-${index + 1}.jpeg`);
});

console.log(`Hoàn thành! Đã đổi tên ${files.length} ảnh.`);