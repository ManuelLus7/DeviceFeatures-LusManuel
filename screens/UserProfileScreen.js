import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { getAuth, signOut } from 'firebase/auth';


const auth = getAuth();

export default function UserProfileScreen({ navigation }) {
  const handleLogout = async () => {
    try {
      await signOut(auth); 
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.sectionTitle}>Información del Usuario</Text>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Correo Electrónico:</Text>
          <Text style={styles.infoValue}>No disponible</Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={handleLogout}
        style={styles.logoutButton}
      >
        <Text style={styles.logoutButtonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  infoContainer: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoItem: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoLabel: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
  infoValue: {
    flex: 2,
    fontSize: 16,
    color: '#333',
  },
  logoutButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutButtonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});
