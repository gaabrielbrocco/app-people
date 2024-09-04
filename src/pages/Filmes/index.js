import { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  ScrollView,
} from "react-native";

export default function Filmes({ route }) {
  const { films } = route.params;
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const buscaFilmes = async () => {
      if (!films.length) return;
      setLoading(true);

      const promises = films.map((films) =>
        fetch(films).then((res) => res.json())
      );
      setFilmes(await Promise.all(promises));
      setLoading(false);
    };

    buscaFilmes();

    return () => {
      setFilmes([]);
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

  if (!filmes.length) {
    return (
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>
          Não há filmes disponíveis para esse personagem!
        </Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        {filmes.map((filme) => {
          return (
            <View style={styles.cards} key={filme.title}>
              <View style={styles.datails}>
                <Text style={styles.text}>Título: {filme.title}</Text>
                <Text style={styles.text}>Diretor: {filme.director}</Text>
                <Text style={styles.text}>
                  Lançamento: {filme.release_date}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
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
