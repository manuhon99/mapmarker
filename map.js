import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import db from './server/db.json';
import mapMarker from './images/test.png';

export default function Map() {
    return (
      <View style={styles.container}>
        <MapView 
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: -25.4300722,
            longitude: -49.2867895,
            latitudeDelta: 0.008,
            longitudeDelta: 0.008,
          }} 
          style={styles.mapStyle}
        >
          {db.map((db) => {
          return (
            <Marker 
              key={db.id}
              icon={mapMarker}
              calloutAnchor={{ x: 2.7, y: 0.8 }}
              coordinate={{ 
                latitude: db.latitude,
                longitude: db.longitude,
              }}
          >
          </Marker>
          );
        })}
        </MapView>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative',
    },
  
    mapStyle: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },

});