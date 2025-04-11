import React, { useState } from "react";
import { View, Text, FlatList, Image, ScrollView, StyleSheet, TouchableOpacity, Animated } from "react-native";

const categories = [
  { id: "1", title: "Codigo", imageUrl: "https://embedwiz.com/wp-content/uploads/2023/04/0-16.jpg" },
  { id: "2", title: "Componentes", imageUrl: "https://electronilab.co/wp-content/uploads/2024/01/Kit-Carro-Robot-Seguidor-De-Linea-5.webp" },
  { id: "3", title: "Mapeo", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp6iFJswyRAwp5H1g0N5xRLmYp17mEAWSeEsRYLuDaE4Ok2JNIezqMNs0&s=10" },
  { id: "4", title: "Integrantes", imageUrl: "https://i.pinimg.com/originals/d2/de/98/d2de98193705991cea0147d3839b3882.jpg" }
];

const carouselImages = [
  "https://embedwiz.com/wp-content/uploads/2023/04/0-16.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp6iFJswyRAwp5H1g0N5xRLmYp17mEAWSeEsRYLuDaE4Ok2JNIezqMNs0&s=10",
  "https://i.pinimg.com/originals/d2/de/98/d2de98193705991cea0147d3839b3882.jpg",
  "https://electronilab.co/wp-content/uploads/2024/01/Kit-Carro-Robot-Seguidor-De-Linea-5.webp",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQayrbzsxVOj-0YuzrucFUWfJr8k1sgt1ThA&s",
  "https://uelectronics.com/wp-content/uploads/2021/09/Seguidor-de-lineas-Pinout.jpg"

];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const goToNextImage = () => {
    if (currentImage < carouselImages.length - 1) {
      setCurrentImage(currentImage + 1);
    } else {
      setCurrentImage(0);
    }
  };

  const goToPrevImage = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
    } else {
      setCurrentImage(carouselImages.length - 1);
    }
  };

  return (  
    <ScrollView style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Carro Seguidor</Text>
        <Text style={styles.welcomeText}>de linea</Text>
        <Text style={styles.welcomeSubText}>Proyecto final.</Text>
      </View>

      <Text style={styles.sectionTitle}>Indice</Text>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <View style={styles.categoryItem}>
            <Image source={{ uri: item.imageUrl }} style={styles.categoryImage} />
            <Text style={styles.categoryTitle}>{item.title}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesContainer}
      />

      <Text style={styles.sectionTitle}>Galería de imágenes</Text>
      <View style={styles.carouselContainer}>
        <TouchableOpacity onPress={goToPrevImage} style={styles.carouselButtonLeft}>
          <Text style={styles.carouselButtonText}>‹</Text>
        </TouchableOpacity>

        <Image source={{ uri: carouselImages[currentImage] }} style={styles.carouselImage} />

        <TouchableOpacity onPress={goToNextImage} style={styles.carouselButtonRight}>
          <Text style={styles.carouselButtonText}>›</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e', // Fondo oscuro metálico
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 20,
    transform: [{ scale: 1.05 }],
  },
  categoryImage: {
    width: 120,
    height: 120,
    borderRadius: 20,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: '#444',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#e1e1e1', // Color blanco metálico
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
  categoriesContainer: {
    marginBottom: 30,
  },
  carouselContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 30,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 5 },
  },
  carouselImage: {
    width: 320,
    height: 160,
    borderRadius: 20,
  },
  carouselButtonLeft: {
    position: 'absolute',
    top: '50%',
    left: 10,
    transform: [{ translateY: -20 }],
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 18,
    borderRadius: 50,
    zIndex: 1,
    opacity: 0.8,
  },
  carouselButtonRight: {
    position: 'absolute',
    top: '50%',
    right: 10,
    transform: [{ translateY: -20 }],
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 18,
    borderRadius: 50,
    zIndex: 1,
    opacity: 0.8,
  },
  carouselButtonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: '700',
  },
  welcomeContainer: {
    backgroundColor: '#333', // Color metálico oscuro
    borderRadius: 20,
    paddingVertical: 25,
    paddingHorizontal: 20,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: '1000',
    color: '#f5f5f5', // Blanco con toque metálico
    marginBottom: 5,
    letterSpacing: 1.6,
  },
  welcomeSubText: {
    fontSize: 20,
    color: '#e1e1e1',
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#e1e1e1',
    marginBottom: 10,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
});

export default Home;