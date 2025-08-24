const { greet, saludoSegunHora } = require("../src/saludador");

//saluda con 
test("Sin nombre: usa saludo según hora (mañana)", () => {
  expect(greet("", 9)).toBe("BUENOS DIAS!");
});

test("Con nombre: saluda por nombre (mañana)", () => {
  expect(greet("Carlos", 9)).toBe("BUENOS DIAS, Carlos!");
});

test("Nombre con espacios se limpia (tarde)", () => {
  expect(greet("  Ana  ", 15)).toBe("BUENAS TARDES, Ana!");
});

test("Saludo según hora de la mañana", () => {
  expect(saludoSegunHora(9)).toBe("BUENOS DIAS");
});

test("Saludo según hora de la tarde", () => {
  expect(saludoSegunHora(15)).toBe("BUENAS TARDES");
});

test("Saludo según hora de la noche", () => {
  expect(saludoSegunHora(22)).toBe("BUENAS NOCHES");
});

