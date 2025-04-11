import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Button,
  Image,
} from "react-native";
import { ProductCard } from "../components/ProductCard";


const products = [
  {
    id: "1",
    name: "Baterias 18650",
    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_637635-MLM81039129156_122024-O.webp",
  },
  {
    id: "2",
    name: "Porta pilas 18650",
    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_734551-MLM32585216061_102019-O.webp",
  },
  {
    id: "3",
    name: "Mot-120r",
    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_791502-MLM48603564951_122021-O.webp",
  },
  {
    id: "4",
    name: "Puente H",
    imageUrl: "https://cdn.shopify.com/s/files/1/0020/8027/6524/files/WhatsApp_Image_2019-02-14_at_5.19.56_PM_1024x1024.jpeg?v=1550259804",
  },
  {
    id: "5",
    name: "Esp32",
    imageUrl: "https://m.media-amazon.com/images/I/612eALAbpgL.jpg",
  },
  {
    id: "6",
    name: "jumpers",
    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_897753-MLM76359125259_052024-O-840-piezas-14-longitudes-protoboa-cables-puente-para-arduino.webp",
  },
];

export default function ProductList() {
  const [cart, setCart] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} de l@s gods`);
  };

  const handleShowProductDetail = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const renderProductItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handleShowProductDetail(item)}>
        <ProductCard product={item} onAddToCart={handleAddToCart} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Componentes Usados</Text>
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
      />

      {selectedProduct && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modelContainer}>
            <View style={styles.modelContent}>
              <Image
                source={{ uri: selectedProduct.imageUrl }}
                style={styles.productImage}
              />
              <Text style={styles.productName}>{selectedProduct.name}</Text>
              <Text style={styles.productPrice}>{selectedProduct.price}</Text>
              <Text style={styles.productDescription}>
                Estos son los Componentes usados en el proyecto 
              </Text>
              <Button
                title="Ver descripcion"
                onPress={() => {
                  handleAddToCart(selectedProduct);
                  setModalVisible(false);
                }}
              />
              <Button title="Cerrar" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c", // Fondo oscuro para el estilo metálico
    paddingHorizontal: 15,
    paddingTop: 50,
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: "700", // Peso más fuerte para mayor impacto
    color: "#f5f5f5", // Color blanco metálico
    marginBottom: 15,
    letterSpacing: 1.5, // Espaciado entre letras
    textTransform: 'uppercase', // Para darle un toque más formal
  },
  columnWrapper: {
    justifyContent: "space-between",
    marginBottom: 25,
  },
  modelContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Fondo oscuro con opacidad mayor para el modal
  },
  modelContent: {
    backgroundColor: "#333", // Fondo metálico oscuro
    padding: 25,
    borderRadius: 15,
    width: "80%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 5,
  },
  productImage: {
    width: 220,
    height: 220,
    borderRadius: 20,
    marginBottom: 25,
    borderWidth: 3,
    borderColor: "#625dff", // Borde metálico azul
  },
  productName: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#f5f5f5", // Blanco metálico para resaltar
    marginBottom: 15,
    textAlign: "center",
  },
  productPrice: {
    fontSize: 20,
    color: "#625dff", // Azul metálico para el precio
    marginBottom: 15,
  },
  productDescription: {
    fontSize: 18,
    color: "#e1e1e1", // Gris metálico claro para la descripción
    marginBottom: 25,
    textAlign: "center",
    paddingHorizontal: 15, // Espaciado para el texto
  },
});
