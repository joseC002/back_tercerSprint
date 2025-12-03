import { Router } from "express";
import {  obtenerNombreFixerController, obtenerProveedoresController,  obtenerProveedorPorIdController} from "../controllers/proveedor.controller";

const router = Router();

//router.post("/", crearProveedorController);
router.get("/", obtenerProveedoresController);
router.get("/:id", obtenerProveedorPorIdController);
router.get("/fixers/fixerId/:fixerId/nombre", obtenerNombreFixerController);

export default router;
