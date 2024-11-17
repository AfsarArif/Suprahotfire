import React, { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const BAR_CONTAINER_WIDTH = windowWidth * 0.6;

interface Car {
  id: string;
  name: string;
}

interface CarSelectorProps {
  onSelectCar: (car: Car) => void;
}

const cars: Car[] = [
  { id: '1', name: 'UX 300h' },
  { id: '2', name: 'Corolla' },
  { id: '3', name: 'ES 250 AWD' },
  { id: '4', name: 'ES 300h' },
  { id: '5', name: 'ES 350' },
  { id: '6', name: 'CAMRY HEV AWD LE' },
  { id: '7', name: 'TOYOTA CROWN AWD' },
  { id: '8', name: 'TUNDRA 2WD' },
  { id: '9', name: 'NX 250' },
  { id: '10', name: 'NX 350 AWD' },
  { id: '11', name: 'SEQUOIA 2WD' }
];

const CarSelector: React.FC<CarSelectorProps> = ({ onSelectCar }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCar, setSelectedCar] = useState<Car>(cars[0]);

  const handleCarSelect = (car: Car) => {
    setSelectedCar(car);
    onSelectCar(car);
    setModalVisible(false);
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.selectorButton}
      >
        <View style={styles.selectorButtonContent}>
          <Text 
            style={styles.selectorButtonText}
            numberOfLines={1} // Ensures text doesn't wrap
          >
            {selectedCar.name}
          </Text>
          <ImageBackground
            style={styles.chevronIcon}
            source={require('/Users/afsararif/Documents/HackUTD24/Suprahotfire/assets/images/chevrondown.png')}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setModalVisible(false)}
        >
          <View style={styles.modalContent}>
            <FlatList
              data={cars}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.carOption}
                  onPress={() => handleCarSelect(item)}
                >
                  <Text style={styles.carOptionText}>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

const calculateWidth = (value: number) => {
  const maxMPG = 40; // Maximum MPG value for scaling
  return (value / maxMPG) * BAR_CONTAINER_WIDTH;
};

const yearData = [
  { year: 2021, highway: 28, combined: 32, city: 22 },
  { year: 2022, highway: 30, combined: 33, city: 24 },
  { year: 2023, highway: 32, combined: 34, city: 26 },
  { year: 2024, highway: 33, combined: 35, city: 27 },
  { year: 2025, highway: 35, combined: 36, city: 28 },
];

export default function App() {
  const [selectedCar, setSelectedCar] = useState({ id: '1', name: 'Camry' });

  const handleCarSelect = (car: React.SetStateAction<{ id: string; name: string; }>) => {
    setSelectedCar(car);
    // You can add additional logic here to update other parts of your app
    // based on the selected car
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#eb0a1e' }}>
      <ScrollView
        scrollEnabled={true}
        contentInsetAdjustmentBehavior="automatic"
      >
        <View
          style={{
            backgroundColor: '#eb0a1e',
            paddingHorizontal: '5%',
          }}
        >
          <Text
            style={{
              fontSize: 48,
              fontWeight: '800',
              lineHeight: 57.6,
              color: '#ffffff',
              marginTop: 20,
            }}
          >
            Fuel{'\n'}Economy
          </Text>

          <CarSelector onSelectCar={handleCarSelect} />

          <ImageBackground
            style={{
              width: '100%',
              height: 204,
              marginTop: 24,
            }}
            source={require('/Users/afsararif/Documents/HackUTD24/Suprahotfire/assets/images/model1camry.png')}
            resizeMode="cover"
          />

          <View
            style={{
              backgroundColor: '#212121',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              marginTop: 24,
              padding: 20,
            }}
          >
            <Text
              style={{
                fontSize: 32,
                fontWeight: '800',
                color: '#ffffff',
                marginBottom: 16,
              }}
            >
              Why analyze fuel?
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '400',
                color: '#ffffff',
                lineHeight: 20,
                marginBottom: 16,
              }}
            >
              Understanding fuel analysis is vital for Toyota employees as it
              supports the development of efficient, sustainable vehicles that
              meet customer needs and environmental standards. This knowledge
              enhances innovation in fuel efficiency, hybrid technology, and
              emissions reduction, ensuring Toyota remains a leader in
              automotive excellence and sustainability.
            </Text>

            <Text
              style={{
                fontSize: 32,
                fontWeight: '800',
                color: '#ffffff',
                lineHeight: 38.4,
                marginBottom: 28,
              }}
            >
              Conventional Fuel{'\n'}Analysis
            </Text>
            {yearData.map((data, index) => (
              <View
                key={index}
                style={{
                  height: 60,
                  flexDirection: 'row',
                  marginBottom: 32,
                }}
              >
                <View
                  style={{
                    width: 100,
                    height: 60,
                    backgroundColor: '#212121',
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                    borderWidth: 3,
                    borderColor: '#d10d1f',
                    justifyContent: 'center',
                    paddingLeft: 19,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 24,
                      fontWeight: '800',
                      color: '#ffffff',
                    }}
                    numberOfLines={1}
                  >
                    {data.year}
                  </Text>
                </View>

                <View style={{ flex: 1, justifyContent: 'space-between' }}>
                  <View
                    style={{
                      height: 20,
                      width: calculateWidth(data.highway),
                      backgroundColor: 'rgba(235, 10, 30, 0.55)',
                      borderTopRightRadius: 20,
                      borderBottomRightRadius: 20,
                      justifyContent: 'center',
                      paddingLeft: 26,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: '800',
                        color: '#ffffff',
                      }}
                    >
                      Highway MPG {data.highway}
                    </Text>
                  </View>

                  <View
                    style={{
                      height: 20,
                      width: calculateWidth(data.combined),
                      backgroundColor: '#d10d1f',
                      borderTopRightRadius: 20,
                      borderBottomRightRadius: 20,
                      justifyContent: 'center',
                      paddingLeft: 26,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: '800',
                        color: '#ffffff',
                      }}
                    >
                      Combined MPG {data.combined}
                    </Text>
                  </View>

                  <View
                    style={{
                      height: 20,
                      width: calculateWidth(data.city),
                      backgroundColor: 'rgba(235, 10, 30, 0.32)',
                      borderTopRightRadius: 20,
                      borderBottomRightRadius: 20,
                      justifyContent: 'center',
                      paddingLeft: 26,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: '800',
                        color: '#ffffff',
                      }}
                    >
                      City MPG {data.city}
                    </Text>
                  </View>
                </View>
              </View>
            ))}

