import { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

export default function Naves({ route }) {
  const { starships } = route.params;
  const [naves, setNaves] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const buscaNaves = async () => {
      if (!starships.length) return;
      setLoading(true);

      const promises = starships.map((starship) =>
        fetch(starship).then((res) => res.json())
      );
      setNaves(await Promise.all(promises));
      setLoading(false);
    };

    buscaNaves();

    return () => {
      setNaves([]);
    };
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#f96527" />
        <Text style={styles.loadingText}>Carregando...</Text>
      </View>
    );
  }

  if (!naves.length) {
    return (
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>
          Não há naves disponíveis para esse personagem!
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {naves.map((nave) => {
        return (
          <View style={styles.cards} key={nave.name}>
            <View style={styles.datails}>
              <Text style={styles.text}>Nome: {nave.name}</Text>
              <Text style={styles.text}>Modelo: {nave.model}</Text>
              <Text style={styles.text}>Passageiros: {nave.passengers}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#282C34",
    padding: 20,
  },
  datails: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  text: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: "bold",
    color: "#333333",
  },
  cards: {
    marginTop: 20,
    backgroundColor: "#F5F5F5",
    borderRadius: 16,
    padding: 15,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#282C34",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  messageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#282C34",
  },
  messageText: {
    fontSize: 18,
    color: "#FFFFFF",
    textAlign: "center",
    marginHorizontal: 20,
  },
});
