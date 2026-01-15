const btnHF1 = document.getElementById("btnHF1");
const btnHF2 = document.getElementById("btnHF2");

const floorHF1 = document.getElementById("buildingHF1");
const floorHF2 = document.getElementById("buildingHF2");

function showFloor(n) {
    const isF1 = n === 1;
    floorHF1.classList.toggle("active", isF1);
    floorHF2.classList.toggle("active", !isF1);
    btnHF1.classList.toggle("active", isF1);
    btnHF2.classList.toggle("active", !isF1);
}

async function loadSvgInto(el, url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to load ${url}`);
    el.innerHTML = await res.text();
}

(async function init() {
    await Promise.all([
        loadSvgInto(floorHF1, "./assets/maps/sectorH/BuildingHF1.svg"),
        loadSvgInto(floorHF2, "./assets/maps/sectorH/BuildingHF2.svg"),
    ]);
})().catch(console.error);

btnHF1.addEventListener("click", () => showFloor(1));
btnHF2.addEventListener("click", () => showFloor(2));

/*document.querySelector(".mapWrap").addEventListener("click", (e) => {
  const classroom = e.target.closest(".classroom");
  if (!classroom) return;
  console.log("clicked:", classroom.dataset.index);
});*/

const mapWrap = document.querySelector(".mapWrap");
let selectedClassroom = null;

mapWrap.addEventListener("click", (e) => {
  const classroom = e.target.closest(".classroom");

  // click fuera: limpiar selección
  if (!classroom) {
    if (selectedClassroom) {
      selectedClassroom.classList.remove("selected");
      selectedClassroom = null;
    }
    return;
  }

  // misma aula: no hagas nada
  if (classroom === selectedClassroom) return;

  // quitar selección anterior
  if (selectedClassroom) selectedClassroom.classList.remove("selected");

  // seleccionar nueva
  classroom.classList.add("selected");
  selectedClassroom = classroom;

  console.log("clicked:", classroom.dataset.index);
});
