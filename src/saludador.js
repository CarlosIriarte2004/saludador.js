// src/saludador.js

// Decide el texto del saludo según la hora dada (o la del sistema si es null)
function saludoSegunHora(hour = null) {
  const h = hour ?? new Date().getHours();
  if (h >= 5 && h < 12) return "Buenos días";
  if (h >= 12 && h < 19) return "Buenas tardes";
  return "Buenas noches";
}

// Título depende de género Y de edad (>30). Si edad <=30, no hay título.
function tratamientoPorGeneroYEdad(gender = null, age = null) {
  if (age != null && age > 30) {
    if (gender === "F") return "Sra.";
    if (gender === "M") return "Sr.";
  }
  return "";
}

// Firma: greet(name, hour, gender, age)
function greet(name = "", hour = null, gender = null, age = null) {
  const limpio = String(name || "").trim();
  const saludoHora = saludoSegunHora(hour);
  const titulo = tratamientoPorGeneroYEdad(gender, age);

  // Construcción: "Buenos días, Sra. Ana!" / "Buenas noches!"
  const partes = [saludoHora + ","];
  if (titulo) partes.push(titulo);
  if (limpio) partes.push(limpio);

  const texto = partes.join(" ").replace(/\s+,/g, ",").trim();
  return (limpio || titulo) ? texto + "!" : `${saludoHora}!`;
}

module.exports = {
  greet,
  saludoSegunHora,
  tratamientoPorGeneroYEdad,
};
