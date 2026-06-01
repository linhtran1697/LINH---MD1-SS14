// Tạo một đối tượng original với các thuộc tính sau:
// name: "Bob"
// age: 30
// Yêu cầu:
// Sao chép đối tượng này thành một đối tượng mới copy.
// Thay đổi giá trị thuộc tính name của copy thành "Charlie".
// In cả hai đối tượng ra màn hình và kiểm tra sự khác biệt

const original = {
    name: "Bob",
    age: 30
};

const copy = { ...original };
copy.name = "Charlie";
console.log(original);
console.log(copy); 

 