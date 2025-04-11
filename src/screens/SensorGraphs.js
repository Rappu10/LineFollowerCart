import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

// Simulamos algunos datos de ejemplo para los sensores
const sensorData = {
  temperature: [22, 24, 25, 27, 28, 29, 30, 32, 33, 35],
  humidity: [60, 58, 56, 54, 52, 50, 48, 47, 45, 43],
  pressure: [1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019],
};

const { width } = Dimensions.get("window");

const SensorGraphs = () => {
  const [temperature, setTemperature] = useState([]);
  const [humidity, setHumidity] = useState([]);
  const [pressure, setPressure] = useState([]);

  // Aquí podrías obtener los datos de un API o de un sensor real
  useEffect(() => {
    // Simulamos la carga de datos
    setTemperature(sensorData.temperature);
    setHumidity(sensorData.humidity);
    setPressure(sensorData.pressure);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Gráficas de Sensores</Text>

      {/* Gráfico de Temperatura */}
      <Text style={styles.graphTitle}>Temperatura (°C)</Text>
      <LineChart
        data={{
          labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
          datasets: [
            {
              data: temperature,
            },
          ],
        }}
        width={width - 20}
        height={220}
        yAxisLabel="°C"
        chartConfig={{
          backgroundColor: "#1e1e1e",
          backgroundGradientFrom: "#1e1e1e",
          backgroundGradientTo: "#1e1e1e",
          decimalPlaces: 1,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
      />

      {/* Gráfico de Humedad */}
      <Text style={styles.graphTitle}>Humedad (%)</Text>
      <LineChart
        data={{
          labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
          datasets: [
            {
              data: humidity,
            },
          ],
        }}
        width={width - 20}
        height={220}
        yAxisLabel="%"
        chartConfig={{
          backgroundColor: "#1e1e1e",
          backgroundGradientFrom: "#1e1e1e",
          backgroundGradientTo: "#1e1e1e",
          decimalPlaces: 1,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
      />

      {/* Gráfico de Presión */}
      <Text style={styles.graphTitle}>Presión (hPa)</Text>
      <LineChart
        data={{
          labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
          datasets: [
            {
              data: pressure,
            },
          ],
        }}
        width={width - 20}
        height={220}
        yAxisLabel="hPa"
        chartConfig={{
          backgroundColor: "#1e1e1e",
          backgroundGradientFrom: "#1e1e1e",
          backgroundGradientTo: "#1e1e1e",
          decimalPlaces: 1,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e",
    alignItems: "center",
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#f5f5f5",
    marginBottom: 20,
  },
  graphTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#f5f5f5",
    marginTop: 20,
  },
});

export default SensorGraphs;
