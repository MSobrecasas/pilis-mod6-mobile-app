import { Box, Button, HStack, Pressable, ScrollView, Text } from "native-base";
import React, { useContext } from "react";
import { COLORS, FONT_SIZE } from "../../utils/theme";
import { UserContext } from "../../context/userContext";

const Orders = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  return (
    <Box h="full" bg={COLORS.white} pt={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {currentUser.orders.map((order) => (
          <Pressable key={order.id}>
            <HStack
              space={4}
              justifyContent="space-between"
              alignItems="center"
              bg={COLORS.deepGray}
              py={2}
              px={2}
            >
              <Text fontSize={FONT_SIZE.sm} color={COLORS.blue} isTruncated>
                {order.id}
              </Text>
              <Text
                fontSize={FONT_SIZE.md}
                color={COLORS.black}
                bold
                isTruncated
              >
                {order.status ? "PAID" : "NOT PAID"}
              </Text>
              <Text
                fontSize={FONT_SIZE.md}
                color={COLORS.black}
                italic
                isTruncated
              >
                {order.date}
              </Text>
              <Button
                px={7}
                py={0.5}
                bg={order.status ? COLORS.main : COLORS.red}
                rounded={50}
                _pressed={{
                  bg: COLORS.main,
                }}
              >
                <Text color={COLORS.white}>${order.amount}</Text>
              </Button>
            </HStack>
          </Pressable>
        ))}
      </ScrollView>
    </Box>
  );
};

export default Orders;
