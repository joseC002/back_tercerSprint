import { Router } from "express";
import {
  crearPromocion,
  obtenerPromocion,
  actualizarDescripcion,
  actualizarEstado,
  obtenerPromocionesPorOferta,
  eliminarPromocion    
} from "../controllers/promocion.controller";

const router = Router();

// Crear
router.post("/", crearPromocion);

// Obtener por ID
router.get("/:id", obtenerPromocion);

// Actualizar descripción
router.put("/:id/descripcion", actualizarDescripcion);

// Actualizar estado
router.put("/:id/estado", actualizarEstado);

// Obtener todas las promociones de una oferta de trabajo
router.get("/oferta/:id_ofertaTrabajo", obtenerPromocionesPorOferta);

// Eliminar promoción
router.delete("/:id", eliminarPromocion);

export default router;
