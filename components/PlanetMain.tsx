import { useState } from "react";
import { View, TouchableOpacity, Modal, Text, StyleSheet } from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import PlanetModal from "./PlanetModal";
import PlanetSearch from "./PlanetSearch";
import PlanetList from "./PlanetList";

type Props = {
  home: boolean;
};

const PlanetMain = ({ home }: Props) => {
  const colorScheme = useColorScheme();
  const [showModal, setShowModal] = useState(false);
  const [info, setInfo] = useState<any>({});
  const [alphabetically, setAlphabetically] = useState(true);
  const [text, setText] = useState("");

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        marginTop: 10,
      }}
    >
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent
          visible={showModal}
          onRequestClose={() => setShowModal(!showModal)}
        >
          <PlanetModal name={info} setShowModal={setShowModal} />
        </Modal>
        <TouchableOpacity
          style={{
            marginVertical: 10,
            backgroundColor:
              colorScheme === "dark" ? Colors.PRIMARYDARK : Colors.PRIMARY,
            borderRadius: 10,
            paddingVertical: 15,
            paddingHorizontal: 40,
          }}
          onPress={() => setAlphabetically(!alphabetically)}
        >
          <FontAwesome
            name={`sort-alpha-${alphabetically ? "de" : "a"}sc`}
            size={24}
            color="white"
          />
        </TouchableOpacity>
        <PlanetSearch setText={setText} text={text} />
        <PlanetList
          setShowModal={setShowModal}
          alphabetically={alphabetically}
          text={text}
          home={home}
          setInfo={setInfo}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: 700,
  },
});

export default PlanetMain;
