import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export const ProductCard = ({ product }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.imageUrl }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    alignItems: "center",
    width: 160,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 }, // Más sombra para darle profundidad
    shadowOpacity: 0.2, // Más difusa
    shadowRadius: 6, // Más difusa
    elevation: 5, // Mayor elevación en Android
    transform: [{ scale: 1.05 }],
    transition: 'transform 0.2s ease, box-shadow 0.3s ease', // Efecto suave de escala y sombra
  },
  cardHovered: {
    transform: [{ scale: 1.1 }], // Aumenta el tamaño cuando se pasa el ratón
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 10, // Sombra más pronunciada
    elevation: 8,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 2, // Borde más pronunciado
    borderColor: "#ddd", // Color de borde suave
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
    textAlign: "center",
    textTransform: 'uppercase', // Poner nombre en mayúsculas para darle un toque más moderno
    letterSpacing: 1, // Espaciado entre letras
  },
  price: {
    fontSize: 14,
    color: "#6250ff",
    marginBottom: 10,
    fontWeight: "600", // Peso de fuente ligeramente mayor para resaltar el precio
  },
});
