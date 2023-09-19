const select_field = document.getElementById("select-field");
const select_text = document.getElementById("select-text");
const options = document.getElementsByClassName("options");
const list = document.getElementById("list");
const arrow_icon = document.getElementById("arrowIcon");

select_field.onclick = function () {
  list.classList.toggle("hide-list");
  arrow_icon.classList.toggle("rotate");
};

for (option of options) {
  option.onclick = function () {
    select_text.innerHTML = this.textContent;
    list.classList.toggle("hide-list");
    arrow_icon.classList.toggle("rotate");
  };
}
