const RatingReviewImpression = ({ impression, setImpression }) => {
  return (
    <div className="w-56">
      <div className="relative text-base inline-block before:content-['★★★★★'] before:block">
        <div className="absolute w-full h-full top-0 left-0 flex flex-row-reverse overflow-hidden">
          <input
            id="rating_review_5_i"
            className="review_item_impression absolute top-0 left-0 w-0 h-0 opacity-0 invisible text-white"
            type="radio"
            name="rating_review_i"
            value="5"
            onChange={(e) => setImpression(e.target.value)}
          />
          <label
            htmlFor="rating_review_5_i"
            className={
              impression
                ? "review_label_impression flex flex-grow-0 flex-shrink-0 basis-1/5 h-full cursor-pointer text-gray-200 before:content-['★'] before:block transition-all"
                : "text-gray-200 before:content-['★'] before:block transition-all"
            }
          ></label>
          <input
            id="rating_review_4_i"
            className="review_item_impression absolute top-0 left-0 w-0 h-0 opacity-0 invisible text-white"
            type="radio"
            name="rating_review_i"
            value="4"
            onChange={(e) => setImpression(e.target.value)}
          />
          <label
            htmlFor="rating_review_4_i"
            className={
              impression
                ? "review_label_impression flex flex-grow-0 flex-shrink-0 basis-1/5 h-full cursor-pointer text-gray-200 before:content-['★'] before:block transition-all"
                : "text-gray-200 before:content-['★'] before:block transition-all"
            }
          ></label>
          <input
            id="rating_review_3_i"
            className="review_item_impression absolute top-0 left-0 w-0 h-0 opacity-0 invisible text-white"
            type="radio"
            name="rating_review_i"
            value="3"
            onChange={(e) => setImpression(e.target.value)}
          />
          <label
            htmlFor="rating_review_3_i"
            className={
              impression
                ? "review_label_impression flex flex-grow-0 flex-shrink-0 basis-1/5 h-full cursor-pointer text-gray-200 before:content-['★'] before:block transition-all"
                : "text-gray-200 before:content-['★'] before:block transition-all"
            }
          ></label>
          <input
            id="rating_review_2_i"
            className="review_item_impression absolute top-0 left-0 w-0 h-0 opacity-0 invisible text-white"
            type="radio"
            name="rating_review_i"
            value="2"
            onChange={(e) => setImpression(e.target.value)}
          />
          <label
            htmlFor="rating_review_2_i"
            className={
              impression
                ? "review_label_impression flex flex-grow-0 flex-shrink-0 basis-1/5 h-full cursor-pointer text-gray-200 before:content-['★'] before:block transition-all"
                : "text-gray-200 before:content-['★'] before:block transition-all"
            }
          ></label>
          <input
            id="rating_review_1_i"
            className="review_item_impression absolute top-0 left-0 w-0 h-0 opacity-0 invisible text-white"
            type="radio"
            name="rating_review_i"
            value="1"
            onChange={(e) => setImpression(e.target.value)}
          />
          <label
            htmlFor="rating_review_1_i"
            className={
              impression
                ? "review_label_impression flex flex-grow-0 flex-shrink-0 basis-1/5 h-full cursor-pointer text-gray-200 before:content-['★'] before:block transition-all"
                : "text-gray-200 before:content-['★'] before:block transition-all"
            }
          ></label>
        </div>
      </div>
    </div>
  );
};

export default RatingReviewImpression;
