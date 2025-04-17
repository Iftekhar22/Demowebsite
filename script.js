function learnMore() {
  window.location.href = "#features";
}

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks! We’ll get back to you soon.");
});
