import mongoose, { Schema, Document } from "mongoose";

export interface IPromocion extends Document {
  id_ofertaTrabajo: mongoose.Schema.Types.ObjectId;
  descripcion: string;
  activo: boolean;
}

const PromocionSchema = new Schema<IPromocion>(
  {
    id_ofertaTrabajo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Oferta",
      required: true,
    },

    descripcion: {
      type: String,
      required: true,
      trim: true,
    },

    activo: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const PromocionModel = mongoose.model<IPromocion>(
  "Promocion",
  PromocionSchema
);

export default PromocionModel;