const cursos = [
  { nombre: "Matemáticas I", semestre: 1 },
  { nombre: "Lenguaje I", semestre: 1 },
  { nombre: "Historia", semestre: 2 },
  { nombre: "Biología", semestre: 2 },
  { nombre: "Física", semestre: 3 },
  { nombre: "Química", semestre: 3 },
  { nombre: "Filosofía", semestre: 4 },
  { nombre: "Educación Física", semestre: 4 }
];

const mallaDiv = document.getElementById("malla");

cursos.forEach(curso => {
  const div = document.createElement("div");
  div.className = "curso";
  div.innerText = `${curso.nombre}\n(Semestre ${curso.semestre})`;
  mallaDiv.appendChild(div);
});
