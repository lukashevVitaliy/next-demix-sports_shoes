const RatingReviewReliability = ({ reliability, setReliability }) => {
  return (
    <div className="w-56">
      <div className="relative text-base inline-block before:content-['★★★★★'] before:block">
        <div className="absolute w-full h-full top-0 left-0 flex flex-row-reverse overflow-hidden">
          <input
            id="rating_review_5_r"
            className="review_item_reliability absolute top-0 left-0 w-0 h-0 opacity-0 invisible text-white"
            type="radio"
            name="rating_review_r"
            value="5"
            onChange={(e) => setReliability(e.target.value)}
          />
          <label
            htmlFor="rating_review_5_r"
            className={
              reliability
                ? "review_label_reliability flex flex-grow-0 flex-shrink-0 basis-1/5 h-full cursor-pointer text-gray-200 before:content-['★'] before:block transition-all"
                : "text-gray-200 before:content-['★'] before:block transition-all"
            }
          ></label>
          <input
            id="rating_review_4_r"
            className="review_item_reliability absolute top-0 left-0 w-0 h-0 opacity-0 invisible text-white"
            type="radio"
            name="rating_review_r"
            value="4"
            onChange={(e) => setReliability(e.target.value)}
          />
          <label
            htmlFor="rating_review_4_r"
            className={
              reliability
                ? "review_label_reliability flex flex-grow-0 flex-shrink-0 basis-1/5 h-full cursor-pointer text-gray-200 before:content-['★'] before:block transition-all"
                : "text-gray-200 before:content-['★'] before:block transition-all"
            }
          ></label>
          <input
            id="rating_review_3_r"
            className="review_item_reliability absolute top-0 left-0 w-0 h-0 opacity-0 invisible text-white"
            type="radio"
            name="rating_review_r"
            value="3"
            onChange={(e) => setReliability(e.target.value)}
          />
          <label
            htmlFor="rating_review_3_r"
            className={
              reliability
                ? "review_label_reliability flex flex-grow-0 flex-shrink-0 basis-1/5 h-full cursor-pointer text-gray-200 before:content-['★'] before:block transition-all"
                : "text-gray-200 before:content-['★'] before:block transition-all"
            }
          ></label>
          <input
            id="rating_review_2_r"
            className="review_item_reliability absolute top-0 left-0 w-0 h-0 opacity-0 invisible text-white"
            type="radio"
            name="rating_review_r"
            value="2"
            onChange={(e) => setReliability(e.target.value)}
          />
          <label
            htmlFor="rating_review_2_r"
            className={
              reliability
                ? "review_label_reliability flex flex-grow-0 flex-shrink-0 basis-1/5 h-full cursor-pointer text-gray-200 before:content-['★'] before:block transition-all"
                : "text-gray-200 before:content-['★'] before:block transition-all"
            }
          ></label>
          <input
            id="rating_review_1_r"
            className="review_item_reliability absolute top-0 left-0 w-0 h-0 opacity-0 invisible text-white"
            type="radio"
            name="rating_review_r"
            value="1"
            onChange={(e) => setReliability(e.target.value)}
          />
          <label
            htmlFor="rating_review_1_r"
            className={
              reliability
                ? "review_label_reliability flex flex-grow-0 flex-shrink-0 basis-1/5 h-full cursor-pointer text-gray-200 before:content-['★'] before:block transition-all"
                : "text-gray-200 before:content-['★'] before:block transition-all"
            }
          ></label>
        </div>
      </div>
    </div>
  );
};

export default RatingReviewReliability;
