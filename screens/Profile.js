import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Button,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

const Profile = () => {
  const [name, setName] = useState("Francisco");
  const [email, setEmail] = useState("fco@gmail.com");
  const [image, setImage] = useState("https://picsum.photos/100/100?random=1");

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleChangeProfileImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Se necesitan permisos para acceder a la galería");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log("Resultado de selección de imagen: ", result);

    if (!result.cancelled) {
      const imageUri = result.assets[0].uri;
      console.log("Imagen seleccionada URI: ", imageUri);
      setImage(imageUri);
      Alert.alert("Imagen actualizada", "Tu imagen de perfil ha sido actualizada.");
    }
  };

  const handleSaveChanges = () => {
    Alert.alert("Cambios guardados", "Tu perfil ha sido actualizado.");
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileImageContainer}>
        <Image source={{ uri: image }} style={styles.profileImage} />
        <TouchableOpacity
          onPress={handleChangeProfileImage}
          style={styles.changeImageButton}
        >
          <Text style={styles.changeImageText}>Cambiar Imagen</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Nombre:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={handleNameChange}
      />

      <Text style={styles.label}>Correo Electrónico:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={handleEmailChange}
      />

      <Button
        title="Guardar Cambios"
        onPress={handleSaveChanges}
        color="#625dff"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  profileImageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  changeImageButton: {
    backgroundColor: "#625dff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  changeImageText: {
    color: "white",
    fontWeight: "bold",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
  },
});

export default Profile;