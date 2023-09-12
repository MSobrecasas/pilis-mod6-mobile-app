import { Button, Center, HStack, Modal, Text, VStack, View } from "native-base";
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

const PlaceOrderModel = () => {
  const [showModel, setShowModel] = useState(false);
  const navigation = useNavigation();

  return (
    <Center>
      <MyButton
        onPress={() => setShowModel(true)}
        bg={COLORS.black}
        color={COLORS.white}
        mt={5}
      >
        SHOW TOTAL
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
            <Button
              flex={1}
              bg={COLORS.main}
              h={45}
              _text={{
                color: COLORS.white,
              }}
              _pressed={{
                bg: COLORS.main,
              }}
              onPress={() => {
                navigation.navigate("Order");
                setShowModel(false);
              }}
            >
              PLACE AND ORDER
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default PlaceOrderModel;
