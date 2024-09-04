import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Naves({ route }) {
  const { starships } = route.params;
  const [naves, setNaves] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const buscaNaves = async () => {
      // ja busca antes e verifica se tem ou não naves
      // que assim não precisa processar
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
      <View>
        <Text>carregando...</Text>
      </View>
    );
  }

  if (!naves.length) {
    return (
      <View>
        <Text>Não há naves disponíveis para esse personagem!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {naves.map((nave) => {
        return (
          <View style={styles.datails}>
            <Text>{nave.name}</Text>
            <Text>{nave.model}</Text>
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
    padding: 20,
    backgroundColor: "#030712",
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
});
