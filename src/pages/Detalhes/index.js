import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

export default function Detalhes({ navigation, route }) {
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <View style={styles.card}>
          <Text style={styles.textTitle}>Nome Completo:</Text>
          <Text style={styles.text}>{route.params.name}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.textTitle}>Altura:</Text>
          <Text style={styles.text}>{route.params.height}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.textTitle}>Peso:</Text>
          <Text style={styles.text}>{route.params.mass}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.textTitle}>Cor do cabelo:</Text>
          <Text style={styles.text}>{route.params.hair_color}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.textTitle}>Cor da pele:</Text>
          <Text style={styles.text}>{route.params.skin_color}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.textTitle}>Cor do olho:</Text>
          <Text style={styles.text}>{route.params.eye_color}</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("Naves", { starships: route.params.starships })
          }
        >
          <Text style={styles.textButton}>NAVES</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("Filmes", { films: route.params.films })
          }
        >
          <Text style={styles.textButton}>FILMES</Text>
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
    backgroundColor: "#282C34",
  },
  details: {
    backgroundColor: "#EEEEEE",
    borderRadius: 12,
    margin: 20,
    padding: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
  card: {
    marginBottom: 20,
    alignItems: "center",
  },
  textTitle: {
    fontSize: 20,
    marginBottom: 2,
    fontWeight: "bold",
  },
  text: {
    fontSize: 20,
    marginBottom: 2,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#f96527",
    padding: 20,
    marginTop: 15,
    borderRadius: 8,
    width: "45%",
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
