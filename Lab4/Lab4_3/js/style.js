document.addEventListener("DOMContentLoaded", function () {
  // Mảng các lời chào ngẫu nhiên
  var greetings = [
    "Chào bạn!",
    "Xin chào!",
    "Hi there!",
    "Hola!",
    "Bonjour!",
    "こんにちは!",
    "안녕하세요!",
    "Ciao!",
    "Привет!",
    "Hallo!"
  ];

  // Chọn một lời chào ngẫu nhiên từ mảng
  var randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Hiển thị lời chào ngẫu nhiên trong phần tử có id="greeting-message"
  document.getElementById("greeting-message").textContent = randomGreeting;
});
