import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';

export default function HomeScreen({ navigation }) {
  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
           <TouchableOpacity
        onPress={() => navigation.navigate('LocationSelector')}
        style={{
          padding: 10,
          backgroundColor: 'blue',
          borderRadius: 8,
        }}
      >
        <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>Ver Mi Ubicacion</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('UserProfile')}
        style={{
          marginTop: 20,
          padding: 10,
          backgroundColor: 'green',
          borderRadius: 8,
        }}
      >
        <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>Perfil de Usuario</Text>
      </TouchableOpacity>
      
    </SafeAreaView>
  );
}
