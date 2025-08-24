const { greet, saludoSegunHora, tratamientoPorGeneroYEdad } = require("../src/saludador");

test("Sin nombre: usa saludo según hora (mañana, ES)", () => {
  expect(greet("", 9)).toBe("Buenos días!");
});

test("Con nombre: saluda por nombre (mañana, ES)", () => {
  expect(greet("Carlos", 9)).toBe("Buenos días, Carlos!");
});

test("Nombre con espacios se limpia (tarde, ES)", () => {
  expect(greet("  Ana  ", 15)).toBe("Buenas tardes, Ana!");
});

test("Saludo según hora de la mañana (ES)", () => {
  expect(saludoSegunHora(9)).toBe("Buenos días");
});

test("Saludo según hora de la tarde (ES)", () => {
  expect(saludoSegunHora(15)).toBe("Buenas tardes");
});

test("Saludo según hora de la noche (ES)", () => {
  expect(saludoSegunHora(22)).toBe("Buenas noches");
});

test("tratamientoPorGeneroYEdad respeta género y edad (ES)", () => {
  expect(tratamientoPorGeneroYEdad("F", 31)).toBe("Sra.");
  expect(tratamientoPorGeneroYEdad("M", 31)).toBe("Sr.");
  expect(tratamientoPorGeneroYEdad("F", 30)).toBe("");
});

test("Saludo con género femenino (mañana, edad >30, ES)", () => {
  expect(greet("Ana", 9, "F", 35)).toBe("Buenos días, Sra. Ana!");
});

test("Saludo con género masculino (tarde, edad >30, ES)", () => {
  expect(greet("Luis", 15, "M", 45)).toBe("Buenas tardes, Sr. Luis!");
});

test("Sin género: no agrega título (noche, ES)", () => {
  expect(greet("Valeria", 22, null)).toBe("Buenas noches, Valeria!");
});

test("Sin nombre: usa saludo según hora (mañana, EN)", () => {
  expect(greet("", 9, null, null, "en")).toBe("Good morning!");
});

test("Con nombre (tarde, EN)", () => {
  expect(greet("Carlos", 15, null, null, "en")).toBe("Good afternoon, Carlos!");
});

test("Con género y edad >30 (tarde, EN)", () => {
  expect(greet("Ana", 16, "F", 40, "en")).toBe("Good afternoon, Ms. Ana!");
});

test("Edad <=30 no aplica título (noche, EN)", () => {
  expect(greet("Luis", 21, "M", 29, "en")).toBe("Good evening, Luis!");
});

test("Unidad de hora en EN", () => {
  expect(saludoSegunHora(8, "en")).toBe("Good morning");
  expect(saludoSegunHora(13, "en")).toBe("Good afternoon");
  expect(saludoSegunHora(22, "en")).toBe("Good evening");
});

test("Tratamiento en EN solo si edad >30", () => {
  expect(tratamientoPorGeneroYEdad("F", 31, "en")).toBe("Ms.");
  expect(tratamientoPorGeneroYEdad("M", 45, "en")).toBe("Mr.");
  expect(tratamientoPorGeneroYEdad("M", 30, "en")).toBe("");
});
