// tests/saludador.test.js
const {
  greet,
  saludoSegunHora,
  tratamientoPorGeneroYEdad
} = require("../src/saludador");

// --- Incrementos 1–3: sin nombre / con nombre / hora (fijamos hora para que sea determinista)
test("Sin nombre: usa saludo según hora (mañana)", () => {
  expect(greet("", 9)).toBe("Buenos días!");
});

test("Con nombre: saluda por nombre (mañana)", () => {
  expect(greet("Carlos", 9)).toBe("Buenos días, Carlos!");
});

test("Nombre con espacios se limpia (tarde)", () => {
  expect(greet("  Ana  ", 15)).toBe("Buenas tardes, Ana!");
});

// --- Incremento 3: unidad de saludo por hora
test("Saludo según hora de la mañana", () => {
  expect(saludoSegunHora(9)).toBe("Buenos días");
});

test("Saludo según hora de la tarde", () => {
  expect(saludoSegunHora(15)).toBe("Buenas tardes");
});

test("Saludo según hora de la noche", () => {
  expect(saludoSegunHora(22)).toBe("Buenas noches");
});

// --- Incremento 4+5: tratamiento por género SOLO si edad > 30
test("tratamientoPorGeneroYEdad respeta género y edad", () => {
  expect(tratamientoPorGeneroYEdad("F", 31)).toBe("Sra.");
  expect(tratamientoPorGeneroYEdad("M", 31)).toBe("Sr.");
  expect(tratamientoPorGeneroYEdad("F", 30)).toBe(""); // <=30 no aplica
});

test("Saludo con género femenino (mañana, edad >30)", () => {
  expect(greet("Ana", 9, "F", 35)).toBe("Buenos días, Sra. Ana!");
});

test("Saludo con género masculino (tarde, edad >30)", () => {
  expect(greet("Luis", 15, "M", 45)).toBe("Buenas tardes, Sr. Luis!");
});

test("Sin género: no agrega título", () => {
  expect(greet("Valeria", 22, null)).toBe("Buenas noches, Valeria!");
});
