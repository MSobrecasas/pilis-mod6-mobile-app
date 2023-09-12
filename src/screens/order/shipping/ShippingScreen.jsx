import {
  Box,
  Center,
  FormControl,
  Input,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import React from "react";
import { COLORS, FONT_SIZE } from "../../../utils/theme";
import MyButton from "../../../components/Buttons/MyButton";
import { useNavigation } from "@react-navigation/native";

const inputs = [
  {
    label: "ENTER CITY",
    type: "text",
  },
  {
    label: "ENTER COUNTRY",
    type: "text",
  },
  {
    label: "POSTAL CODE",
    type: "text",
  },
  {
    label: "ADDRESS",
    type: "text",
  },
];

const ShippingScreen = () => {
  const navigation = useNavigation();
  return (
    <Box flex={1} safeAreaTop bg={COLORS.main} py={5}>
      <Center pb={15}>
        <Text color={COLORS.white} fontSize={FONT_SIZE.md} bold>
          DELIVERY ADDRESS
        </Text>
      </Center>
      <Box h="full" bg={COLORS.white} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {inputs.map((i, index) => (
              <FormControl key={index}>
                <FormControl.Label
                  _text={{
                    fontSize: FONT_SIZE.sm,
                    fontWeight: "bold",
                  }}
                >
                  {i.label}
                </FormControl.Label>
                <Input
                  borderWidth={0.5}
                  borderColor={COLORS.main}
                  bg={COLORS.subGreen}
                  py={4}
                  color={COLORS.main}
                  type={i.type}
                  _focus={{
                    bg: COLORS.subGreen,
                    borderWidth: 1,
                    borderColor: COLORS.main,
                  }}
                />
              </FormControl>
            ))}
            <MyButton
              onPress={() => navigation.navigate("CheckOut")}
              bg={COLORS.main}
              color={COLORS.white}
            >
              CONTINUE
            </MyButton>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
};

export default ShippingScreen;
