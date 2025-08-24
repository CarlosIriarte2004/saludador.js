import saludador from "./saludador";
const { greet } = saludador;

document.getElementById("btnSaludar").addEventListener("click", () => {
  const nombre = document.getElementById("nombre").value;
  const edadVal = document.getElementById("edad").value;
  const edad = edadVal === "" ? null : Number(edadVal);
  const genero = document.getElementById("genero").value || null;
  const idioma = document.getElementById("idioma").value;

  // hora actual
  const hour = new Date().getHours();

  const mensaje = greet(nombre, hour, genero, edad, idioma);
  document.getElementById("saludo").textContent = mensaje;
});
