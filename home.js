function alert_name() {
  //Create a variable
  var name = "Jessica";
  alert("My name is " + name);
  console.log("Test 123");
}

function change_image() {
  var image = document.getElementById("duck");
  image.src = "images/rubberduck.jpg";
}

function bigImg(x) {
  x.style.height = "150px";
  x.style.width = "150px";
}

function normalImg(x) {
  x.style.height = "100px";
  x.style.width = "100px";
}
