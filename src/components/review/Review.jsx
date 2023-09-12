import { Box, Heading, Text } from "native-base";
import React, { useState } from "react";
import { COLORS, FONT_SIZE } from "../../utils/theme";
import Rating from "../rating/Rating";
import Message from "../Notification/Message";

const Review = ({ review }) => {
  const [rating, setRating] = useState("");
  return (
    <Box my={2}>
      <Box p={3} bg={COLORS.deepestGRay} mt={5} rounded={5}>
        <Heading fontSize={FONT_SIZE.md} color={COLORS.black}>
          {review.user}
        </Heading>

        <Rating value={review.rating} />
        <Message
          color={COLORS.black}
          bg={COLORS.white}
          size={FONT_SIZE.md}
          children={review.message}
        />
      </Box>
    </Box>
  );
};

export default Review;
