import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Detalhes({ navigation, route }) {
  return (
    <View style={styles.container}>
      <View style={styles.datails}>
        <Text style={styles.text}>Nome Completo: {route.params.name}</Text>
        <Text style={styles.text}>Altura: {route.params.height}</Text>
        <Text style={styles.text}>Peso: {route.params.mass}</Text>
        <Text style={styles.text}>
          Cor do cabelo: {route.params.hair_color}
        </Text>
        <Text style={styles.text}>Cor da pele: {route.params.skin_color}</Text>
        <Text style={styles.text}>Cor do olho: {route.params.eye_color}</Text>
      </View>

      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("Naves", { starships: route.params.starships })
          }
        >
          <Text>NAVES</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Filmes")}
        >
          <Text>FILMES</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#030712",
  },
  text: {
    fontSize: 20,
    marginBottom: 2,
    fontWeight: "bold",
  },
  datails: {
    backgroundColor: "#fff",
    borderRadius: 12,
    margin: 20,
    padding: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
  button: {
    backgroundColor: "orange",
    padding: 20,
    marginTop: 15,
    borderRadius: 8,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
  },
});
