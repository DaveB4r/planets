import {
  ActivityIndicator,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";

type Props = {
  name: string;
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

const PlanetModal = ({ name, setShowModal }: Props) => {
  const colorScheme = useColorScheme();
  const colorPrimary =
    colorScheme === "dark" ? Colors.PRIMARYDARK : Colors.PRIMARY;
  const colorText = colorScheme === "dark" ? "#fff" : "#000";
  const colorBackground = colorScheme === "dark" ? "#000" : "#fff";

  const [info, setInfo] = useState<any>({});
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    GetInfo();
  }, []);

  const GetInfo = async () => {
    setLoading(true);
    const imageResponse = await fetch(
      `https://api.unsplash.com/search/photos/?page=1&query=${name}&per_page=1&client_id=${process.env.EXPO_PUBLIC_UNSPLASH_CLIENT_ID}`
    );
    const imageData = await imageResponse.json();
    const response = await fetch(
      `https://api.le-systeme-solaire.net/rest/bodies?filter[]=englishName,eq,${name}`
    );
    const data = await response.json();
    setImage(imageData?.results[0]?.urls?.thumb);
    setInfo(data?.bodies[0]);
    setLoading(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.centeredView}>
      <View
        style={[
          {
            backgroundColor: colorBackground,
          },
          styles.modalView,
        ]}
      >
        <Pressable
          style={{
            alignSelf: "flex-end",
            padding: 0,
            marginBottom: 20,
            marginRight: -10,
          }}
          onPress={() => setShowModal((showModal) => !showModal)}
        >
          <Ionicons name="close" size={30} color={colorText} />
        </Pressable>
        {loading ? (
          <ActivityIndicator size={"large"} color={colorPrimary} />
        ) : (
          <View
            style={[
              styles.card,
              {
                borderColor: colorPrimary,
              },
            ]}
          >
            <View style={styles.body}>
              <Text style={[styles.title, { color: colorText }]}>{name}</Text>
              {image && (
                <Image
                  source={{ uri: image }}
                  alt={name}
                  style={{
                    width: 300,
                    height: 200,
                  }}
                  resizeMode="contain"
                />
              )}
              <View style={styles.info}>
                <Text style={styles.text}>
                  <Text style={styles.title}>mass: </Text>
                  {info?.mass?.massValue}
                </Text>
                <Text style={styles.text}>
                  <Text style={styles.title}>volume: </Text>
                  {info?.vol?.volValue}
                </Text>
                <Text style={styles.text}>
                  <Text style={styles.title}>inclination: </Text>
                  {info?.inclination}
                </Text>
                <Text style={styles.text}>
                  <Text style={styles.title}>density: </Text>
                  {info?.density}
                </Text>
                <Text style={styles.text}>
                  <Text style={styles.title}>gravity: </Text>
                  {info?.gravity}
                </Text>
                <Text style={styles.text}>
                  <Text style={styles.title}>escape: </Text>
                  {info?.escape}
                </Text>
                <Text style={styles.text}>
                  <Text style={styles.title}>mean Radius: </Text>
                  {info?.meanRadius}
                </Text>
                <Text style={styles.text}>
                  <Text style={styles.title}>equa Radius: </Text>
                  {info?.equaRadius}
                </Text>
                <Text style={styles.text}>
                  <Text style={styles.title}>flattening: </Text>
                  {info?.flattening}
                </Text>
                <Text style={styles.text}>
                  <Text style={styles.title}>sideral Orbit: </Text>
                  {info?.sideralOrbit}
                </Text>
                <Text style={styles.text}>
                  <Text style={styles.title}>sideral Rotation: </Text>
                  {info?.sideralRotation}
                </Text>
                <Text style={styles.text}>
                  <Text style={styles.title}>average Temperature: </Text>
                  {info?.avgTemp}
                </Text>
                <Text style={styles.text}>
                  <Text style={styles.title}>body type: </Text>
                  {info?.bodyType}
                </Text>
              </View>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
  },
  centeredView: {
    justifyContent: "center",
  },
  modalView: {
    margin: 20,
    borderRadius: 20,
    padding: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  card: {
    borderWidth: 2,
    borderRadius: 15,
    padding: 15,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  body: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 15,
  },
  info: {
    marginVertical: 10,
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 25,
    fontWeight: 900,
    textTransform: "capitalize",
  },
  text: {
    textAlign: "left",
    fontSize: 18,
    fontWeight: 500,
  },
});

export default PlanetModal;
