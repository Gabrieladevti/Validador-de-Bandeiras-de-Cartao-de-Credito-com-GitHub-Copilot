const input = document.getElementById('card-number');
const result = document.getElementById('result');

function detectarBandeira(numero) {
  const bandeiras = {
    visa: /^4/,
    mastercard: /^5[1-5]/,
    amex: /^3[47]/,
    elo: /^6(?:011|5)/,
    discover: /^6(?:011|5)/,
    diners: /^3(?:0[0-5]|[68])/,
    jcb: /^(?:2131|1800|35)/
  };

  for (const [bandeira, regex] of Object.entries(bandeiras)) {
    if (regex.test(numero)) return bandeira.toUpperCase();
  }

  return "Bandeira não reconhecida";
}

input.addEventListener('input', () => {
  const numero = input.value.replace(/\s+/g, '');
  if (numero.length >= 4) {
    result.textContent = detectarBandeira(numero);
  } else {
    result.textContent = '';
  }
});