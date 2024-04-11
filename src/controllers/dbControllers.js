import { pool } from "../dbconfig.js";
import queries from  "../../queries.json" assert{type:"json"}

/* Obtener */
export const getEstudiantes = async () => {
  const result = await pool.query(queries.getEstudiantes);
  console.log(result.rows);
  return result;
};

/* Obtener por Rut*/
export const getEstudiantesRut = async() => {
  const result = await pool.query(queries.getEstudiantesRut);
  console.log(result.rows);
  return result;
}

/* Agregar */
export const postEstudiantes = async () => {
  const result = await pool.query(queries.postEstudiantes);
  console.log(result.rows);
  return result;
};

/* Actualizar */
export const putEstudiantes = async () => {
  const result = await pool.query(queries.putEstudiantes);
  console.log(result.rows);
  return result;
};
/* Eliminar */
export const deleteEstudiantes = async () => {
  const result = await pool.query(queries.deleteEstudiantes);
  console.log(result.rows);
  return result;
};