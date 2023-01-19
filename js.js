let button = document.getElementById("hamburg");
let sidebar = document.getElementById("sandwich");
var button_icon_state = 0;

button.addEventListener(`click`, () => {
  sidebar.style.width = "15vw";
})

button.addEventListener(`click`, () => {
  if (button_icon_state == 0) {
    button.style.rotate = "-180deg";
    button_icon_state = 1;
    sidebar.style.width = "15vw";
  }
  else {
    button.style.rotate = "0deg";
    button_icon_state = 0;
    button.style.marginLeft = "0%";
    sidebar.style.width = "0vw";
  }
})