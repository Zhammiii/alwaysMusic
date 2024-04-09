import express from "express";
import {getEstudiantes, postEstudiantes, putEstudiantes ,deleteEstudiantes , getEstudiantesRut} from "./controllers/dbControllers.js"
export const app = express();
export const PORT = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


/* leer algo */

app.get("/estudiantes", async (req, res) => {
  try {
    const estudiantes = await getEstudiantes();
    res.send(estudiantes);
  } catch (error) {
    console.error("Error en la Api:", error);
    res.status(500).send("Error al obtener los datos de la API");
  }
});

app.get("/estudiantesRut", async (req, res) => {
  try {
    const estudiantes = await getEstudiantesRut();
    res.send(estudiantes);
  } catch (error) {
    console.error("Error en la Api:", error);
    res.status(500).send("Error al obtener los datos de la API");
  }
});

/* agregar algo */
app.post("/agregar", async (req, res) => {
  try {
    const newEstudiante = await postEstudiantes();
    res.send(newEstudiante);
  } catch (error) {
    console.error("Error en la Api:", error);
    res.status(500).send("Error al obtener los datos de la API");
  }
});

/* editar algo */

app.put("/editar", async (req, res) => {
    try {
      const updateEstudiante = putEstudiantes();
      res.send(updateEstudiante);
       
    } catch (error) {
      console.error("Error en la Api:", error);
      res.status(500).send("Error al obtener los datos de la API");
    }
  });

/* eliminar */

app.delete("/eliminar", async (req, res) => {
    try {
      const eraseEstudiantes = deleteEstudiantes();
      res.send(eraseEstudiantes);
       
    } catch (error) {
      console.error("Error en la Api:", error);
      res.status(500).send("Error al obtener los datos de la API");
    }
  });

  /* ruta general */
app.get("*", (req, res) => {
    res.send("Esta página no existe");
  });
  