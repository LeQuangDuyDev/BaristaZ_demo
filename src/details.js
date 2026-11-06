// ===== NỘI DUNG CHI TIẾT CHO POPUP (sửa tại đây) =====
// Thứ tự phải khớp với danh sách trong data.js (khóa học: 9 mục, giảng viên: 4 mục).
// Đây là nội dung mẫu, hãy thay bằng thông tin thật của trung tâm.

// Quyền lợi chung cho mọi khóa học
export const PERKS=['Mỗi học viên một bộ dụng cụ riêng','Thực hành khoảng 80% thời lượng','Cấp chứng nhận sau khi hoàn thành','Hỗ trợ giới thiệu việc làm, tư vấn mở quán']

export const COURSE_DETAIL=[
// 0 Cà phê cơ bản
{who:'Người mới bắt đầu, muốn làm barista hoặc mở quán cà phê nhỏ.',goals:['Pha chuẩn espresso, phin và các món cà phê phổ biến','Vận hành máy pha và máy xay đúng cách','Tự tin phục vụ quầy bar giờ cao điểm'],lessons:['Kiến thức hạt cà phê và cách bảo quản','Xay, nén, chiết xuất espresso','Đánh sữa cơ bản','Các món cà phê máy: americano, latte, cappuccino','Cà phê phin, cà phê muối, bạc xỉu','Vệ sinh máy móc, quy trình quầy bar']},
// 1 Cà phê chuyên sâu
{who:'Học viên đã có nền tảng, muốn nâng tay nghề và làm specialty.',goals:['Phân biệt giống, vùng trồng và mức rang','Tinh chỉnh độ xay, tỷ lệ, thời gian để ra vị chuẩn','Pha pour over, cold brew và các phương pháp thủ công'],lessons:['Quy trình từ hạt xanh đến ly cà phê','Rang xay và nhận biết hương vị (cupping)','Tinh chỉnh espresso nâng cao','Pour over, AeroPress, cold brew','Xây dựng menu cà phê specialty']},
// 2 Latte Art
{who:'Barista muốn tạo điểm nhấn cho ly cà phê, người yêu thích nghệ thuật trên bọt sữa.',goals:['Đánh sữa mịn, đúng nhiệt độ','Vẽ tim, lá, tulip, thiên nga','Rót hình ổn định, đều tay'],lessons:['Kỹ thuật đánh sữa microfoam','Cách cầm bình và điều khiển dòng rót','Tim, lá, tulip','Thiên nga và hình nâng cao','Etching và vẽ trang trí']},
// 3 Barista quốc tế
{who:'Người muốn làm việc chuyên nghiệp, lấy chứng chỉ và làm việc ở môi trường quốc tế.',goals:['Nắm chương trình barista theo chuẩn quốc tế','Chuẩn bị và dự thi chứng chỉ','Sẵn sàng ứng tuyển tại quán và chuỗi lớn'],lessons:['Lý thuyết cà phê và cảm quan chuyên sâu','Kỹ thuật espresso, sữa và latte art nâng cao','Pha chế signature','Vận hành quầy bar chuyên nghiệp','Ôn luyện và thi chứng chỉ']},
// 4 Pha chế hiện đại cơ bản
{who:'Người mới học pha chế, muốn làm các thức uống đang được ưa chuộng.',goals:['Pha soda, smoothie, trà trái cây đúng công thức','Hiểu tỷ lệ vị, độ ngọt, độ chua','Tạo một vài signature đơn giản cho quán'],lessons:['Dụng cụ và nguyên liệu pha chế','Soda và nước ép trái cây','Smoothie, đá xay','Trà trái cây','Trình bày ly và topping']},
// 5 Pha chế hiện đại chuyên sâu
{who:'Học viên đã biết pha chế cơ bản, muốn sáng tạo công thức và xây menu.',goals:['Sáng tạo công thức signature riêng','Pha mocktail, layering đẹp mắt','Xây dựng và tính giá menu cho quán'],lessons:['Nguyên lý cân bằng hương vị','Mocktail và layering','Kỹ thuật shake, stir, muddle','Xây dựng menu và tính giá vốn','Trình bày, chụp ảnh sản phẩm']},
// 6 Trà sữa cơ bản
{who:'Người muốn bán trà sữa hoặc mở quán nhỏ với vốn vừa phải.',goals:['Nấu trà, làm trân châu đúng độ dai','Pha các vị trà sữa bán chạy','Làm kem cheese và topping'],lessons:['Nấu và ủ các loại trà nền','Trân châu, pudding, thạch','Kem cheese, kem muối','Công thức trà sữa bán chạy','Tính giá vốn và cách bán hàng']},
// 7 Bánh lạnh
{who:'Người thích làm bánh nhưng không có lò nướng, muốn bán bánh tại quán.',goals:['Làm tiramisu, mousse, panna cotta, cheesecake lạnh','Tạo hình, trang trí bánh đẹp','Bảo quản và bán bánh đúng cách'],lessons:['Nguyên liệu và dụng cụ làm bánh lạnh','Tiramisu','Mousse và panna cotta','Cheesecake lạnh','Trang trí và bảo quản']},
// 8 Matcha
{who:'Người yêu matcha, muốn đưa các món matcha vào menu.',goals:['Pha matcha chuẩn vị Nhật','Làm matcha latte, đá xay và món nóng','Phân biệt các loại bột matcha'],lessons:['Các loại matcha và cách chọn','Đánh matcha truyền thống','Matcha latte và các món đá xay','Món matcha kết hợp trái cây, kem','Gợi ý menu matcha cho quán']}
]

// Chi tiết giảng viên: courses = số thứ tự khóa học (bắt đầu từ 0) mà giảng viên phụ trách
export const TEAM_DETAIL=[
{exp:'10+ năm',bio:'Phụ trách bộ môn Cà phê, xây dựng giáo trình từ cơ bản đến chuyên sâu. Từng đạt giải barista toàn quốc.',points:['Hơn 10 năm làm việc và vận hành quán','Đào tạo nhiều thế hệ barista','Chuyên về espresso và cà phê specialty'],courses:[0,1,3],quote:'Một ly cà phê ngon bắt đầu từ sự tỉ mỉ.'},
{exp:'Nhiều năm',bio:'Chuyên gia nghệ thuật trên bọt sữa, đã huấn luyện nhiều lớp học viên vẽ latte art.',points:['Chuyên đánh sữa và latte art','Hướng dẫn kèm từng học viên','Nhiều năm huấn luyện thi đấu'],courses:[2],quote:'Tay đều, sữa mịn, hình tự nhiên sẽ đẹp.'},
{exp:'Nhiều năm',bio:'Bartender sáng tạo signature drink cho nhiều chuỗi, chuyên pha chế hiện đại và trà sữa.',points:['Sáng tạo công thức signature cho nhiều chuỗi','Tư vấn xây dựng menu và tính giá vốn','Chuyên về mocktail và trà sữa'],courses:[4,5,6],quote:'Công thức tốt phải bán được và làm được đều tay.'},
{exp:'Nhiều năm',bio:'Pastry chef chuyên bánh lạnh và đồ uống matcha, hướng dẫn chi tiết cho người mới.',points:['Chuyên bánh lạnh không cần lò nướng','Am hiểu các loại matcha','Hướng dẫn tận tình từng bước'],courses:[7,8],quote:'Bánh đẹp là bánh làm đúng từng bước nhỏ.'}
]
