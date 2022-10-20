import mongoose from 'mongoose';

interface IProduct {
  slug: string;
  name: string;
  category: string;
  stockAvailability: boolean;
  novelty: boolean;
  discount: string | undefined;
  rating: string | undefined;
  nameColor: string;
  colorSheme1: string;
  colorSheme2?: string;
  images: string[];
  sizesColors: {
    size: number;
    countInStock: number;
  }[];
  priceNew: number;
  priceOld: number;
  currency: string;
  description?: {
    title_1?: string | undefined;
    text_1?: string | undefined;
    title_2?: string | undefined;
    text_2?: string | undefined;
    title_3?: string | undefined;
    text_3?: string | undefined;
    title_4?: string | undefined;
    text_4?: string | undefined;
    title_5?: string | undefined;
    text_5?: string | undefined;
    title_6?: string | undefined;
    text_6?: string | undefined;
    title_7?: string | undefined;
    text_7?: string | undefined;
    title_8?: string | undefined;
    text_8?: string | undefined;
    title_9?: string | undefined;
    text_9?: string | undefined;
    title_10?: string | undefined;
    text_10?: string | undefined;
  };
  gender: string | undefined;
  sportType?: string | undefined;
  coverage?: string | undefined;
  typeOfTraining?: string | undefined;
  anatomicalInsole?: string | undefined;
  reflectiveDetails?: string | undefined;
  differenceSole?: string | undefined;
  typeOfPronation?: string | undefined;
  reinforcedBumper?: string | undefined;
  season?: string | undefined;
  warrantyPeriod?: string | undefined;
  closure?: string | undefined;
  feature?: string | undefined;
  antibacteriaImpregnation?: string | undefined;
  protectionFromMoisture?: string | undefined;
  materialUpper?: string | undefined;
  materialLining?: string | undefined;
  materialSole?: string | undefined;
  countryOfManufacture?: string | undefined;
  enrblast?: boolean;
  cushfoam?: boolean;
  flexzone360?: boolean;
}
[];

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
