async function loadComponent(id, file) {
  const element = document.getElementById(id);
  if (!element) return;

  const response = await fetch(file);
  if (!response.ok) {
    console.error(`Erro ao carregar ${file}:`, response.status);
    return;
  }

  const html = await response.text();
  element.innerHTML = html;

  const currentYear = document.getElementById("currentYear");
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  if (id === "header") {
    setActiveNavLink();
  }
}

function setActiveNavLink() {
  const currentPath = window.location.pathname;
  const links = document.querySelectorAll(".nav-link[href]");

  links.forEach(link => {
    const href = link.getAttribute("href");
    const isActive =
      currentPath.endsWith(href) ||
      (href === "index.html" && (currentPath.endsWith("/") || currentPath.endsWith("/AgroFlow-main/")));

    link.classList.toggle("active", isActive);
  });
}

// Detecta se a página está dentro da pasta screens
const isScreenPage = window.location.pathname.includes("/screens/");

const headerFile = isScreenPage
  ? "../components/header.html"
  : "components/header.html";

const footerFile = isScreenPage
  ? "../components/footer.html"
  : "components/footer.html";

loadComponent("header", headerFile);
loadComponent("footer", footerFile);
