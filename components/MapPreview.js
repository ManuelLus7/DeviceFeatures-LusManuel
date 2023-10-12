import React from 'react';
import { View, Image, Text } from 'react-native';

export default function MapPreview({ latitude, longitude }) {
  if (!latitude || !longitude) {
    return (
      <View>
        <Text>No se encontraron datos de ubicación</Text>
      </View>
    );
  }

  const apiKey = 'AIzaSyBgiXweXpz-hrwdLHQQH1u76S9r5n9xaNA';
  const marker = `markers=color:red|label:U|${latitude},${longitude}`;
  const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=14&size=400x400&key=${apiKey}&${marker}`;

  return (
    <View>
      <Image source={{ uri: mapUrl }} style={{ width: 400, height: 300 }} />
    </View>
  );
}
