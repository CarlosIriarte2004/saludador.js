// src/saludador.js

// Decide el texto del saludo según la hora y el idioma
function saludoSegunHora(hour = null, lang = "es") {
  const h = hour ?? new Date().getHours();

  if (lang === "en") {
    if (h >= 5 && h < 12) return "Good morning";
    if (h >= 12 && h < 19) return "Good afternoon";
    return "Good evening";
  }

  // Español (por defecto)
  if (h >= 5 && h < 12) return "Buenos días";
  if (h >= 12 && h < 19) return "Buenas tardes";
  return "Buenas noches";
}

// Título depende de género y edad (>30), en el idioma dado
function tratamientoPorGeneroYEdad(gender = null, age = null, lang = "es") {
  if (age != null && age > 30) {
    if (lang === "en") {
      if (gender === "F") return "Ms.";
      if (gender === "M") return "Mr.";
    } else {
      if (gender === "F") return "Sra.";
      if (gender === "M") return "Sr.";
    }
  }
  return "";
}

// Firma: greet(name, hour, gender, age, lang)
function greet(name = "", hour = null, gender = null, age = null, lang = "es") {
  const limpio = String(name || "").trim();
  const saludoHora = saludoSegunHora(hour, lang);
  const titulo = tratamientoPorGeneroYEdad(gender, age, lang);

  // Construcción: "Buenos días, Sra. Ana!" / "Good evening, Mr. Luis!" / "Buenas noches!"
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
