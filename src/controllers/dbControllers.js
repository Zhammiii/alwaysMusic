import { pool } from "../dbconfig.js";

/* Obtener */
export const getEstudiantes = async () => {
  const result = await pool.query("SELECT * FROM Estudiantes");
  console.log(result.rows);
  return result;
};


/* Obtener por Rut*/
export const getEstudiantesRut = async() => {
  const text = "SELECT nombre FROM Estudiantes WHERE rut = $1";
  const values = ["18.xxx.xxx-4"];
  const result = await pool.query(text, values);
  console.log(result.rows);
  return result;
}

/* Agregar */
export const postEstudiantes = async () => {
  const text = "INSERT INTO Estudiantes (nombre, rut , curso , nivel) VALUES($1, $2, $3, $4) RETURNING *";
  const values = ["Dani", "18.xxx.xxx-4" , "FullStack JS", '3'];
  const result = await pool.query(text, values);
  console.log(result.rows);
  return result;
};

/* Actualizar */
export const putEstudiantes = async () => {
  const text = "UPDATE Estudiantes SET curso = $1 WHERE id = $2 RETURNING *";
  const values = ["FullStack JS", 1];
  const result = await pool.query(text, values);
  console.log(result.rows);
  return result;
};
/* Eliminar */
export const deleteEstudiantes = async () => {
  const text = "DELETE FROM Estudiantes WHERE id = $1 RETURNING *";
  const values = [2];
  const result = await pool.query(text, values);
  console.log(result.rows);
  return result;
};