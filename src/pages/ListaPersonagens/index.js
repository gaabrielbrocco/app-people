import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ListaPersonagens({ navigation }) {
  const [personagem, setPersonagem] = useState([]);

  useEffect(() => {
    obterDados();
  }, []);

  async function obterDados() {
    try {
      const response = await axios.get("https://swapi.dev/api/people/");
      const limit = 6;
      const limitaPersonagens = response?.data?.results.slice(0, limit);
      setPersonagem(limitaPersonagens);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={personagem}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                navigation.navigate("Detalhes", {
                  name: item.name,
                  height: item.height,
                  mass: item.mass,
                  hair_color: item.hair_color,
                  skin_color: item.skin_color,
                  eye_color: item.eye_color,
                  starships: item.starships,
                  films: item.films,
                })
              }
            >
              <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#282C34",
  },
  button: {
    backgroundColor: "#f96527",
    padding: 30,
    marginTop: 25,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    width: 300,
  },
  text: {
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
  },
});
