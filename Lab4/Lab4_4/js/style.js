function countOccurrences() {
  // Lấy giá trị từ textarea và textfield
  var textA = document.getElementById("textArea").value;
  var textB = document.getElementById("textField").value;

  // Sử dụng biểu thức chính quy để đếm số lần xuất hiện của B trong A
  var occurrences = (textA.match(new RegExp(textB, "g")) || []).length;

  // Hiển thị kết quả trên trang web
  document.getElementById("result").textContent = "Số lần xuất hiện của '" + textB + "' trong '" + textA + "': " + occurrences;
}
