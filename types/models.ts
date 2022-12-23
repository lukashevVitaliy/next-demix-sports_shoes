export interface IReviews {
  _id?: string | undefined;
  id?: string | undefined;
  slug: string;
  name: string;
  aboutProduct: string;
  advantage: string;
  disadvantages: string;
  nameUser: string;
  userCity: string;
  impression: number;
  reliability: number;
  functionality: number;
  quality: number;
  photoMatching: number;
  recommend: boolean;
  discommend: boolean;
  periodOfUseUser: string;
  frequencyOfUseUser: string;
  policyData: boolean;
  createdAt: string;
}

export interface IProducts {
  _id?: string | undefined;
  id?: string | undefined;
  slug: string;
  name: string;
  category?: string | undefined;
  stockAvailability?: boolean;
  novelty?: boolean;
  discount?: string | undefined;
  rating: string;
  nameColor: string;
  colorSheme1?: string;
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
  gender: string;
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
  quantity?: number | undefined;
  activeSizes?: boolean | number | undefined;
}