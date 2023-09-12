import {
  Box,
  Button,
  Heading,
  Image,
  Input,
  Text,
  VStack,
  View,
} from "native-base";
import React from "react";
import { COLORS, FONT_SIZE } from "../../../utils/theme";
import { Entypo } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { useContext } from "react";
import { UserContext } from "../../../context/userContext";
import { useForm, Controller } from "react-hook-form";
import { getUsers } from "../../../api/user.service";

const LoginScreen = ({ navigation }) => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
      email: "",
      image: "",
      orders: [],
    },
  });

  const handleLogin = ({ username, password }) => {
    getUsers()
      .then((users) => {
        const user = users[0];
        if (username === user.username && password === user.password) {
          setCurrentUser(user);
          console.log(currentUser.orders);
          navigation.navigate("Bottom");
        } else {
          console.log("Incorrecto");
        }
      })
      .catch((err) => console.warn(err));
  };

  const handleSignOut = () => {
    setCurrentUser(null);
  };

  const loggedUser = () => (
    <>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            InputLeftElement={
              <Entypo name="email" size={FONT_SIZE.lg} color={COLORS.main} />
            }
            variant="underlined"
            placeholder="user@gmail.com"
            pl={2}
            w="70%"
            color={COLORS.main}
            borderBottomColor={COLORS.underline}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
          />
        )}
        name="username"
        rules={{ required: "El email es requerido" }}
      />
      {errors.username && (
        <Text color={COLORS.red}>{errors.username.message}</Text>
      )}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            InputLeftElement={
              <Entypo
                name="eye-with-line"
                size={FONT_SIZE.lg}
                color={COLORS.main}
              />
            }
            variant="underlined"
            placeholder="****"
            type="password"
            pl={2}
            w="70%"
            color={COLORS.main}
            borderBottomColor={COLORS.underline}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry
            autoCapitalize="none"
          />
        )}
        name="password"
        rules={{ required: "La constraseña es requerida" }}
      />
      {errors.password && (
        <Text color={COLORS.red}>{errors.password.message}</Text>
      )}
      <Button
        _pressed={{
          bg: COLORS.main,
        }}
        my={30}
        w="40%"
        rounded={50}
        color={COLORS.main}
        onPress={handleSubmit(handleLogin)}
      >
        LOGIN
      </Button>
      <Pressable mt={4} onPress={() => navigation.navigate("Register")}>
        <Text color={COLORS.deepestGRay}>SIGN UP</Text>
      </Pressable>
    </>
  );

  return (
    <Box flex={1} bg={COLORS.black}>
      <Image
        flex={1}
        alt="Logo"
        resizeMode="cover"
        w="full"
        source={require("../../../../assets/cover.jpg")}
      />
      <Box
        w="full"
        h="full"
        position="absolute"
        top="0"
        px="6"
        justifyContent="center"
      >
        <Heading>LOGIN</Heading>
        <VStack space={7} pt="10">
          {loggedUser()}
        </VStack>
      </Box>
    </Box>
  );
};
export default LoginScreen;
