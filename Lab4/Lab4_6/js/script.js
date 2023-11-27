// function validateForm() {
//   var name = document.getElementById("name").value;
//   var email = document.getElementById("email").value;
//   var password = document.getElementById("password").value;
//
//   var isValid = true;
//   var errorMessage = "";
//
//   // Kiểm tra dữ liệu nhập liệu
//   if (name.trim() === "") {
//     errorMessage += "Name is required.<br>";
//     isValid = false;
//   }
//
//   if (email.trim() === "") {
//     errorMessage += "Email is required.<br>";
//     isValid = false;
//   } else if (!isValidEmail(email)) {
//     errorMessage += "Invalid email format.<br>";
//     isValid = false;
//   }
//
//   if (password.trim() === "") {
//     errorMessage += "Password is required.<br>";
//     isValid = false;
//   }
//
//   // Hiển thị thông báo và thay đổi giao diện nếu dữ liệu không hợp lệ
//   if (!isValid) {
//     document.getElementById("error-message").innerHTML = errorMessage;
//   } else {
//     document.getElementById("error-message").innerHTML = "";
//   }
// }
//
// // Hàm kiểm tra định dạng email
// function isValidEmail(email) {
//   var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailRegex.test(email);
// }


let useraccounts = [];
useraccounts.push({username: "123@gmail.com", password: "123"});

const elementUsername = document.getElementById("username");
const elementPassword = document.getElementById("password");
const elementThongBao = document.getElementById("thong-bao");


function checkLogin() {
  var username = elementUsername.value;
  var password = elementPassword.value;

  var isValid = true;
  var errorMessage = "";

  if (username.trim() === "") {
    // errorMessage += "Email is required.<br>";
    elementUsername.classList.add("red-placeholder");
    elementUsername.placeholder = "Chưa điền username";
    isValid = false;
  } else if (!isValidEmail(username)) {
    // errorMessage += "Invalid email format.<br>";
    elementUsername.classList.add("red-placeholder");
    elementUsername.placeholder = "Đây không phải email";
    isValid = false;
  }
  if (password.trim() === "") {
    // errorMessage += "Password is required.<br>";
    elementPassword.classList.add("red-placeholder");
    elementPassword.placeholder= "Chưa điền mật khẩu";
    isValid = false;
  }


  elementUsername.value = "";
  elementPassword.value = "";
}

function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
console.log(elementThongBao.textContent)
