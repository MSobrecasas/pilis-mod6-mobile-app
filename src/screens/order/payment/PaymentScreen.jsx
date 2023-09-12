import {
  Box,
  Center,
  HStack,
  Image,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import React from "react";
import { COLORS, FONT_SIZE } from "../../../utils/theme";
import MyButton from "../../../components/Buttons/MyButton";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const paymentMethods = [
  {
    image: require("../../../../assets/efectivo.png"),
    alt: "efectivo",
    icon: "AntDesign",
  },
  {
    image: require("../../../../assets/tarjeta.png"),
    alt: "tarjeta",
    icon: "AntDesing",
  },
  {
    image: require("../../../../assets/transferencia.png"),
    alt: "transderencia",
    icon: "AntDesing",
  },
];

const PaymentScreen = () => {
  const navigation = useNavigation();
  return (
    <Box flex={1} safeAreaTop bg={COLORS.main} py={5}>
      <Center pb={15}>
        <Text color={COLORS.white} fontSize={FONT_SIZE.md} bold>
          PAYMENT MTHOD
        </Text>
      </Center>
      <Box h="full" bg={COLORS.subGreen} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {paymentMethods.map((i, index) => (
              <HStack
                key={index}
                alignItems="center"
                bg={COLORS.white}
                px={3}
                py={1}
                rounded={10}
                justifyContent="space-between"
              >
                <Box>
                  <Image
                    alt={i.alt}
                    resizeMode="contain"
                    w={60}
                    h={50}
                    source={i.image}
                  />
                </Box>
                {i.icon === "AntDesign" ? (
                  <AntDesign
                    name="checkcircle"
                    size={FONT_SIZE.lg}
                    color={COLORS.main}
                  />
                ) : (
                  <FontAwesome
                    name="circle-thin"
                    size={FONT_SIZE.lg}
                    color={COLORS.main}
                  />
                )}
              </HStack>
            ))}

            <MyButton
              onPress={() => navigation.navigate("PlaceOrder")}
              bg={COLORS.main}
              color={COLORS.white}
            >
              CONTINUE
            </MyButton>
            <Text italic textAlign="center">
              Payment method is <Text bold>cash</Text> by default
            </Text>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
};

export default PaymentScreen;
