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
  const svg = document.querySelector("svg");

    initSVG(svg);
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
function initSVG(svg) {
const tooltip = document.getElementById("tooltip");

  console.log("svg -> " + svg);

  function showTooltip(sector) {
    const rect = sector.getBoundingClientRect();

    console.log(rect);

    // Posición fija (arriba del sector)
    const tooltipX = rect.left + rect.width / 2;
    const tooltipY = rect.top - 10;

    tooltip.style.left = `${tooltipX}px`;
    tooltip.style.top = `${tooltipY}px`;
    tooltip.style.transform = "translate(-50%, -100%)";

    tooltip.classList.remove("hidden");
  }

  function hideTooltip() {
    tooltip.classList.add("hidden");
  }

  svg.addEventListener("mouseover", (e) => {
    const sector = e.target.closest(".sector");
    if (!sector) return;
    showTooltip(sector);
  });

  svg.addEventListener("mouseout", (e) => {
    const sector = e.target.closest(".sector");
    if (!sector) return;
    hideTooltip();
  });
}  
