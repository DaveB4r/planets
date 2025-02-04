import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Dispatch, SetStateAction } from "react";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useAppContext } from "@/provider/AppProvider";

type Props = {
  name: string;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setInfo: Dispatch<SetStateAction<string>>;
};

const PlanetCard = ({ name, setShowModal, setInfo }: Props) => {
  const colorScheme = useColorScheme();
  const { favorites, addFavorite, removeFavorite } = useAppContext();

  const handleFavorites = (value: string) => {
    favorites.includes(value) ? removeFavorite(value) : addFavorite(value);
  };

  return (
    <View
      style={[
        styles.container,
        {
          borderColor:
            colorScheme === "dark" ? Colors.PRIMARYDARK : Colors.PRIMARY,
        },
      ]}
    >
      <TouchableOpacity
        onPress={() => {
          setShowModal(true);
          setInfo(name);
        }}
        style={[
          styles.btn,
          {
            borderColor:
              colorScheme === "dark" ? Colors.PRIMARYDARK : Colors.PRIMARY,
          },
        ]}
      >
        <Text
          style={[
            styles.btnText,
            {
              color: colorScheme === "dark" ? "#fff" : "#000",
            },
          ]}
        >
          {name}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleFavorites(name)}>
        <Ionicons
          name={`${favorites.includes(name) ? "star" : "star-outline"}`}
          size={24}
          color="#BEBE23"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginLeft: 20,
    width: "90%",
    height: 60,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
  },
  btn: {
    display: "flex",
    justifyContent: "center",
    width: '90%',
    height: '100%'
  },
  btnText: {
    fontSize: 25,
    fontWeight: 900,
  },
});

export default PlanetCard;
