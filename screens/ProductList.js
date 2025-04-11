import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, Modal, Button } from 'react-native';

const products = [
    { id: '1', name: 'Smartphone iPhone 13 Pro Max Apple 5G Azul 512 GB', price: '12k', imageUrl: 'https://lamarinamx.vtexassets.com/arquivos/ids/813972-1600-auto?v=638388006648230000&width=1600&height=auto&aspect=true' },
    { id: '2', name: 'Smartphone iPhone 14 Pro Max Apple 5G Azul 512 GB', price: '16k', imageUrl: 'https://lamarinamx.vtexassets.com/arquivos/ids/813972-1600-auto?v=638388006648230000&width=1600&height=auto&aspect=true' },
    { id: '3', name: 'Smartphone iPhone 15 Pro Max Apple 5G Azul 512 GB', price: '20k', imageUrl: 'https://lamarinamx.vtexassets.com/arquivos/ids/813972-1600-auto?v=638388006648230000&width=1600&height=auto&aspect=true' },
    { id: '4', name: 'Smartphone iPhone 16 Pro Max Apple 5G Azul 512 GB', price: '30k', imageUrl: 'https://lamarinamx.vtexassets.com/arquivos/ids/813972-1600-auto?v=638388006648230000&width=1600&height=auto&aspect=true' },
    { id: '5', name: 'Smartphone Samsumg Galaxy S25 Ultra 512 GB', price: '32k', imageUrl: 'https://images.samsung.com/mx/smartphones/galaxy-s25-ultra/buy/product_color_silverBlue_MO.png?imbypass=true' },
    { id: '6', name: 'Smartphone Samsumg Galaxy Z Fold 6 512 GB', price: '32k', imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQy_JqUOcbCHxGjJAvXEAvlVPd7gtcBNWnUE0wOMOt_A8AF386kXdsvNIHHEFv26QVJtYG7_u8dg279BLmxMahrOR0vQsK_JlbzJxts-ST95zmC8lbk98ECJqRZcX-JKhFdtdlSd3EjrA&usqp=CAc' },

];

const ProductList = () => {
    const [cart, setCart] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleAddToCart = (product) => {
        setCart([...cart, product]);
        alert(`${product.name} agregado al carrito.`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Productos Disponibles</Text>
            <FlatList
                data={products}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.productCard} onPress={() => { setSelectedProduct(item); setModalVisible(true); }}>
                        <Image style={styles.image} source={{ uri: item.imageUrl }} />
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.price}>${item.price}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
                numColumns={2}
                columnWrapperStyle={styles.row}
            />

            {selectedProduct && (
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Image source={{ uri: selectedProduct.imageUrl }} style={styles.productImage} />
                            <Text style={styles.productName}>{selectedProduct.name}</Text>
                            <Text style={styles.productPrice}>{selectedProduct.price}</Text>
                            <Button title='Agregar al carrito' onPress={() => handleAddToCart(selectedProduct)} />
                            <Button title='Cerrar' onPress={() => setModalVisible(false)} />
                        </View>
                    </View>
                </Modal>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f5f5f5',
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
    },
    row: {
        justifyContent: 'space-between',
    },
    productCard: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        alignItems: 'center',
        width: '48%',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },
    image: {
        width: '100%',
        height: 120,
        borderRadius: 10,
    },
    name: {
        fontSize: 14,
        fontWeight: 'bold',
        marginVertical: 5,
        textAlign: 'center',
    },
    price: {
        fontSize: 14,
        color: 'gray',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    productImage: {
        width: 200,
        height: 200,
        marginBottom: 10,
        borderRadius: 10,
    },
    productName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    productPrice: {
        fontSize: 18,
        color: 'gray',
    },
});

export default ProductList;

