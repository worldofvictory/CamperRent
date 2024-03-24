import {
  Avatar,
  Comment,
  NameRatingWrap,
  ReviewHead,
  Reviewer,
  ReviewersList,
  StarsList,
} from "./Rewievs.styled";
import { FeatureReviewsWrap } from "../Features/Features.styled";
import { StarIcon } from "../../icons"

const Reviews = ({ card }) => {
  return (
    <FeatureReviewsWrap>
      <ReviewersList>
        {card.reviews.map(({ reviewer_name, reviewer_rating, comment }, i) => (
          <Reviewer key={`${reviewer_name}/${i}`}>
            <ReviewHead>
              <Avatar>{reviewer_name.slice(0, 1)}</Avatar>
              <NameRatingWrap>
                <p>{reviewer_name}</p>
                <StarsList>
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                        <li key={i}>
                            <StarIcon
              width={14}
              height={14}
              fillColor={"var(--star)"}
            />
                        
                      </li>
                    ))}
                </StarsList>
              </NameRatingWrap>
            </ReviewHead>
            <Comment>{comment}</Comment>
          </Reviewer>
        ))}
      </ReviewersList>
    </FeatureReviewsWrap>
  );
};

export default Reviews;