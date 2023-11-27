document.addEventListener("DOMContentLoaded", function () {
  // Bắt đầu xoay hình ảnh mỗi 2 giây
  setInterval(function () {
    rotateImage();
  }, 2000);
});

function rotateImage() {
  var image = document.getElementById("rotating-image");
  var currentRotation = getRotationDegrees(image);
  var newRotation = currentRotation + 15;
  image.style.transform = "rotate(" + newRotation + "deg)";
}

// Hàm để lấy góc xoay hiện tại của hình ảnh
function getRotationDegrees(element) {
  var style = window.getComputedStyle(element);
  var matrix = new WebKitCSSMatrix(style.transform || style.webkitTransform);
  var angle = Math.acos(matrix.a);
  var degrees = angle * (180 / Math.PI);
  return degrees;
}
