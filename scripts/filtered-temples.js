// ==========================
// Temple Data
// ==========================
const temples = [
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, USA",
    dedicated: "1893-04-06",
    area: 382207,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-40080.jpg"
  },
  {
    templeName: "Manti Utah Temple",
    location: "Manti, Utah, USA",
    dedicated: "1888-05-21",
    area: 74792,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-40156.jpg"
  },
  {
    templeName: "Nauvoo Illinois Temple",
    location: "Nauvoo, Illinois, USA",
    dedicated: "2002-06-27",
    area: 57000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/nauvoo-illinois-temple/nauvoo-illinois-temple-39163.jpg"
  },
  {
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019-03-10",
    area: 41010,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-46918.jpg"
  },
  {
    templeName: "Provo City Center Temple",
    location: "Provo, Utah, USA",
    dedicated: "2016-03-20",
    area: 85084,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/provo-city-center-temple/provo-city-center-temple-39718.jpg"
  },
  {
    templeName: "Kirtland Temple",
    location: "Kirtland, Ohio, USA",
    dedicated: "1836-03-27",
    area: 16000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/kirtland-temple/kirtland-temple-45100.jpg"
  },
  {
    templeName: "Laie Hawaii Temple",
    location: "Laie, Hawaii, USA",
    dedicated: "1919-11-27",
    area: 42000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple/laie-hawaii-temple-45053.jpg"
  },
  {
    templeName: "Accra Ghana Temple",
    location: "Accra, Ghana",
    dedicated: "2004-01-11",
    area: 17500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-2529.jpg"
  },
  {
    templeName: "Auckland New Zealand Temple",
    location: "Auckland, New Zealand",
    dedicated: "2024-11-17",
    area: 38000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/auckland-new-zealand-temple/auckland-new-zealand-temple-53465.jpg"
  },
  {
    templeName: "São Paulo Brazil Temple",
    location: "São Paulo, Brazil",
    dedicated: "1978-10-30",
    area: 59246,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/sao-paulo-brazil-temple/sao-paulo-brazil-temple-39728.jpg"
  }
];

// ==========================
// Render Function
// ==========================
const templeCards = document.getElementById("temple-cards");

function displayTemples(filteredTemples) {
  templeCards.innerHTML = "";
  filteredTemples.forEach(temple => {
    const card = document.createElement("div");
    card.classList.add("temple-card");

    card.innerHTML = `
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      <h3>${temple.templeName}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
    `;

    templeCards.appendChild(card);
  });
}

// ==========================
// Filter Buttons
// ==========================
document.getElementById("home").addEventListener("click", () => displayTemples(temples));
document.getElementById("old").addEventListener("click", () =>
  displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900))
);
document.getElementById("new").addEventListener("click", () =>
  displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000))
);
document.getElementById("large").addEventListener("click", () =>
  displayTemples(temples.filter(t => t.area > 90000))
);
document.getElementById("small").addEventListener("click", () =>
  displayTemples(temples.filter(t => t.area < 10000))
);

// ==========================
// Footer Info
// ==========================
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastmodified").textContent = document.lastModified;

// ==========================
// Initial Display
// ==========================
displayTemples(temples);
