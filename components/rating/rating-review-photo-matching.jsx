const RatingReviewPhotoMatching = ({ photoMatching, setPhotoMatching }) => {
  return (
    <div className="w-56">
      <div className="relative text-base inline-block before:content-['★★★★★'] before:block">
        <div className="absolute w-full h-full top-0 left-0 flex flex-row-reverse overflow-hidden">
          <input
            id="rating_review_5_p"
            className="review_item_photoMatching absolute top-0 left-0 w-0 h-0 opacity-0 invisible text-white"
            type="radio"
            name="rating_review_p"
            value="5"
            onChange={(e) => setPhotoMatching(e.target.value)}
          />
          <label
            htmlFor="rating_review_5_p"
            className={
              photoMatching
                ? "review_label_photoMatching flex flex-grow-0 flex-shrink-0 basis-1/5 h-full cursor-pointer text-gray-200 before:content-['★'] before:block transition-all"
                : "text-gray-200 before:content-['★'] before:block transition-all"
            }
          ></label>
          <input
            id="rating_review_4_p"
            className="review_item_photoMatching absolute top-0 left-0 w-0 h-0 opacity-0 invisible text-white"
            type="radio"
            name="rating_review_p"
            value="4"
            onChange={(e) => setPhotoMatching(e.target.value)}
          />
          <label
            htmlFor="rating_review_4_p"
            className={
              photoMatching
                ? "review_label_photoMatching flex flex-grow-0 flex-shrink-0 basis-1/5 h-full cursor-pointer text-gray-200 before:content-['★'] before:block transition-all"
                : "text-gray-200 before:content-['★'] before:block transition-all"
            }
          ></label>
          <input
            id="rating_review_3_p"
            className="review_item_photoMatching absolute top-0 left-0 w-0 h-0 opacity-0 invisible text-white"
            type="radio"
            name="rating_review_p"
            value="3"
            onChange={(e) => setPhotoMatching(e.target.value)}
          />
          <label
            htmlFor="rating_review_3_p"
            className={
              photoMatching
                ? "review_label_photoMatching flex flex-grow-0 flex-shrink-0 basis-1/5 h-full cursor-pointer text-gray-200 before:content-['★'] before:block transition-all"
                : "text-gray-200 before:content-['★'] before:block transition-all"
            }
          ></label>
          <input
            id="rating_review_2_p"
            className="review_item_photoMatching absolute top-0 left-0 w-0 h-0 opacity-0 invisible text-white"
            type="radio"
            name="rating_review_p"
            value="2"
            onChange={(e) => setPhotoMatching(e.target.value)}
          />
          <label
            htmlFor="rating_review_2_p"
            className={
              photoMatching
                ? "review_label_photoMatching flex flex-grow-0 flex-shrink-0 basis-1/5 h-full cursor-pointer text-gray-200 before:content-['★'] before:block transition-all"
                : "text-gray-200 before:content-['★'] before:block transition-all"
            }
          ></label>
          <input
            id="rating_review_1_p"
            className="review_item_photoMatching absolute top-0 left-0 w-0 h-0 opacity-0 invisible text-white"
            type="radio"
            name="rating_review_p"
            value="1"
            onChange={(e) => setPhotoMatching(e.target.value)}
          />
          <label
            htmlFor="rating_review_1_p"
            className={
              photoMatching
                ? "review_label_photoMatching flex flex-grow-0 flex-shrink-0 basis-1/5 h-full cursor-pointer text-gray-200 before:content-['★'] before:block transition-all"
                : "text-gray-200 before:content-['★'] before:block transition-all"
            }
          ></label>
        </div>
      </div>
    </div>
  );
};

export default RatingReviewPhotoMatching;
