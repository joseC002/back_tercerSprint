import { Request, Response } from "express";
import PromocionModel from "../models/promocion.model";

// 🔹 Crear una promoción
export const crearPromocion = async (req: Request, res: Response) => {
    try {
      const { id_ofertaTrabajo, descripcion, activo } = req.body; // incluir activo
  
      const nueva = await PromocionModel.create({
        id_ofertaTrabajo,
        descripcion,
        activo, // guardar estado
      });
  
      return res.status(201).json(nueva);
    } catch (error: any) {
      return res.status(500).json({ message: "Error al crear promoción", error: error.message });
    }
  };
  

// 🔹 Obtener una promoción por ID
export const obtenerPromocion = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const promo = await PromocionModel.findById(id);

    if (!promo) {
      return res.status(404).json({ message: "Promoción no encontrada" });
    }

    return res.json(promo);
  } catch (error: any) {
    return res.status(500).json({ message: "Error al obtener promoción", error: error.message });
  }
};

// 🔹 Modificar descripción
export const actualizarDescripcion = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { descripcion } = req.body;

    const promo = await PromocionModel.findByIdAndUpdate(
      id,
      { descripcion },
      { new: true }
    );

    if (!promo) {
      return res.status(404).json({ message: "Promoción no encontrada" });
    }

    return res.json(promo);
  } catch (error: any) {
    return res.status(500).json({ message: "Error al actualizar descripción", error: error.message });
  }
};

// 🔹 Modificar estado (activo / inactivo)
export const actualizarEstado = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { activo } = req.body;

    const promo = await PromocionModel.findByIdAndUpdate(
      id,
      { activo },
      { new: true }
    );

    if (!promo) {
      return res.status(404).json({ message: "Promoción no encontrada" });
    }

    return res.json(promo);
  } catch (error: any) {
    return res.status(500).json({ message: "Error al actualizar estado", error: error.message });
  }
};

// 🔹 Obtener todas las promociones de una oferta de trabajo
export const obtenerPromocionesPorOferta = async (req: Request, res: Response) => {
    try {
      const { id_ofertaTrabajo } = req.params;
  
      const promociones = await PromocionModel.find({ id_ofertaTrabajo });
  
      return res.json(promociones);
    } catch (error: any) {
      return res.status(500).json({ message: "Error al obtener promociones", error: error.message });
    }
  };

  export const eliminarPromocion = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
  
      const promo = await PromocionModel.findByIdAndDelete(id);
  
      if (!promo) {
        return res.status(404).json({ message: "Promoción no encontrada" });
      }
  
      return res.json({ message: "Promoción eliminada", id });
    } catch (error) {
      console.error("Error al eliminar promoción:", error);
      return res.status(500).json({ message: "Error interno del servidor" });
    }
  };
  