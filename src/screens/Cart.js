import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { Video } from "expo-av"; // Importamos Video desde expo-av

const SensorData = () => {
  const [sensorData, setSensorData] = useState({
    humidity: "Esperando datos...",
    temperature: "Esperando datos...",
    pressure: "Esperando datos...",
    gyroscope: { x: 0, y: 0, z: 0 },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSensorData({
        humidity: (Math.random() * 100).toFixed(2),
        temperature: (Math.random() * 35 + 25).toFixed(2),
        pressure: (Math.random() * 1000 + 1000).toFixed(2),
        gyroscope: {
          x: (Math.random() * 100).toFixed(2),
          y: (Math.random() * 100).toFixed(2),
          z: (Math.random() * 100).toFixed(2),
        },
      });
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Datos de Sensores</Text>

      {/* Imagen local */}
      <Image source={require("../assets/image.jpeg")} style={styles.image} />

      <Text style={styles.label}>Humedad: {sensorData.humidity} %</Text>
      <Text style={styles.label}>Temperatura: {sensorData.temperature} °C</Text>
      <Text style={styles.label}>Presión: {sensorData.pressure} hPa</Text>
      <Text style={styles.label}>
        Giroscopio - X: {sensorData.gyroscope.x} Y: {sensorData.gyroscope.y} Z: {sensorData.gyroscope.z}
      </Text>

      <Button title="Actualizar Datos" onPress={() => {}} color="#625dff" />

      {/* 🎥 Video local agregado */}
      <Video
        source={require("../assets/Video.mp4")} // Asegúrate que el video esté en esa ruta
        useNativeControls
        resizeMode="contain"
        shouldPlay
        isLooping
        style={styles.video}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    backgroundColor: '#1e1e1e',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#f5f5f5',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  label: {
    fontSize: 20,
    marginBottom: 20,
    color: '#e1e1e1',
    fontWeight: '500',
  },
  video: {
    width: '100%',
    height: 200,
    marginTop: 30,
    borderRadius: 10,
  },
});

export default SensorData;
