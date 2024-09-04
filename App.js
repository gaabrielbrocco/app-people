import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ListaPersonagens from "./src/pages/ListaPersonagens";
import Detalhes from "./src/pages/Detalhes";
import Naves from "./src/pages/Naves";
import Filmes from "./src/pages/Filmes";
import Sobre from "./src/pages/Sobre";
import { StatusBar } from "react-native";

export default function App() {
  const Stack = createStackNavigator();

  <StatusBar barStyle="light-content" backgroundColor="#134B70" />;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ListaPersonagens" component={ListaPersonagens} />
        <Stack.Screen name="Detalhes" component={Detalhes} />
        <Stack.Screen name="Naves" component={Naves} />
        <Stack.Screen name="Filmes" component={Filmes} />
        <Stack.Screen name="Sobre" component={Sobre} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
