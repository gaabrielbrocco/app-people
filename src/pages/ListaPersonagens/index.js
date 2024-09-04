import { FlatList, Button, View } from "react-native";
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
      const limit = 10;
      const limitaPersonagens = response?.data?.results.slice(0, limit);
      setPersonagem(limitaPersonagens);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View>
      <FlatList
        data={personagem}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Button
            title={item.name}
            onPress={() =>
              navigation.navigate("Detalhes", {
                name: item.name,
                height: item.height,
                mass: item.mass,
                hair_color: item.hair_color,
                skin_color: item.skin_color,
                eye_color: item.eye_color,
                starships: item.starships,
              })
            }
          />
        )}
      />
    </View>
  );
}
