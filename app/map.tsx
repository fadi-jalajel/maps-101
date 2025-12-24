import { useRef } from "react";
import { Button, StyleSheet, View } from "react-native";
import MapView from "react-native-maps";

export default function MapScreen() {
  const mapRef = useRef<MapView>(null);

  const moveToCityCenter = () => {
    mapRef.current?.animateToRegion(
      {
        latitude: 29.3759,
        longitude: 47.9774,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      },
      1000 // animation duration (ms)
    );
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={StyleSheet.absoluteFillObject}
        initialRegion={{
          latitude: 29.346156603037915,
          longitude: 48.09194494934448,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        showsCompass={false}
        toolbarEnabled={false}
      />

      <View style={styles.button}>
        <Button title="Center Map" onPress={moveToCityCenter} />
        <Button title="Zoom Out" onPress={moveToCityCenter} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    flexDirection: "row",
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
  },
});
