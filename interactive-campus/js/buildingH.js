const btnHF1 = document.getElementById("btnHF1");
const btnHF2 = document.getElementById("btnHF2");
const buildingHF1 = document.getElementById("buildingHF1");
const buildingHF2 = document.getElementById("buildingHF2");

function showFloor(n) {
    const isF1 = n === 1;
    buildingHF1.classList.toggle("active", isF1);
    buildingHF2.classList.toggle("active", !isF1);
    btnHF1.classList.toggle("active", isF1);
    btnHF2.classList.toggle("active", !isF1);
}

btnHF1.addEventListener("click", () => showFloor(1));
btnHF2.addEventListener("click", () => showFloor(2));


 /* const svg = document.querySelector("svg");
  let selectedClassroom = null;

console.log(svg)

  svg.addEventListener("click", (e) => {
    const classroom = e.target.closest(".classroom");

    // click fuera → limpia selección
    if (!classroom) {
      if (selectedClassroom) {
        selectedClassroom.classList.remove("selected");
        selectedClassroom = null;
      }
      return;
    }

    // misma aula → no hacer nada
    if (classroom === selectedClassroom) return;

    // quitar selección previa
    if (selectedClassroom) {
      selectedClassroom.classList.remove("selected");
    }

    // seleccionar
    classroom.classList.add("selected");
    selectedClassroom = classroom;

    console.log("Selected classroom:", classroom.dataset.room);
  });*/
