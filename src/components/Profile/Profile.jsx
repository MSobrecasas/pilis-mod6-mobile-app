import { Box, ScrollView, VStack, FormControl, Input } from "native-base";
import React, { useContext } from "react";
import { COLORS, FONT_SIZE } from "../../utils/theme";
import MyButton from "../Buttons/MyButton";
import { UserContext } from "../../context/userContext";

const Profile = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const inputs = [
    {
      label: "USERNAME",
      type: "text",
      value: currentUser.username,
    },
    {
      label: "EMAIL",
      type: "email",
      value: currentUser.email,
    },
    {
      label: "PASSWORD",
      type: "password",
      value: currentUser.password,
    },
    {
      label: "CONFIRM PASSWORD",
      type: "password",
      value: currentUser.password,
    },
  ];
  return (
    <Box h="full" bg={COLORS.white} px={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={5} mt={5} pb={10}>
          {inputs.map((i, index) => (
            <FormControl key={index}>
              <FormControl.Label
                _text={{
                  fontSize: FONT_SIZE.md,
                  fontWeight: "bold",
                }}
              >
                {i.label}
              </FormControl.Label>
              <Input
                borderColor={COLORS.main}
                borderWidth={0.5}
                bg={COLORS.subGreen}
                py={3}
                color={COLORS.main}
                fontSize={FONT_SIZE.md}
                _focus={{
                  bg: COLORS.subGreen,
                  borderColor: COLORS.main,
                  borderWidth: 1,
                }}
                type={i.type}
                value={i.value}
              ></Input>
            </FormControl>
          ))}
          <MyButton bg={COLORS.main} color={COLORS.white}>
            UPDATE PROFILE
          </MyButton>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default Profile;
