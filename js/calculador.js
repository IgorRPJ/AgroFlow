const calcularBtn = document.getElementById('calcularBtn');
const areaHectares = document.getElementById('areaHectares');
const tipoProducao = document.getElementById('tipoProducao');
const custoMensal = document.getElementById('custoMensal');
const desperdicio = document.getElementById('desperdicio');
const resultadoContainer = document.getElementById('resultadoContainer');
const fatoresReducao = {
  grãos: 0.35,
  frutas: 0.40,
  cana: 0.30,
  pecuaria: 0.32
};
calcularBtn.addEventListener('click', calcularEconomia);
function calcularEconomia() {
  const area = parseFloat(areaHectares.value) || 0;
  const tipo = tipoProducao.value;
  const custo = parseFloat(custoMensal.value) || 0;
  const taxaDesperdicio = parseFloat(desperdicio.value) || 0;
  if (area <= 0 || custo <= 0 || taxaDesperdicio < 0 || taxaDesperdicio > 100) {
    alert('Por favor, insira valores válidos para todos os campos.');
    return;
  }
  const desperdícioAtual = (custo * taxaDesperdicio) / 100;
  const fatorReducao = fatoresReducao[tipo] || 0.35;
  const desperdícioReduzido = desperdícioAtual * (1 - fatorReducao);
  const economiaTotal = desperdícioAtual - desperdícioReduzido;
  const economiaAnual = economiaTotal * 12;
  document.getElementById('desperdícioAtual').textContent =
    'R$ ' + desperdícioAtual.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  document.getElementById('desperdícioReduzido').textContent =
    'R$ ' + desperdícioReduzido.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  document.getElementById('economiaTotal').textContent =
    'R$ ' + economiaTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  document.getElementById('economiaAnual').textContent =
    'R$ ' + economiaAnual.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  resultadoContainer.style.display = 'block';
}
areaHectares.addEventListener('input', () => {
  if (resultadoContainer.style.display !== 'none') {
    calcularEconomia();
  }
});
tipoProducao.addEventListener('change', () => {
  if (resultadoContainer.style.display !== 'none') {
    calcularEconomia();
  }
});
custoMensal.addEventListener('input', () => {
  if (resultadoContainer.style.display !== 'none') {
    calcularEconomia();
  }
});
desperdicio.addEventListener('input', () => {
  if (resultadoContainer.style.display !== 'none') {
    calcularEconomia();
  }
});
