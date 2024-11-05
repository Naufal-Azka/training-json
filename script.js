

// Fungsi untuk menampilkan data
// function displayShips(ships) {
//     const container = document.getElementById('ship-container');
    
//     ships.forEach(ship => {
//         // Membuat elemen untuk menampilkan data setiap kapal
//         const shipElement = document.createElement('div');
//         shipElement.classList.add('ship');

//         shipElement.innerHTML = `
//             <img src="${ship.image.potrait}">
//             <h2>${ship.name} (${ship.nationality})</h2>
//             <p><strong>Rarity:</strong> ${ship.rarity}</p>
//             <p><strong>Type:</strong> ${ship.type}</p>
//             <p><strong>Armor:</strong> ${ship.armor}</p>
//             <h3>Base Stats</h3>
//             <p>Health: ${ship.stat.base.health}</p>
//             <p>Firepower: ${ship.stat.base.firepower}</p>
//             <p>Torpedo: ${ship.stat.base.torpedo}</p>
//             <p>Aviation: ${ship.stat.base.aviation}</p>
//             <p>Anti Air: ${ship.stat.base.anti_air}</p>
//             <p>Evasion: ${ship.stat.base.evasion}</p>
//             <p>Slot 1: ${ship.equipment.slot_1.efficiency}</p>
//         `;

//         container.appendChild(shipElement);
//     });
// }

// // Mengambil file JSON
// fetch('ship.json')
//     .then(response => response.json())
//     .then(data => {
//         displayShips(data);
//     })
//     .catch(error => console.error('Error:', error));





// // Urutan tipe berdasarkan prioritas
// const typeOrder = ["Battleship", "Aviation Battleship", "Aircraft Carrier", "Large Cruiser", "Heavy Cruiser", "Light Cruiser", "Destroyer"];

// // Fungsi untuk mengurutkan data berdasarkan tipe
// function sortByType(ship) {
//     return ship.sort((a, b) => {
//         return typeOrder.indexOf(a.type) - typeOrder.indexOf(b.type);
//     });
// }

// // Fungsi untuk menampilkan data kapal
// function displayShips(ship) {
//     const container = document.getElementById('ship-container');
    
//     ship.forEach(ship => {
//         const shipElement = document.createElement('div');
//         shipElement.classList.add('ship');

//         shipElement.innerHTML = `
//             <h2>${ship.name} (${ship.nationality})</h2>
//             <p><strong>Type:</strong> ${ship.type}</p>
//             <p><strong>Rarity:</strong> ${ship.rarity}</p>
//             <p><strong>Armor:</strong> ${ship.armor}</p>
//             <img src="${ship.image.potrait}" alt="${ship.name} Portrait">
//             <h3>Base Stats</h3>
//             <p>Health: ${ship.stat.base.health}</p>
//             <p>Firepower: ${ship.stat.base.firepower}</p>
//             <p>Torpedo: ${ship.stat.base.torpedo}</p>
//             <p>Aviation: ${ship.stat.base.aviation}</p>
//             <p>Anti Air: ${ship.stat.base.anti_air}</p>
//             <p>Evasion: ${ship.stat.base.evasion}</p>
//         `;
        
//         container.appendChild(shipElement);
//     });
// }

// // Ambil dan tampilkan data JSON
// fetch('ship.json')
//     .then(response => response.json())
//     .then(data => {
//         const sortedShips = sortByType(data);
//         displayShips(sortedShips);
//     })
//     .catch(error => console.error('Error:', error));






const modalBox = document.createElement("div");
modalBox.id = "modal";
modalBox.className = "modal";
modalBox.style.display = "none";  // Set awal display menjadi none
document.body.appendChild(modalBox);

