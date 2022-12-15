import mongoose from 'mongoose';
import { IReviews } from '../utils/models';

type IReview = Exclude<keyof IReviews, 'id'>;

const reviewSchema = new mongoose.Schema<IReview>(
  {
    slug: { type: String, required: true },
    name: { type: String, required: true },
    aboutProduct: { type: String, required: true },
    advantage: { type: String, required: true },
    disadvantages: { type: String, required: true },
    nameUser: { type: String, required: true },
    userCity: { type: String, required: true },
    impression: { type: Number, required: true },
    reliability: { type: Number, required: true },
    functionality: { type: Number, required: true },
    quality: { type: Number, required: true },
    photoMatching: { type: Number, required: true },
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
