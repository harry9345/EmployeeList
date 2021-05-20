var firstName = document.getElementById("name");
var familyName = document.getElementById("familyName");
var add = document.getElementById("add");
var fName = document.getElementById("fName");
var fmName = document.getElementById("fmName");
var ulList = document.getElementById("list");

add.addEventListener("click", function () {
  if (firstName.value !== "" || familyName.value == !"") {
    var li = document.createElement("li");
    var div = document.createElement("div");
    var removeBtn = document.createElement("button");
    removeBtn.innerHTML = "-";
    div.innerHTML += firstName.value + " " + familyName.value;
    firstName.value = "";
    familyName.value = "";
    div.appendChild(removeBtn);
    removeBtn.setAttribute("onclick", "removeFromList(this)");
    li.appendChild(div);
    li.setAttribute("id", "harchi");
    ulList.appendChild(li);
  } else {
    fName.innerText = "please enter your name";
    fmName.innerText = "please enter your family name";
    setTimeout(() => {
      fName.innerText = "";
      fmName.innerText = "";
    }, 3000);
  }
});

function removeFromList(e) {
  e.parentElement.remove();
}
function addClass() {
  familyName.classList.add("familyName");
  firstName.classList.add("Fname");
  add.classList.add("add");
}
