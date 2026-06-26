const technologies = [
  {
    icon: "bi-broadcast",
    color: "text-success",
    title: "Internet das Coisas (IoT)",
    description:
      "Sensores inteligentes instalados no campo coletam dados em tempo real sobre solo, clima e cultivo. Nossa rede de dispositivos conectados opera 24/7 com baixo consumo de energia.",
    specs: [
      "Protocolo LoRaWAN de longo alcance",
      "Bateria de até 5 anos",
      "Resistente a intempéries (IP67)",
      "Transmissão a cada 15 minutos"
    ]
  },
  {
    icon: "bi-cloud",
    color: "text-primary",
    title: "Cloud Computing",
    description:
      "Infraestrutura escalável na nuvem que processa milhões de dados diariamente. Seus dados são armazenados com redundância em múltiplos datacenters.",
    specs: [
      "AWS Cloud Infrastructure",
      "Backup automático diário",
      "99.9% de uptime garantido",
      "Escalabilidade automática"
    ]
  },
  {
    icon: "bi-cpu",
    color: "text-purple-custom",
    title: "Inteligência Artificial",
    description:
      "Algoritmos de Machine Learning analisam padrões históricos e condições atuais para gerar previsões precisas e recomendações personalizadas.",
    specs: [
      "Modelos de Deep Learning",
      "Análise preditiva de safra",
      "Detecção de anomalias",
      "Melhoria contínua dos algoritmos"
    ]
  },
  {
    icon: "bi-phone",
    color: "text-info",
    title: "Aplicativo Mobile",
    description:
      "Acesse todos os dados e controles da sua fazenda de qualquer lugar. Interface intuitiva desenvolvida para funcionar até em áreas com sinal limitado.",
    specs: [
      "Disponível para iOS e Android",
      "Modo offline com sincronização",
      "Notificações push personalizadas",
      "Controle remoto de equipamentos"
    ]
  },
  {
    icon: "bi-shield-lock",
    color: "text-danger",
    title: "Segurança de Dados",
    description:
      "Seus dados são protegidos com os mais altos padrões de segurança da indústria. Criptografia end-to-end e compliance com LGPD.",
    specs: [
      "Criptografia AES-256",
      "Autenticação de dois fatores",
      "Certificação ISO 27001",
      "Conformidade LGPD"
    ]
  },
  {
    icon: "bi-lightning-charge",
    color: "text-warning",
    title: "Automação Inteligente",
    description:
      "Sistema de automação que aprende com seus padrões de uso e executa ações preventivas para otimizar recursos e proteger sua safra.",
    specs: [
      "Regras customizáveis",
      "Aprendizado de máquina",
      "Integração com equipamentos",
      "Logs completos de operações"
    ]
  }
];
const architecture = [
  {
    layer: "Camada de Sensores",
    items: [
      "Sensores IoT no Campo",
      "Estações Meteorológicas",
      "Câmeras de Monitoramento"
    ]
  },
  {
    layer: "Camada de Conectividade",
    items: [
      "LoRaWAN Gateway",
      "4G/5G",
      "Wi-Fi"
    ]
  },
  {
    layer: "Camada de Processamento",
    items: [
      "Edge Computing",
      "Cloud Processing",
      "Machine Learning Pipeline"
    ]
  },
  {
    layer: "Camada de Aplicação",
    items: [
      "Dashboard Web",
      "App Mobile",
      "API REST"
    ]
  }
];
const technologiesContainer =
  document.getElementById(
    "technologiesContainer"
  );
technologies.forEach((tech) => {
  technologiesContainer.innerHTML += `
    <div class="col-md-6 col-lg-4">
      <div class="tech-card h-100">
        <div class="icon-tech">
          <i class="bi ${tech.icon} ${tech.color}"></i>
        </div>
        <h3 class="fs-4 fw-bold mb-3">
          ${tech.title}
        </h3>
        <p class="text-secondary mb-4">
          ${tech.description}
        </p>
        <div class="border-top pt-4">
          <p class="fw-semibold mb-3">
            Especificações:
          </p>
          <ul class="list-unstyled">
            ${tech.specs.map(spec => `
              <li class="d-flex gap-2 mb-2">
                <span class="text-success fw-bold">
                  •
                </span>
                <span class="text-secondary">
                  ${spec}
                </span>
              </li>
            `).join("")}
          </ul>
        </div>
      </div>
    </div>
  `;
});
const architectureContainer =
  document.getElementById(
    "architectureContainer"
  );
architecture.forEach((layer, index) => {
  architectureContainer.innerHTML += `
    <div>
      <div class="architecture-card">
        <div class="architecture-number">
          ${index + 1}
        </div>
        <div class="flex-grow-1">
          <h3 class="fs-4 fw-bold mb-3">
            ${layer.layer}
          </h3>
          <div class="d-flex flex-wrap gap-2">
            ${layer.items.map(item => `
              <span class="architecture-tag">
                ${item}
              </span>
            `).join("")}
          </div>
        </div>
      </div>
      ${index < architecture.length - 1
      ? `
          <div class="architecture-line"></div>
        `
      : ""
    }
    </div>
  `;
});
