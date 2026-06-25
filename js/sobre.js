const stats = [
    {
        number: "500+",
        label: "Fazendas Atendidas"
    },
    {
        number: "98%",
        label: "Satisfação de Clientes"
    },
    {
        number: "15M+",
        label: "Hectares Monitorados"
    },
    {
        number: "40%",
        label: "Aumento Médio de Produtividade"
    }
];
const values = [
    {
        icon: "bi-bullseye",
        color: "text-success",
        title: "Missão",
        description:
            "Democratizar o acesso à tecnologia agrícola de ponta, tornando a agricultura mais produtiva, sustentável e lucrativa para produtores de todos os portes."
    },
    {
        icon: "bi-graph-up-arrow",
        color: "text-primary",
        title: "Visão",
        description:
            "Ser referência em soluções tecnológicas para o agronegócio, reconhecidos pela inovação e pelo impacto positivo na vida de produtores rurais."
    },
    {
        icon: "bi-award-fill",
        color: "text-purple-custom",
        title: "Valores",
        description:
            "Inovação constante, compromisso com resultados, sustentabilidade ambiental, transparência nas relações e foco no cliente."
    }
];
const team = [
    {
        name: "Ana Costa",
        role: "CEO & Fundadora",
        description:
            "Engenheira Agrônoma com 15 anos de experiência em tecnologia para o campo."
    },
    {
        name: "Carlos Mendes",
        role: "CTO",
        description:
            "Especialista em IoT e Big Data aplicado ao agronegócio."
    },
    {
        name: "Mariana Silva",
        role: "Diretora de Produto",
        description:
            "Product Manager com foco em soluções sustentáveis."
    }
];
const statsContainer =
    document.getElementById(
        "statsContainer"
    );
stats.forEach(stat => {
    statsContainer.innerHTML += `
    <div class="col-6">
      <div class="stat-card">
        <div class="stat-number">
          ${stat.number}
        </div>
        <div class="stat-label">
          ${stat.label}
        </div>
      </div>
    </div>
  `;
});
const valuesContainer =
    document.getElementById(
        "valuesContainer"
    );
values.forEach(value => {
    valuesContainer.innerHTML += `
    <div class="col-md-4">
      <div class="value-card">
        <div class="value-icon">
          <i class="bi ${value.icon} ${value.color}"></i>
        </div>
        <h3 class="fw-bold mb-3">
          ${value.title}
        </h3>
        <p class="text-secondary mb-0">
          ${value.description}
        </p>
      </div>
    </div>
  `;
});
const teamContainer =
    document.getElementById(
        "teamContainer"
    );
team.forEach(member => {
    teamContainer.innerHTML += `
    <div class="col-md-4">
      <div class="team-card">
        <div class="team-avatar">
          <i class="bi bi-people-fill"></i>
        </div>
        <h3 class="fw-bold mb-1">
          ${member.name}
        </h3>
        <p class="team-role mb-3">
          ${member.role}
        </p>
        <p class="team-description">
          ${member.description}
        </p>
      </div>
    </div>
  `;
});
