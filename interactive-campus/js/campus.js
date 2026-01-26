/*function showFloor(n) {
    const isFl = n === 1;
    console.log("isFl: " + n);
    floorHF1.classList.toggle("active", isFl);
    floorHF2.classList.toggle("active", !isFl);
    btnHF1.classList.toggle("active", isFl);
    btnHF2.classList.toggle("active", !isFl);
}*/

const floorHF1 = document.getElementById("buildingHF1");

async function loadSvgInto(el, url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to load ${url}`);
    el.innerHTML = await res.text();
}

(async function init() {
    await Promise.all([
        loadSvgInto(floorHF1, "./assets/maps/campus20/campus-test.svg"),
    ]);
})().catch(console.error);

//btnHF1.addEventListener("click", () => showFloor(1));
//btnHF2.addEventListener("click", () => showFloor(2));

/*document.querySelector(".wrap").addEventListener("click", (e) => {
  const classroom = e.target.closest(".classroom");
  if (!classroom) return;
  console.log("clicked:", classroom.dataset.index);
});*/

/*const sectors = document.querySelectorAll(".sector");

let lockedSector = null; // sector fijado por click

sectors.forEach(sector => {
  sector.addEventListener("click", (e) => {
    e.stopPropagation();

    console.log("Enter...");
    // Caso 1: click sobre el mismo sector → limpiar
    if (lockedSector === sector) {
      sector.classList.remove("active");
      lockedSector = null;
      return;
    }

    // Caso 2: click sobre otro sector → cambiar selección
    if (lockedSector) {
      lockedSector.classList.remove("active");
    }

    sector.classList.add("active");
    lockedSector = sector;

    console.log("Sector fijo:", sector.dataset.sector);
  });
});

// Click fuera de cualquier sector → limpiar selección
document.addEventListener("click", () => {
  if (!lockedSector) return;

  lockedSector.classList.remove("active");
  lockedSector = null;
});*/