<View style={styles.co2Section}>
              <Text style={styles.sectionTitle}>
                CO2 Emissions
              </Text>

              <View style={styles.circlesContainer}>
                {/* City CO2 Circle */}
                <View style={styles.circle}>
                  <ImageBackground
                    style={styles.circleBackground}
                    source={require('/Users/afsararif/Documents/HackUTD24/Suprahotfire/assets/images/ellipse4.png')}
                    resizeMode="cover"
                  >
                    <View style={styles.circleContent}>
                      <Text style={styles.circleText}>
                        358{'\n'}City CO2
                      </Text>
                    </View>
                  </ImageBackground>
                </View>

                {/* Combined CO2 Circle */}
                <View style={styles.circle}>
                  <ImageBackground
                    style={styles.circleBackground}
                    source={require('/Users/afsararif/Documents/HackUTD24/Suprahotfire/assets/images/ellipse4.png')}
                    resizeMode="cover"
                  >
                    <View style={styles.circleContent}>
                      <Text style={styles.circleText}>
                        321{'\n'}Combined{'\n'}CO2
                      </Text>
                    </View>
                  </ImageBackground>
                </View>

                {/* Highway CO2 Circle */}
                <View style={styles.circle}>
                  <ImageBackground
                    style={styles.circleBackground}
                    source={require('/Users/afsararif/Documents/HackUTD24/Suprahotfire/assets/images/ellipse4.png')}
                    resizeMode="cover"
                  >
                    <View style={styles.circleContent}>
                      <Text style={styles.circleText}>
                        275{'\n'}Highway{'\n'}CO2
                      </Text>
                    </View>
                  </ImageBackground>
                </View>
              </View>
        

              <Text
                style={{
                  fontSize: 32,
                  fontWeight: '800',
                  color: '#ffffff',
                  marginTop: 40,
                  marginBottom: 20,
                }}
              >
                Where can we improve?
              </Text>

              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  color: '#ffffff',
                  lineHeight: 16.8,
                  marginBottom: 40,
                }}
              >
                Understanding fuel analysis is vital for Toyota employees as it
                supports the development of efficient, sustainable vehicles that
                meet customer needs and environmental standards. This knowledge
                enhances innovation in fuel efficiency, hybrid technology, and
                emissions reduction, ensuring Toyota remains a leader in automotive
                excellence and sustainability.{'\n\n'}Understanding fuel analysis is
                vital for Toyota employees as it supports the development of
                efficient, sustainable vehicles
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  selectorButton: {
    minWidth: 180, // Changed from fixed width to minWidth
    maxWidth: '80%', // Added maxWidth to prevent too wide buttons
    height: 57,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    paddingHorizontal: 20, // Added padding for text spacing
    alignSelf: 'flex-start', // Added to allow button to grow based on content
  },
  co2Section: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 32,
    backgroundColor: '#212121',
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 40,
    textAlign: 'center',
  },
  circlesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    gap: 15, // Space between circles
  },
  circle: {
    width: 100,
    height: 100,
  },
  circleBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#ffffff',
    textAlign: 'center',
  },
  selectorButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectorButtonText: {
    fontSize: 24,
    fontWeight: '800',
    color: '#000000',
    flexShrink: 1, // Added to allow text to shrink if needed
  },
  chevronIcon: {
    width: 25,
    height: 25,
    marginLeft: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
    maxHeight: '50%',
  },
  carOption: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  carOptionText: {
    fontSize: 18,
    color: '#000000',
  },
});