import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = async () => {
    setLoading(true);
    setErrorMessage("");

    try {
      // Aquí podrías llamar a tu API, por ejemplo:
      // const response = await registerUser(name, email, password);

      if (name && email && password) {
        // Simula éxito
        navigation.replace("Login");
      } else {
        setErrorMessage("Por favor, completa todos los campos.");
      }
    } catch (error) {
      setErrorMessage("Error al registrar. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear Cuenta</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre completo"
        value={name}
        onChangeText={setName}
        placeholderTextColor="#888"
      />

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
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
        onPress={handleRegister}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Registrarse</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.loginLink}>
        <Text style={styles.loginText}>¿Ya tienes cuenta? Inicia sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: "#f5f5f5",
    fontWeight: "bold",
    marginBottom: 20,
    letterSpacing: 1.5,
  },
  input: {
    width: "100%",
    height: 55,
    borderWidth: 2,
    borderColor: "#444",
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: "#333",
    color: "#f5f5f5",
    fontSize: 16,
    fontWeight: "500",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
  },
  button: {
    width: "100%",
    height: 55,
    backgroundColor: "#00c2ff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    marginTop: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1.5,
  },
  errorText: {
    color: "#ff5c5c",
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "500",
  },
  loginLink: {
    marginTop: 20,
  },
  loginText: {
    color: "#aaa",
    fontSize: 16,
    textDecorationLine: "underline",
  },
});
