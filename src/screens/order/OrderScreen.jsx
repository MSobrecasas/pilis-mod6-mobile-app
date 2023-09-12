import { Box, Heading, ScrollView } from "native-base";
import React from "react";
import { COLORS, FONT_SIZE } from "../../utils/theme";
import OrderInfo from "../../components/order/OrderInfo";
import OrderItem from "../../components/order/OrderItem";
import OrderModel from "../../components/order/OrderModel";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const OrderScreen = () => {
  const navigation = useNavigation();
  return (
    <Box bg={COLORS.subGreen} flex={1} safeArea pt={6}>
      <Box>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <OrderInfo
            title="CUSTOMER"
            subtitle={"admin doe"}
            text={"text exmple"}
            icon={
              <MaterialCommunityIcons
                name="hamburger-check"
                size={24}
                color="black"
              />
            }
            success
          />
          <OrderInfo
            title="OrdenInfo"
            subtitle={"shiping"}
            text={"text exmple22"}
            icon={
              <MaterialCommunityIcons
                name="hamburger-check"
                size={24}
                color="black"
              />
            }
            danger
          />
        </ScrollView>
      </Box>
      <Box px={6} flex={1} pb={3}>
        <Heading bold fontSize={15} isTruncated my={4}>
          Products ORDER
        </Heading>
        <OrderItem />
        <OrderModel />
      </Box>
    </Box>
  );
};
export default OrderScreen;
