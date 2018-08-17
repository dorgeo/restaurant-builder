var shouldMenuShow=true
document.getElementById("resources").addEventListener("click", displayMenu);


function displayMenu() {
if(shouldMenuShow) {
  document.getElementById("menu").style.display = "block";
  shouldMenuShow=false
} else {
  document.getElementById("menu").style.display = "none";
  shouldMenuShow=true
}

}
