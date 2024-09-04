import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ListaPersonagens from "./src/pages/ListaPersonagens";
import Detalhes from "./src/pages/Detalhes";
import Naves from "./src/pages/Naves";
import Filmes from "./src/pages/Filmes";
import Sobre from "./src/pages/Sobre";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ListaPersonagens"
          component={ListaPersonagens}
          options={({ navigation }) => ({
            title: 'Lista de Personagens',
            headerRight: () => (
              <TouchableOpacity
                style={styles.buttonSobre}
                onPress={() => navigation.navigate("Sobre")}
                color="#000"
              >
                <Text style={styles.textButton}>Sobre</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name="Detalhes" component={Detalhes} />
        <Stack.Screen name="Naves" component={Naves} />
        <Stack.Screen name="Filmes" component={Filmes} />
        <Stack.Screen name="Sobre" component={Sobre} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  buttonSobre: {
    marginRight: 10,
    borderRadius: 20, 
    paddingHorizontal: 12, 
    paddingVertical: 8, 
    backgroundColor: '#282C34',
  },
  
  textButton: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  }
});
