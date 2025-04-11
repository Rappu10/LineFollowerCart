import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Button,
  Image,
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

const ProfileCard = ({ defaultName, defaultEmail, defaultImage }) => {
  const [name, setName] = useState(defaultName);
  const [email, setEmail] = useState(defaultEmail);
  const [image, setImage] = useState(defaultImage);

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

    if (!result.cancelled && result.assets && result.assets[0].uri) {
      setImage(result.assets[0].uri);
      Alert.alert("Imagen actualizada", "Tu imagen de perfil ha sido actualizada.");
    }
  };

  const handleSaveChanges = () => {
    Alert.alert("Cambios guardados", "Tu perfil ha sido actualizado.");
  };

  return (
    <View style={styles.card}>
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
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text style={styles.label}>Correo Electrónico:</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />

      <Button title="Guardar Cambios" onPress={handleSaveChanges} color="#625dff" />
    </View>
  );
};

const Profile = () => {
  return (
    <ScrollView style={styles.container}>
      <ProfileCard
        defaultName="Francisco Cervantes"
        defaultEmail="fco@gmail.com"
        defaultImage="https://pbs.twimg.com/profile_images/1516050076770123780/HVuSm7uO_400x400.jpg"
      />
      <ProfileCard
        defaultName="Jesus Manuel Lopez Obrador"
        defaultEmail="jmlo@gmail.com"
        defaultImage="https://www.celag.org/wp-content/uploads/2018/06/AMLO-Marcel.jpg"
      />
      <ProfileCard
        defaultName="Jesus Alfonzo Ayala"
        defaultEmail="jisus@example.com"
        defaultImage="https://mail.google.com/mail/u/0?ui=2&ik=5bb28525ab&attid=0.1&permmsgid=msg-f:1828953154959518876&th=1961bf3448312c9c&view=att&disp=safe&realattid=1961bf30cc5b35e9581&zw"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1e1e1e', // Fondo oscuro metálico
  },
  card: {
    backgroundColor: '#333', // Fondo oscuro metálico para la tarjeta
    padding: 25,
    marginBottom: 25,
    borderRadius: 15,
    elevation: 3,
    shadowColor: '#000', // Añadí una sombra para darle profundidad
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  profileImageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60, // Redondeo perfecto
    marginBottom: 12,
    borderWidth: 3,
    borderColor: '#625dff', // Borde metálico en azul
  },
  changeImageButton: {
    backgroundColor: '#625dff', // Azul metálico
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
  },
  changeImageText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#e1e1e1', // Gris metálico para las etiquetas
    marginBottom: 8,
  },
  input: {
    height: 45,
    borderColor: '#444', // Borde metálico oscuro
    borderWidth: 2,
    borderRadius: 10,
    paddingLeft: 15,
    marginBottom: 18,
    backgroundColor: '#2e2e2e', // Fondo oscuro metálico
    color: '#f5f5f5', // Texto blanco metálico
    fontSize: 16,
    fontWeight: '500',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 4 },
  },
});


export default Profile;
