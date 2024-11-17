import React, { useEffect, useState } from 'react';
import * as path from 'path';
import carFile from '../../HackUTD24.ToyotaCars.json';

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
import { router } from 'expo-router'

const windowWidth = Dimensions.get('window').width;
const BAR_CONTAINER_WIDTH = windowWidth * 0.6;

interface Car {
  id: string;
  name: string;

}

interface CarData {
  ModelYear: number;
  Division: string;
  Carline: string;
  Index: number;
  EngDispl: number;
  CityCO2: number;
  HwyCO2: number;
  CombCO2: number;
  CityFE: number;
  HwyFE: number;
  CombFE: number;
  EstimatedWeight: number;
  ImageURL: string;
}

type GroupedByCarline = {
  [carline: string]: CarData[];
};

// Function to group data by Carline
const groupByCarline = (data: CarData[]): GroupedByCarline => {
  return data.reduce((acc: GroupedByCarline, entry: CarData) => {
    const { Carline } = entry;
    if (!acc[Carline]) {
      acc[Carline] = [];
    }
    acc[Carline].push(entry);
    return acc;
  }, {});
};

// Main function to read and process JSON
const processCarsFile = () => {
    const carData: CarData[] = carFile.map((entry: any) => ({
      ModelYear: entry["Model Year"],
      Division: entry.Division,
      Carline: entry.Carline,
      Index: entry["Index (Model Type Index)"],
      EngDispl: entry["Eng Displ"],
      CityCO2: entry["City CO2 Rounded Adjusted"] || 0,
      HwyCO2: entry["Hwy CO2 Rounded Adjusted"] || 0,
      CombCO2: entry["Comb CO2 Rounded Adjusted (as shown on FE Label)"] || 0,
      CityFE: entry["City FE (Guide) - Conventional Fuel"],
      HwyFE: entry["Hwy FE (Guide) - Conventional Fuel"],
      CombFE: entry["Comb FE (Guide) - Conventional Fuel"],
      EstimatedWeight: entry["Curbweight"],
      ImageURL: entry["ImageURL"] || '',
    }));

    const groupedData = groupByCarline(carData);
    return groupedData;

};


interface CarSelectorProps {
  onSelectCar: (car: Car) => void;
}

const cars: Car[] = [
  { id: '1', name: 'Corolla' },
  { id: '2', name: 'ES 250 AWD' },
  { id: '3', name: 'ES 300h' },
  { id: '4', name: 'ES 350' },
  { id: '5', name: 'CAMRY HEV AWD LE' },
  { id: '6', name: 'TOYOTA CROWN AWD' },
  { id: '7', name: 'TUNDRA 2WD' },
  { id: '8', name: 'NX 250' },
  { id: '9', name: 'NX 350 AWD' },
  { id: '10', name: 'SEQUOIA 2WD' }
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


export default function App() {

  const [selectedCar, setSelectedCar] = useState({ id: '1', name: 'Corolla' });
  const [yearData, setYearData] = useState([ //default values
    { year: 2021, highway: 32, combined: 32, city: 32 },
    { year: 2022, highway: 33, combined: 33, city: 33 },
    { year: 2023, highway: 32, combined: 34, city: 26 },
    { year: 2024, highway: 33, combined: 35, city: 27 },
    { year: 2025, highway: 35, combined: 36, city: 28 },
  ]);
  const [groupedData, setGroupedData] = useState<GroupedByCarline | null>(null);
  const [emissionsData, setEmissionsData] = useState<CarData | null>(null);
  useEffect(() => {
    const data = processCarsFile();
    setGroupedData(data);
  }, []);
  
  useEffect(() => {
    if (groupedData && selectedCar) {
      const carData = groupedData[selectedCar.name.toUpperCase()]; 
      if (carData) {
        const updatedYearData = carData.map((entry) => ({
          year: entry.ModelYear,
          highway: entry.HwyFE,
          combined: entry.CombFE,
          city: entry.CityFE,
        }));
        setEmissionsData(carData.filter((entry: CarData) => entry.ModelYear === 2025)[0]);
        setYearData(updatedYearData);
      }
    }
  }, [groupedData, selectedCar]);


  const handleCarSelect = (car: React.SetStateAction<{ id: string; name: string; }>) => {
    setSelectedCar(car);
  };

  const carImages: { [key: string]: any } = {
    "Corolla": require('../../assets/images/kisspng-2018-toyota-corolla-car-chevrolet-vectra-honda-civ-toyota-corolla-5b191fc6a43d43.2476368015283731906727.png'),
    "ES 250 AWD": require('../../assets/images/es-250.png'),
    "ES 300h": require('../../assets/images/Lexuses350.png'), 
    "ES 350": require('../../assets/images/Lexuses350.png'),
    "CAMRY HEV AWD LE": require('../../assets/images/model1camry.png'),
    "TOYOTA CROWN AWD": require('../../assets/images/toyotacrown1.png'),
    "TUNDRA 2WD": require('../../assets/images/toyotatundra.png'),
    "NX 250": require('../../assets/images/Lexusnx250.png'),
    "NX 350 AWD": require('../../assets/images/Lexusnx350.png'),//
    "SEQUOIA 2WD": require('../../assets/images/toyotasequoia3.png'),//
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
            source={carImages[selectedCar.name]}
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
                   source={require('../../assets/images/ellipse4.png')}
                    resizeMode="cover"
                  >
                    <View style={styles.circleContent}>
                      <Text style={styles.circleText}>
                        {emissionsData ? emissionsData.CityCO2 + '\n': '0\n'}City CO2
                      </Text>
                    </View>
                  </ImageBackground>
                </View>

                {/* Combined CO2 Circle */}
                <View style={styles.circle}>
                  <ImageBackground
                    style={styles.circleBackground}
                    source={require('../../assets/images/ellipse4.png')}
                    resizeMode="cover"
                  >
                    <View style={styles.circleContent}>
                      <Text style={styles.circleText}>
                        {emissionsData ? emissionsData.CombCO2 + '\n': '0\n'}Combined{'\n'}CO2
                      </Text>
                    </View>
                  </ImageBackground>
                </View>

                {/* Highway CO2 Circle */}
                <View style={styles.circle}>
                  <ImageBackground
                    style={styles.circleBackground}
                    source={require('../../assets/images/ellipse4.png')}
                    resizeMode="cover"
                  >
                    <View style={styles.circleContent}>
                      <Text style={styles.circleText}>
                        {emissionsData ? emissionsData.HwyCO2 + '\n' : '0\n'}Highway{'\n'}CO2
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
            <TouchableOpacity 
      style={styles.navigationButton}
      onPress={() => router.push('/ThrottleSim')}
    >
      <Text style={styles.buttonText}>Learn More</Text>
    </TouchableOpacity>
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
  navigationButton: {
    backgroundColor: '#eb0a1e',  // Toyota red color
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
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