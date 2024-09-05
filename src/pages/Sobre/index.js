import React, { useRef, useEffect } from 'react';
import { View, Text, Animated, StyleSheet, Dimensions, Easing, Image } from 'react-native';
import gremio from "../../../assets/gremio.jpg"

const { height } = Dimensions.get('window');

export default function Sobre() {
  const animatedValue = useRef(new Animated.Value(height * 1)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: -height,
      duration: 40000, 
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();
  }, [animatedValue]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.textContainer, { transform: [{ translateY: animatedValue }] }]}>
        <Text style={styles.text}>
          Há muito tempo, em uma galáxia muito, muito distante... {'\n\n'}
          Dois estudantes desenvolveram um aplicativo para consumir uma API do Star Wars.{'\n\n'}
          Bernardo Sozo Fattini e Gabriel Brocco de Oliveira.{'\n\n'}
          {'\n\n'}
          Com os E-Mails e RAs: 1134300@atitus.edu.br e 1135058@atitus.edu.br, respectivamente.{'\n\n'}
          {'\n\n'}
          {'\n\n'}
          {'\n\n'}
          Obrigado!
        </Text>
        <View style={styles.image}>
          <Image 
            source={gremio}/>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    position: 'absolute',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  text: {
    color: 'yellow',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
    justifyContent: 'center',
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: 50
  }
});
