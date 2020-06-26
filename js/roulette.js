//un array
var discover = [
  { Name: "Spiaggia Rosa", Url: "https://www.sardegnaturismo.it/it/esplora/spiaggia-rosa" },
  { Name: "Cala Sabina-Asinara", Url: "https://www.sardegnaturismo.it/it/esplora/cala-sabina-asinara" },
  { Name: "Pscinas - Costa Verde", Url: "https://www.sardegnaturismo.it/it/esplora/piscinas-costa-verde" },
  { Name: "Porto Zafferano", Url: "https://www.sardegnaturismo.it/it/esplora/porto-zafferano" },
  { Name: "Porto Tramatzu", Url: "https://www.https://www.sardegnaturismo.it/it/esplora/porto-tramatzu.it/" },
  { Name: "Cala Mutas", Url: "https://www.sardegnaturismo.it/it/esplora/cala-murtas" },
  { Name: "Oasi di Bidderosa", Url: "https://www.sardegnaturismo.it/it/esplora/oasi-di-bidderosa" },
  { Name: "Berchida", Url: "https://www.sardegnaturismo.it/it/esplora/berchida" },
  { Name: "Cala Liberotto", Url: "https://www.sardegnaturismo.it/it/esplora/cala-liberotto" },
  { Name: "Santa Maria", Url: "https://www.sardegnaturismo.it/it/esplora/santa-maria" },
  { Name: "Marina di Orosei", Url: "https://www.sardegnaturismo.it/it/esplora/marina-di-orosei" },
  { Name: "Tuttavista", Url: "https://www.sardegnaturismo.it/it/esplora/tuttavista" },
  { Name: "Cala e spiaggia di Osalla", Url: "https://www.sardegnaturismo.it/it/esplora/cala-e-spiaggia-di-osalla" },
  { Name: "Sos Dorroles", Url: "https://www.sardegnaturismo.it/it/esplora/sos-dorroles" },
  { Name: "Palmasera", Url: "https://www.sardegnaturismo.it/it/esplora/palmasera" },
  { Name: "Ziu Martine", Url: "https://www.sardegnaturismo.it/it/esplora/ziu-martine" },
  { Name: "Cala Fuili", Url: "https://www.sardegnaturismo.it/it/esplora/cala-fuili" },
  
];

const rouletteContainer = document.querySelector(".roulette-container");
const roulette = document.querySelector(".roulette");
const linkTo = document.querySelector(".link-to");
const spin = document.querySelector(".spin");
spin.addEventListener("click", () => {
  rouletteContainer.classList.remove("tada");
  const total = discover.length;
  const selected = Math.floor(Math.random() * total);
  for (let i = 0; i <= total; i++) {
    setTimeout(
      ((i) => {
        return () => {
          roulette.innerText = discover[i % total].Name;
          linkTo.href = discover[i % total].Url;
          if (i === selected) {
            roulette.classList.add("tada");
          }
        };
      })(i),
      i * 100
    );
    if (i === selected) {
      break;
    }
  }
});