// Thêm sách mới
//   Nhập ID, Tên sách, Tác giả, Năm xuất bản.
//   Thêm sách vào danh sách.
// Hiển thị danh sách sách
//   Duyệt qua danh sách và in thông tin của từng sách ra màn hình.
// Tìm kiếm sách theo tên
//   Nhập từ khóa tìm kiếm.
//   Tìm và hiển thị sách có tên chứa từ khóa đó (không phân biệt hoa thường).
//   Nếu không tìm thấy, thông báo cho người dùng.
// Xóa sách theo ID
//   Nhập ID của sách cần xóa.
//   Nếu sách tồn tại, xóa khỏi danh sách.
//   Nếu sách không tồn tại, thông báo lỗi.
// Thoát chương trình
//   Dừng chương trình khi người dùng chọn thoát.

let bookList = [
    {
        id: 301,
        name: "Tôi thấy hoa vàng trên cỏ xanh",
        author: "Nguyễn Nhật Ánh",
        year: 2020,
    },
      {
        id: 302,
        name: "Đắc Nhân tâm",
        author: "Dale Carnegie",
        year: 1936,
    },
      {
        id: 303,
        name: "Khí chất bao nhiêu hạnh phúc bấy nhiêu",
        author: "Vãn Tình",
        year: 2021,
    },
];
console.log("=== QUẢN LÝ SÁCH ===");
console.log("1. Thêm sách mới");
console.log("2. Hiển thị danh sách sách");
console.log("3. Tìm kiếm sách theo tên");
console.log("4. Xóa sách theo ID");
console.log("5. Thoát chương trình");
let userInput = prompt("Nhập lựa chọn của bạn");


if (userInput === "1") {
    let name = prompt("Please input new book name:");
    let author = prompt(`Please input author for new book ${name}:`);
    let year = prompt(`Please input year for new book ${name}:`);
    let id = prompt(`Please input id for new book ${name}:`);
    let contact = {
        id: Math.floor(Math.random ()*1000),
        name: name,
        author: author,
        year: year
    };
    bookList.push(contact);
    displayContact();
} else if (userInput === "2") {
    displayContact();
} else if (userInput === "3") {
    let keyword = prompt("Please input the keyword you want to search:");
    let index = bookList.findIndex(function(el) {
        return el.name.toLowerCase().includes(keyword.toLowerCase());
    });
    if (index !== -1) {
        console.log("Found book:");
        console.log("name:", bookList[index].name);
        console.log("author:", bookList[index].author);
        console.log("year:", bookList[index].year);
        console.log("id:", bookList[index].id);
    } else {
        console.log("Book not found.");
    }
} else if (userInput === "4") {
    let id = prompt("Please input the ID of the book you want to delete:");
    let index = bookList.findIndex(function(el) {
        return el.id === parseInt(id);
    });
    if (index !== -1) {
        bookList.splice(index, 1);
        console.log("Book deleted successfully.");
        displayContact();
    } else {
        console.log("Book not found.");
    }
} else if (userInput === "5") {
    console.log("Exiting program. Thank you!");
} else {
    console.log("Invalid input. Please try again.");
}

function displayContact () {
    console.log("Your book list:");
    for(let index in bookList) {
        console.log("name:", bookList[index].name);
        console.log("author:", bookList[index].author);
        console.log("year:", bookList[index].year);
        console.log("id:", bookList[index].id);
        console.log("-------------------------------");
    }
}