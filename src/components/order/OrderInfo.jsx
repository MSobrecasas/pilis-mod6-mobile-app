import { Center, Heading, ScrollView, Text, View } from "native-base";
import React from "react";
import { COLORS, FONT_SIZE } from "../../utils/theme";

const OrderInfo = ({ icon, title, subtitle, text, success, danger }) => {
  return (
    <Center
      bg={COLORS.white}
      w={200}
      py={2}
      rounded={10}
      shadow={4}
      mb={2}
      ml={5}
      mr={1}
      px={4}
    >
      <Center bg={COLORS.main} w={60} h={60} rounded="full">
        {icon}
      </Center>
      <Heading
        bold
        fontSize={FONT_SIZE.sm}
        isTruncated
        mt={3}
        mb={2}
        color={COLORS.black}
      >
        {title}
      </Heading>
      <Text fontSize={FONT_SIZE.sm} color={COLORS.black}>
        {subtitle}
      </Text>
      {success && (
        <Center py={2} mt={2} rounded={5} w="full" bg={COLORS.blue}>
          <Text fontSize={FONT_SIZE.sm} color={COLORS.white}>
            Paid on Jan 31 2030
          </Text>
        </Center>
      )}

      {danger && (
        <Center py={2} mt={2} rounded={5} w="full" bg={COLORS.red}>
          <Text fontSize={FONT_SIZE.sm} color={COLORS.white}>
            Not delivery
          </Text>
        </Center>
      )}
      <Text
        fontSize={FONT_SIZE.sm}
        color={COLORS.black}
        textAlign="center"
        italic
      >
        {text}
      </Text>
    </Center>
  );
};

export default OrderInfo;