function openModalBox(type, imgIndex) {
  // Tentukan direktori gambar penuh berdasarkan tipe
  let fullImageSrc;
  let fullNameArray = [];
  
  if (type === "BB") {
    fullImageSrc = `src/ships/main/BB-BC-BBV-BM-IXm/ship${imgIndex}.png`;
    fullNameArray = shipPotraitBBName;
  } else if (type === "CV") {
    fullImageSrc = `src/ships/main/CV-CVL/ship${imgIndex}.png`;
    fullNameArray = shipPotraitCVName;
  } else if (type === "CA") {
    fullImageSrc = `src/ships/vanguard/CA-CB/ship${imgIndex}.png`;
    fullNameArray = shipPotraitCAName;
  } else if (type === "CL") {
    fullImageSrc = `src/ships/vanguard/CL/ship${imgIndex}.png`;
    fullNameArray = shipPotraitCLName;
  } else if (type === "DD") {
    fullImageSrc = `src/ships/vanguard/DD/ship${imgIndex}.png`;
    fullNameArray = shipPotraitDDName;
  }
  const fullName = fullNameArray[parseInt(imgIndex)]

  const modalBoxContent = document.createElement("div");
  modalBoxContent.className = "modal-content";
  
  const htmlContent = `
    <div class="modal--overlay">
      <div class="modal--container--control">
        <h1 class="close--modal" onclick="closeModalBox()">X</h1>
      </div>
    </div>
    <div class="modal--container container--flex--row">
      <div class="modal--container--table--left container--flex--column">
        <div class="card">
          <img src="" alt="" class="image--full"/>
        </div>
        <div class="table--ship--desc">
          <table border="1">
            <tbody>
              <tr>
                <th colspan="2">Ship Identity</th>
              </tr>
              <tr>
                <th>Name</th>
                <th class="name"></th>
              </tr>
              <tr>
                <th>Faction</th>
                <th class="nationality"></th>
              </tr>
              <tr>
                <th>Rarity</th>
                <th class="rarity"></th>
              </tr>
              <tr>
                <th>Classification</th>
                <th class="type"></th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="modal--container--table--right container--flex--column">
        <div class="table--ship--stat">
          <table border="1">
            <tbody>
              <tr>
                <th class="table--title">-</th>
                <th class="table--title">Health</th>
                <th class="table--title">Firepower</th>
                <th class="table--title">Torpedo</th>
                <th class="table--title">Aviation</th>
                <th class="table--title">Anti Air</th>
                <th class="table--title">Evasion</th>
                <th class="table--title">Armor Type</th>
              </tr>
              <tr>
                <th class="table--title">Base</th>
                <th class="health--base"></th>
                <th class="firepower--base"></th>
                <th class="torpedo--base"></th>
                <th class="aviation--base"></th>
                <th class="anti_air--base"></th>
                <th class="evasion--base"></th>
                <th class="armor" rowspan="4"></th>
              </tr>
              <tr>
                <th class="table--title">Level 100</th>
                <th class="health--level_100"></th>
                <th class="firepower--level_100"></th>
                <th class="torpedo--level_100"></th>
                <th class="aviation--level_100"></th>
                <th class="anti_air--level_100"></th>
                <th class="evasion--level_100"></th>
              </tr>
              <tr>
                <th class="table--title">Level 120</th>
                <th class="health--level_120"></th>
                <th class="firepower--level_120"></th>
                <th class="torpedo--level_120"></th>
                <th class="aviation--level_120"></th>
                <th class="anti_air--level_120"></th>
                <th class="evasion--level_120"></th>
              </tr>
              <tr>
                <th class="table--title">Level 125</th>
                <th class="health--level_125"></th>
                <th class="firepower--level_125"></th>
                <th class="torpedo--level_125"></th>
                <th class="aviation--level_125"></th>
                <th class="anti_air--level_125"></th>
                <th class="evasion--level_125"></th>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="table--ship--equippable">
          <table border="1">
            <tbody>
              <tr>
                <th class="table--title" colspan="4">Equippable</th>
              </tr>
              <tr>
                <th class="table--title">Slots</th>
                <th class="table--title">Efficiency</th>
                <th class="table--title">Equippable</th>
                <th class="table--title">Max #</th>
              </tr>
              <tr>
                <th class="table--title">1</th>
                <th class="slot_1--efficiency"></th>
                <th class="slot_1--equiabble"></th>
                <th class="slot_1--max"></th>
              </tr>
              <tr>
                <th class="table--title">2</th>
                <th class="slot_2--efficiency"></th>
                <th class="slot_2--equiabble"></th>
                <th class="slot_2--max"></th>
              </tr>
              <tr>
                <th class="table--title">3</th>
                <th class="slot_3--efficiency"></th>
                <th class="slot_3--equiabble"></th>
                <th class="slot_3--max"></th>
              </tr>
              <tr>
                <th class="table--title">Augment</th>
                <th class="augment--efficiency"></th>
                <th class="augment--equiabble"></th>
                <th class="augment--max"></th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  modalBoxContent.innerHTML = htmlContent;
  modalBox.innerHTML = '';
  modalBox.appendChild(modalBoxContent);
  modalBox.style.display = "flex";
  navBar.style.display = 'none';
}

function closeModalBox() {
  modalBox.style.display = "none";
  navBar.style.display = '';
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".root .shiplist .shiplist--container .shiplist--container--ship .shiplist--container--ship--card .shiplist--container--ship--card--img img").forEach((img) => {
    img.addEventListener("click", () => {
      const type = img.getAttribute("data-type");
      const index = img.getAttribute("data-index");
      openModalBox(type, index);  // Mengirim tipe dan indeks gambar
    });
  });
});