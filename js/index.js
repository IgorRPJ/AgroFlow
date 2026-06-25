const features = [
  {
    icon: "bi-tree",
    color: "text-success",
    title: "Gestão Sustentável",
    description:
      "Otimize recursos e reduza impactos ambientais com tecnologia inteligente."
  },
  {
    icon: "bi-droplet",
    color: "text-primary",
    title: "Monitoramento Hídrico",
    description:
      "Controle preciso do uso de água com sensores IoT em tempo real."
  },
  {
    icon: "bi-bar-chart",
    color: "text-success",
    title: "Análise de Dados",
    description:
      "Dashboards intuitivos com insights para decisões mais assertivas."
  }
];
const benefits = [
  "Aumento de até 40% na produtividade",
  "Redução de 30% no desperdício de recursos",
  "Monitoramento 24/7 em tempo real",
  "Suporte técnico especializado"
];
const featuresContainer =
  document.getElementById(
    "featuresContainer"
  );
features.forEach(feature => {
  featuresContainer.innerHTML += `
    <div class="col-md-4">
      <div class="card border-0 shadow-sm h-100 feature-card">
        <div class="card-body p-4">
          <div class="icon-box d-flex align-items-center justify-content-center mb-4">
            <i class="bi ${feature.icon} ${feature.color} fs-1"></i>
          </div>
          <h4 class="fw-bold mb-3">
            ${feature.title}
          </h4>
          <p class="text-secondary">
            ${feature.description}
          </p>
        </div>
      </div>
    </div>
  `;
});
const benefitsList =
  document.getElementById(
    "benefitsList"
  );
benefits.forEach(benefit => {
  benefitsList.innerHTML += `
    <li class="d-flex align-items-start gap-3 mb-3">
      <i class="bi bi-check-circle-fill text-success fs-4"></i>
      <span class="fs-5">
        ${benefit}
      </span>
    </li>
  `;
});
const currentYear =
  document.getElementById(
    "currentYear"
  );
if (currentYear) {
  currentYear.textContent =
    new Date().getFullYear();
}
