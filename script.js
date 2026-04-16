const diseases = [
  "Influensa",
  "Tuberkulose",
  "Fotsopp",
  "Malaria",
  "Covid-19",
  "Spedalskhet",
  "Klamydia",
  "Ringorm",
  "Meslinger",
  "HIV/AIDS",
  "Giardiasis",
  "Borreliose",
  "Skabb",
  "Candida (trøske)"
];

const pool = document.getElementById("pool-items");
const boxes = document.querySelectorAll(".items[data-target]");

// lag klikkbart element
function createItem(name) {
  const div = document.createElement("div");
  div.className = "item";
  div.textContent = name;

  div.addEventListener("click", () => {
    const target = prompt(
      "Plasser sykdommen i:\n1 = Bakterier\n2 = Virus\n3 = Sopp\n4 = Parasitter\n\n(Avbryt for å flytte tilbake)"
    );

    const map = {
      "1": "bakterier",
      "2": "virus",
      "3": "sopp",
      "4": "parasitter"
    };

    if (map[target]) {
      document.querySelector(`[data-target="${map[target]}"]`).appendChild(div);
    } else {
      pool.appendChild(div);
    }
  });

  return div;
}

// legg sykdommer i startboksen
diseases.forEach(d => pool.appendChild(createItem(d)));
