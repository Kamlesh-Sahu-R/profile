import projects from './project.js'; 
const products = [
  { id: 1, name: "T-Shirt", price: 499, image: "https://via.placeholder.com/200x150?text=T-Shirt" },
  { id: 2, name: "Shoes", price: 999, image: "https://via.placeholder.com/200x150?text=Shoes" },
  { id: 3, name: "Watch", price: 1599, image: "https://via.placeholder.com/200x150?text=Watch" },
  { id: 4, name: "Backpack", price: 799, image: "https://via.placeholder.com/200x150?text=Backpack" },
  { id: 5, name: "Sunglasses", price: 299, image: "https://via.placeholder.com/200x150?text=Sunglasses" },
  { id: 6, name: "Cap", price: 199, image: "https://via.placeholder.com/200x150?text=Cap" },
];


console.log(projects);
const grid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const themeToggle = document.getElementById("toggleTheme");
const sortSelect = document.getElementById("sortSelect");
const projectCard = document.getElementById("projectsCard");

let currentSort = "default";

let likedProducts = JSON.parse(localStorage.getItem("liked")) || [];

function renderProducts(filter = "") {
  grid.innerHTML = "";
  const filtered = products.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()));

  // Disable sort if no products
  sortSelect.disabled = filtered.length === 0;

  // Apply sorting if not default
  if (currentSort === "low-high") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === "high-low") {
    filtered.sort((a, b) => b.price - a.price);
  }

  if (filtered.length === 0) {
    grid.innerHTML = "<p>No products found.</p>";
    return;
  }

  // Generate Product Card ❤️
  filtered.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <span class="like-btn ${likedProducts.includes(product.id) ? "liked" : ""}" data-id="${product.id}">Like</span>
    `;

    grid.appendChild(card);
  });
}

function toggleLike(id) {
  if (likedProducts.includes(id)) {
    likedProducts = likedProducts.filter(pid => pid !== id);
  } else {
    likedProducts.push(id);
  }
  localStorage.setItem("liked", JSON.stringify(likedProducts));
  renderProducts(searchInput.value);
}

// Event: Like button
grid.addEventListener("click", function (e) {
  if (e.target.classList.contains("like-btn")) {
    const id = parseInt(e.target.getAttribute("data-id"));
    toggleLike(id);
  }
});

// Event: Search
searchInput.addEventListener("input", () => {
  renderProducts(searchInput.value);
});

//Event: Sort
sortSelect.addEventListener("change", () => {
  currentSort = sortSelect.value;
  renderProducts(searchInput.value);
});

// Event: Theme Toggle
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// Render projects card
function renderProjectsCard(){
  projectCard.innerHTML = "";
  
  projects.forEach(project => {

    const skills = project.skills
      .map(skill => `<span class="skills">${skill}<span>`)
      .join(" | ");
    const plateform = project.plateform
      .map(plateform => `<span>${plateform}<span>`)
      .join(", ");
    const discriptions = project.description
      .map(descript => `<li>${descript}</li>`)
      .join(" ");

    const card = document.createElement("div");
    card.className = "projectCard";

    card.innerHTML = `
      <div class="iframe-container">
        <a href="${project.page}" target="_blank" class="iframe-link-overlay"></a>
        <iframe src="${project.page}" loading="lazy">
          Your browser does not support iframes.
        </iframe>
      </div>
      <div class="project-details">
        <h4>Project Name: <span>${project.name}<span></h4>
        <div class="description">${discriptions}</div>
        <h4>Project Type: <span>${project.type}</span></h4>
        <h4>Deployed in: <span>${plateform}</span></h4>
        <h4>Skills Used: ${skills}</h4>
        <div class="source-links">
          <a href="${project.page}" target="_blank" class="source-links-content">Demo</a>
          <a href="${project.github}" target="_blank" class="source-links-content">Git Hub Repo</a>
          <a href="${project.doc}" target="_blank" class="source-links-content">Project Details</a>
          <a href="${project.figma}" target="_blank" class="source-links-content">Figma Doc</a>
          <a href="${project.detail}" target="_blank" class="source-links-content">Module Details</a>
        </div>
      </div>
    `;

    projectCard.appendChild(card);
  });
  
}


// Init
renderProducts();
renderProjectsCard();
