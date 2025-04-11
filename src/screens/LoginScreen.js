import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { loginUser } from "../api/api"; // Función para login por API

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);

    const testEmail = "admin@correo.com";
    const testPassword = "admin123";

    if (email === testEmail && password === testPassword) {
      setLoading(false);
      navigation.replace("MainApp");
      return;
    }

    try {
      const response = await loginUser(email, password);
      if (response.success) {
        navigation.replace("MainApp");
      } else {
        setErrorMessage(response.error);
      }
    } catch (error) {
      setErrorMessage("Error de conexión con el servidor.");
    } finally {
      setLoading(false);
    }
  };

  const goToRegister = () => {
    navigation.navigate("Register"); // Asegúrate de tener una pantalla 'Register' en tu StackNavigator
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#888"
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="#888"
      />

      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : null}

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator size="small" color="#FFF" />
        ) : (
          <Text style={styles.buttonText}>Ingresar</Text>
        )}
      </TouchableOpacity>

      {/* Botón Registrar */}
      <TouchableOpacity onPress={goToRegister} style={styles.registerButton}>
        <Text style={styles.registerText}>¿No tienes cuenta? Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e1e1e', // Fondo oscuro metálico
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#f5f5f5',
    letterSpacing: 2,
  },
  input: {
    width: '100%',
    height: 55,
    borderWidth: 2,
    borderColor: '#444',
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#333',
    color: '#f5f5f5',
    fontSize: 16,
    fontWeight: '500',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
  },
  button: {
    width: '100%',
    height: 55,
    backgroundColor: '#625dff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    marginTop: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },
  errorText: {
    color: '#ff5c5c',
    marginBottom: 10,
    fontSize: 16,
    fontWeight: '500',
  },
  registerButton: {
    marginTop: 20,
  },
  registerText: {
    color: '#aaa',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
