import Review from '../../../models/Review';
import db from '../../../utils/db';
import IReview from './review-interface';

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    return;
  }

  const {
    slug,
    name,
    aboutProduct,
    advantage,
    disadvantages,
    nameUser,
    userCity,
    impression,
    reliability,
    functionality,
    quality,
    photoMatching,
    recommend,
    discommend,
    periodOfUseUser,
    frequencyOfUseUser,
    policyData,
  }: IReview = req.body;

  await db.connect();
  const newReview = new Review({
    slug,
    name,
    aboutProduct,
    advantage,
    disadvantages,
    nameUser,
    userCity,
    impression,
    reliability,
    functionality,
    quality,
    photoMatching,
    recommend,
    discommend,
    periodOfUseUser,
    frequencyOfUseUser,
    policyData,
  });

  const review = await newReview.save();
  await db.disconnect();
  res.status(201).send({
    _id: review._id,
    slug: review.slug,
    name: review.name,
    aboutProduct: review.aboutProduct,
    advantage: review.advantage,
    disadvantages: review.disadvantages,
    nameUser: review.nameUser,
    userCity: review.userCity,
    impression: review.impression,
    reliability: review.reliability,
    functionality: review.functionality,
    quality: review.quality,
    photoMatching: review.photoMatching,
    recommend: review.recommend,
    discommend: review.discommend,
    periodOfUseUser: review.periodOfUseUser,
    frequencyOfUseUser: review.frequencyOfUseUser,
    policyData: review.policyData,
  });
};

export default handler;
