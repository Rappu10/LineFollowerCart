import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Login"); // Ir al Login después de 3 segundos
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Text style={styles.text}>Cargando...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333', // Fondo oscuro metálico
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 30,
    borderRadius: 20, // Bordes redondeados para el logo
    borderWidth: 3,
    borderColor: '#625dff', // Azul metálico como borde
    backgroundColor: '#444', // Fondo oscuro en el logo
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 5 },
  },
  text: {
    fontSize: 22,
    color: '#f5f5f5', // Blanco metálico
    fontWeight: '600',
    letterSpacing: 1.5,
    textTransform: 'uppercase', // Texto en mayúsculas para darle un toque más formal
  },
});
