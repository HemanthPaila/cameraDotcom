// function to update amount in camera.ejs

function updateamount() {
  var x = document.querySelector("#fun-range").value;
  document.querySelector("div .amount").innerHTML = "₹" + x * 25;
  document.querySelector(".pics-count").innerHTML = x;
}
