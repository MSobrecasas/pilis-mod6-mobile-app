import {
  Button,
  Center,
  HStack,
  Image,
  Modal,
  Pressable,
  Text,
  VStack,
  View,
} from "native-base";
import React, { useState } from "react";
import MyButton from "../Buttons/MyButton";
import { COLORS, FONT_SIZE } from "../../utils/theme";
import { useNavigation } from "@react-navigation/native";

const ordersInfo = [
  {
    title: "products",
    price: 123.2,
    color: "black",
  },
  {
    title: "shipping",
    price: 123.2,
    color: "black",
  },
  {
    title: "Tax",
    price: 163.2,
    color: "black",
  },
  {
    title: "Total Amount",
    price: 923.2,
    color: "main",
  },
];

const OrderModel = () => {
  const [showModel, setShowModel] = useState(false);
  const navigation = useNavigation();
  return (
    <Center>
      <MyButton
        onPress={() => setShowModel(true)}
        bg={COLORS.main}
        color={COLORS.white}
        mt={5}
      >
        SHOW PAYMENT & TOTAL
      </MyButton>
      <Modal isOpen={showModel} onClose={() => setShowModel(false)} size="lg">
        <Modal.Content maxWidth={350}>
          <Modal.CloseButton />
          <Modal.Header>Order</Modal.Header>
          <Modal.Body>
            <VStack space={7}>
              {ordersInfo.map((i, index) => (
                <HStack alignItems="center" justifyContent="space-between">
                  <Text fontWeight="medium">{i.title}</Text>
                  <Text
                    color={i.color === "main" ? COLORS.main : COLORS.black}
                    bold
                    fontSize={FONT_SIZE.md}
                  >
                    ${i.price}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Pressable
              w="full"
              justifyContent="center"
              bg={COLORS.paypal}
              h={45}
              onPress={() => setShowModel(false)}
              rounded={5}
              overflow="hidden"
            >
              <Image
                source={require("../../../assets/splash.png")}
                alt="payplal"
                resizeMode="contain"
                w="full"
                h={34}
              />
            </Pressable>
            <Button
              w="full"
              mt={2}
              bg={COLORS.main}
              h={45}
              _text={{
                color: COLORS.white,
              }}
              onPress={() => {
                navigation.navigate("Home");
                setShowModel(false);
              }}
              _pressed={{
                bg: COLORS.main,
              }}
            >
              PAY LATER
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default OrderModel;
