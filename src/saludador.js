function saludoSegunHora(hour, lang = "es") {
  if (lang === "en") {
    if (hour < 12) return "Good morning";
    if (hour < 20) return "Good afternoon";
    return "Good evening";
  } else {
    if (hour < 12) return "Buenos días";
    if (hour < 20) return "Buenas tardes";
    return "Buenas noches";
  }
}

function tratamientoPorGeneroYEdad(genero, edad, lang = "es") {
  if (!genero || edad == null || edad <= 30) return "";
  if (lang === "en") {
    return genero === "F" ? "Ms." : "Mr.";
  } else {
    return genero === "F" ? "Sra." : "Sr.";
  }
}

function greet(name = "", hour = null, genero = null, edad = null, lang = "es") {
  const limpio = String(name || "").trim();
  const saludoHora = saludoSegunHora(hour, lang);
  const titulo = tratamientoPorGeneroYEdad(genero, edad, lang);
  let nombreFinal = limpio;
  if (titulo) nombreFinal = `${titulo} ${nombreFinal}`;
  return nombreFinal ? `${saludoHora}, ${nombreFinal}!` : `${saludoHora}!`;
}

module.exports = { greet, saludoSegunHora, tratamientoPorGeneroYEdad };
