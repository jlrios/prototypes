
const tooltip = document.getElementById("tooltip");
  const svg = document.querySelector("svg");

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
  
