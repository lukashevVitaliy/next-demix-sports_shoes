import mongoose from 'mongoose';
import { IProducts } from '../utils/models';

type IProduct = Exclude<keyof IProducts, 'id'>;

const productSchema = new mongoose.Schema<IProduct>(
  {
    slug: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    category: { type: String, required: true },
    stockAvailability: { type: Boolean, required: true },
    novelty: { type: Boolean },
    discount: { type: String },
    rating: { type: String },
    nameColor: { type: String },
    colorSheme1: { type: String },
    colorSheme2: { type: String },
    images: [{ type: String, required: true }],
    sizesColors: [
      {
        size: { type: Number, required: true },
        countInStock: { type: Number, required: true, default: 0 },
      },
    ],
    priceNew: { type: Number, required: true },
    priceOld: { type: Number, required: true },
    currency: { type: String, required: true },
    description: {
      title_1: { type: String },
      text_1: { type: String },
      title_2: { type: String },
      text_2: { type: String },
      title_3: { type: String },
      text_3: { type: String },
      title_4: { type: String },
      text_4: { type: String },
      title_5: { type: String },
      text_5: { type: String },
      title_6: { type: String },
      text_6: { type: String },
      title_7: { type: String },
      text_7: { type: String },
      title_8: { type: String },
      text_8: { type: String },
      title_9: { type: String },
      text_9: { type: String },
      title_10: { type: String },
      text_10: { type: String },
    },
    gender: { type: String, required: true },
    sportType: { type: String },
    coverage: { type: String },
    typeOfTraining: { type: String },
    anatomicalInsole: { type: String },
    reflectiveDetails: { type: String },
    differenceSole: { type: String },
    typeOfPronation: { type: String },
    reinforcedBumper: { type: String },
    season: { type: String },
    warrantyPeriod: { type: String },
    closure: { type: String },
    feature: { type: String },
    antibacteriaImpregnation: { type: String },
    protectionFromMoisture: { type: String },
    materialUpper: { type: String },
    materialLining: { type: String },
    materialSole: { type: String },
    countryOfManufacture: { type: String },
    enrblast: { type: Boolean, required: true },
    cushfoam: { type: Boolean, required: true },
    flexzone360: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
);

const Product =
  mongoose.models.Product || mongoose.model('Product', productSchema);
export default Product;
