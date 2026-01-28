// Dropdown menu
const optionMenu = document.querySelector(".select-menu");
const selectBtn = optionMenu.querySelector(".select-btn");
const options = optionMenu.querySelectorAll(".option");
const selBtnText = optionMenu.querySelector("sel-btn-text");

selectBtn.addEventListener("click", () => {
  optionMenu.classList.toggle("active");  
});

options.forEach(option => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-text").innerText;
    selBtnText.innerText =selectedOption;
    console.log(selectedOption);
  });
});