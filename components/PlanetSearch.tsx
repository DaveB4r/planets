import { Dispatch, SetStateAction } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useColorScheme } from '@/hooks/useColorScheme';
import { EvilIcons, AntDesign } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

type Props = {
  setText: Dispatch<SetStateAction<string>>;
  text: string;
};

const PlanetSearch = ({setText, text}: Props) => {
  const colorScheme = useColorScheme();
  return (
    <View
      style={styles.container}
    >
      <EvilIcons name='search' size={24} color={colorScheme === 'dark' ? Colors.PRIMARYDARK : Colors.PRIMARY} />
      <TextInput
        placeholder="Search..."
        onChangeText={text => setText(text)}
        value={text}
        style={styles.input}
        autoFocus
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    padding: 10,
    marginTop: 10,
    borderRadius: 8,
    width: "90%"
  },
  input: {
    fontSize: 16,
    width: "100%"
  }
});

export default PlanetSearch;
