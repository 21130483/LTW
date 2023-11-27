function changeColor(event) {
  const clickedButton = event.target;
  // console.log('Button clicked:', clickedButton.textContent);
  document.body.style.backgroundColor = clickedButton.style.backgroundColor;
}
