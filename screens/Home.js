import React, { useState } from "react";
import { View, Text, FlatList, Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";

const categories = [
  { id: "1", title: "Videojuegos", imageUrl: "https://esportsnoticiaslatam.com/wp-content/uploads/2024/04/videojuegos_862x485.png" },
  { id: "2", title: "DLC", imageUrl: "https://generacionxbox.com/wp-content/uploads/2023/10/cyberpunk-2077-phantom-liberty.jpg" },
  { id: "3", title: "Consolas", imageUrl: "https://i5.walmartimages.com.mx/mg/gm/1p/images/product-images/img_large/00019638814640l.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF" },
  { id: "4", title: "Accesorios", imageUrl: "https://www.radioshack.com.mx/store/medias/100101837.jpg-515ftw?context=bWFzdGVyfHJvb3R8MTMxNDUwfGltYWdlL2pwZWd8YURabEwyaG1NUzg1TURreE5qQTFOVFl4TXpjMEx6RXdNREV3TVRnek55NXFjR2RmTlRFMVpuUjN8MmY1YzliODAwODVlYzZiNWVhNTAwMTE0MGVjMTIwNmYyZDgzYzYzZGIyMzI0ZDgyZmU5NjZmMDJhMWUyOTlkZQ" }
];

const carouselImages = [
  "https://esportsnoticiaslatam.com/wp-content/uploads/2024/04/videojuegos_862x485.png",
  "https://generacionxbox.com/wp-content/uploads/2023/10/cyberpunk-2077-phantom-liberty.jpg",
  "https://i5.walmartimages.com.mx/mg/gm/1p/images/product-images/img_large/00019638814640l.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
  "https://www.radioshack.com.mx/store/medias/100101837.jpg-515ftw?context=bWFzdGVyfHJvb3R8MTMxNDUwfGltYWdlL2pwZWd8YURabEwyaG1NUzg1TURreE5qQTFOVFl4TXpjMEx6RXdNREV3TVRnek55NXFjR2RmTlRFMVpuUjN8MmY1YzliODAwODVlYzZiNWVhNTAwMTE0MGVjMTIwNmYyZDgzYzYzZGIyMzI0ZDgyZmU5NjZmMDJhMWUyOTlkZQ"
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
        <Text style={styles.welcomeText}>¡Bienvenido a VG Retro E-commerce!</Text>
        <Text style={styles.welcomeSubText}>Descubre las mejores ofertas de la temporada.</Text>
      </View>

      <Text style={styles.sectionTitle}>Explora nuestras categorías</Text>
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
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  categoryItem: {
    alignItems: "center",
    marginRight: 20,
  },
  categoryImage: {
    width: 110,
    height: 110,
    borderRadius: 15,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#ddd",
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#656568",
  },
  categoriesContainer: {
    marginBottom: 30,
  },
  carouselContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginBottom: 30,
  },
  carouselImage: {
    width: 300,
    height: 150,
    borderRadius: 15,
  },
  carouselButtonLeft: {
    position: 'absolute',
    top: '50%',
    left: 10,
    transform: [{ translateY: -20 }],
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 15,
    borderRadius: 50,
    zIndex: 1,
  },
  carouselButtonRight: {
    position: 'absolute',
    top: '50%',
    right: 10,
    transform: [{ translateY: -20 }],
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 15,
    borderRadius: 50,
    zIndex: 1,
  },
  carouselButtonText: {
    color: "white",
    fontSize: 24,
  },
  welcomeContainer: {
    backgroundColor: "#625dff",
    borderRadius: 15,
    paddingVertical: 25,
    paddingHorizontal: 20,
    marginBottom: 20,
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
  },
  welcomeSubText: {
    fontSize: 18,
    color: "white",
    fontWeight: "500",
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
});

export default Home;