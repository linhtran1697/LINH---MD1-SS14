// Viết một chương trình quản lý danh sách sinh viên với các chức năng cơ bản sau:

// 1. Thêm sinh viên mới
// - Nhập tên, tuổi, mã số sinh viên (ID).
// - Thêm sinh viên vào danh sách.
 
// 2. Hiển thị danh sách sinh viên
// - Duyệt qua danh sách và in thông tin của từng sinh viên ra màn hình.
 
// 3. Xóa sinh viên theo ID
// - Nhập ID của sinh viên cần xóa.
// - Nếu ID tồn tại, xóa sinh viên khỏi danh sách.
// - Nếu ID không tồn tại, thông báo lỗi.

let studentList = [
    {
        id : 1,
        name : "Tran Van A",
        age : 20,
    },
    {
        id : 2,
        name : "Tran Van B",
        age : 21,
    },
    {
        id : 3,
        name : "Tran Van C",
        age : 22,
    },
];
let userInput = prompt("Please input A/L/D for your resquest: A for add, L for list, D for delete");
 if (userInput === "A") {
    let name = prompt("Please input new student name:");
    let age = prompt(`Please input age for new student ${name}:`);
    let id = prompt(`Please input id for new student ${name}:`);
    let contact = {
        id: Math.floor(Math.random ()*100),
        name: name,
        age: age,
    };
    studentList.push(contact);
    displayContact();
} else if (userInput === "L") {
    displayContact();
} else if (userInput === "D") {
    let id = prompt("Please input the ID of the student you want to delete");
    let index = studentList.findIndex(function(el, i) {
        return el.id === parseInt(id);
    });
    if (index === -1) {
        console.log ("Student not found");
    }else {
        studentList.splice(index,1);
        displayContact();
    }
} else {
    console.log("Invalid input. Please enter A, L, or D.");
 }

 function displayContact () {
    console.log("Your student list:");
    for(let index in studentList) {
        console.log("name:", studentList[index].name);
        console.log("age:", studentList[index].age);
        console.log("id:", studentList[index].id);
        console.log("-----------------------------");
 }
}