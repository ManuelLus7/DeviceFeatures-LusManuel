import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';
import { setLocationPermission, setUserLocation } from '../redux/actions/locationActions';
import * as Location from 'expo-location';
import MapPreview from '../components/MapPreview';

function LocationSelectorScreen({
  navigation,
  locationPermission,
  userLocation,
  setLocationPermission,
  setUserLocation,
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status === 'granted') {
        setLocationPermission(true);

        try {
          const location = await Location.getCurrentPositionAsync({});
          const { latitude, longitude } = location.coords;
          setUserLocation({ lat: latitude, lng: longitude });
          setLoading(false);
        } catch (error) {
          console.error('Error al obtener la ubicación del usuario:', error);
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.error('Error al solicitar permiso de ubicación:', error);
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Mostrando Ubicación</Text>
     
{loading ? (
  <Text style={{ fontSize: 16 }}>Obteniendo ubicación...</Text>
) : locationPermission ? (
  <View>
    <Text style={{ fontSize: 16 }}>Ubicación del usuario:</Text>
    {userLocation ? (
      <View>
        <MapPreview
          latitude={userLocation.lat}
          longitude={userLocation.lng}
        />
        <Text style={{ fontSize: 16 }}>{`Latitud: ${userLocation.lat}, Longitud: ${userLocation.lng}`}</Text>
      </View>
    ) : (
      <Text style={{ fontSize: 16 }}>No se pudo obtener la ubicación.</Text>
    )}
  </View>
) : (
  <Text style={{ fontSize: 16 }}>Permiso de ubicación no concedido.</Text>
)}
      <TouchableOpacity
        onPress={() => navigation.navigate('UserProfile')}
        style={{
          marginTop: 20,
          padding: 10,
          backgroundColor: 'green',
          borderRadius: 8,
        }}
      >
        <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>Ir al Perfil de Usuario</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const mapStateToProps = (state) => ({
  locationPermission: state.location.locationPermission,
  userLocation: state.location.userLocation,
});

const mapDispatchToProps = {
  setLocationPermission,
  setUserLocation,
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationSelectorScreen);
