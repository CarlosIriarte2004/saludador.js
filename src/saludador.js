
function saludoSegunHora(hour = null) {
  const h = hour ?? new Date().getHours();
  if (h >= 5 && h < 12) return "BUENOS DIAS";
  if (h >= 12 && h < 19) return "BUENAS TARDES";
  return "BUENAS NOCHES";
}

function greet(name = "", hour = null) {
  const limpio = String(name || "").trim();
  const saludoHora = saludoSegunHora(hour);
  return limpio ? `${saludoHora}, ${limpio}!` : `${saludoHora}!`;
}

module.exports = { greet, saludoSegunHora };
