import mongoose from 'mongoose';

interface IReview {
  slug: string;
  name: string;
  aboutProduct: string;
  advantage: string;
  disadvantages: string;
  nameUser: string;
  userCity: string;
  impression: string;
  reliability: string;
  functionality: string;
  quality: string;
  photoMatching: string;
  recommend: boolean;
  discommend: boolean;
  periodOfUseUser: string;
  frequencyOfUseUser: string;
  policyData: boolean;
  timestamps: boolean;
}

const reviewSchema = new mongoose.Schema<IReview>(
  {
    slug: { type: String, required: true },
    name: { type: String, required: true },
    aboutProduct: { type: String, required: true },
    advantage: { type: String, required: true },
    disadvantages: { type: String, required: true },
    nameUser: { type: String, required: true },
    userCity: { type: String, required: true },
    impression: { type: String, required: true },
    reliability: { type: String, required: true },
    functionality: { type: String, required: true },
    quality: { type: String, required: true },
    photoMatching: { type: String, required: true },
    recommend: { type: Boolean, required: true },
    discommend: { type: Boolean, required: true },
    periodOfUseUser: { type: String, required: true },
    frequencyOfUseUser: { type: String, required: true },
    policyData: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.models.Review || mongoose.model('Review', reviewSchema);
export default Review;
