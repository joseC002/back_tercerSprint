import { Request, Response } from "express";
import  {FixerModel}  from "../../../modules/fixer/models/Fixer";

// Obtener proveedor por ID con servicios poblados
export const obtenerProveedorPorIdController = async (req: Request, res: Response) => {
    try {
      const proveedor = await FixerModel.findById(req.params.id).populate("categories");
      if (!proveedor) return res.status(404).json({ message: "Proveedor no encontrado" });
  
      res.json(proveedor);
    } catch (error: any) {
      res.status(500).json({ message: "Error al obtener proveedor", error: error.message });
    }

/* Crear proveedor
export const crearProveedorController = async (req: Request, res: Response) => {
  try {
    const { nombre, servicios } = req.body;
    if (!nombre) return res.status(400).json({ message: "Nombre es obligatorio" });

    // servicios es un array de ObjectId de servicios existentes
    const proveedor = new ProveedorModel({ nombre, servicios: servicios || [] });
    await proveedor.save();

    res.status(201).json(proveedor);
  } catch (error: any) {
    res.status(500).json({ message: "Error al crear proveedor", error: error.message });
  }*/
};

// Obtener todos los proveedores con servicios poblados
export const obtenerProveedoresController = async (_req: Request, res: Response) => {
  try {
    const proveedores = await FixerModel.find().populate("categories");
    res.json(proveedores);
  } catch (error: any) {
    res.status(500).json({ message: "Error al obtener proveedores", error: error.message });
  }
};



// Obtener solo el nombre de un fixer por su fixerId
export const obtenerNombreFixerController = async (req: Request, res: Response) => {
  try {
    const { fixerId } = req.params;

    // Buscar solo el campo 'name' usando fixerId
    const fixer = await FixerModel.findOne({ fixerId }).select("name");

    if (!fixer) {
      return res.status(404).json({ message: "Fixer no encontrado" });
    }

    res.json({ name: fixer.name });
  } catch (error: any) {
    res.status(500).json({ message: "Error al obtener el nombre del fixer", error: error.message });
  }
};
