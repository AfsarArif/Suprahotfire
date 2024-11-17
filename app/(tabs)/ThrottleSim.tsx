import React, { useState, useEffect } from 'react';
import { View, Text, PanResponder, StyleSheet, Dimensions, SafeAreaView } from 'react-native';
import { Gauge } from 'lucide-react-native';

const ThrottleSimulator: React.FC = () => {
  const [throttle, setThrottle] = useState<number>(0);
  const [rpm, setRpm] = useState<number>(800);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  useEffect(() => {
    const targetRpm = 800 + (throttle * 70);
    const rpmInterval = setInterval(() => {
      setRpm(current => {
        if (Math.abs(current - targetRpm) < 50) return targetRpm;
        return current + (current < targetRpm ? 50 : -50);
      });
    }, 50);
    return () => clearInterval(rpmInterval);
  }, [throttle]);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: () => setIsDragging(true),
    onPanResponderRelease: () => setIsDragging(false),
    onPanResponderMove: (_, gestureState) => {
      const { height } = Dimensions.get('window');
      const percentage = 100 - ((gestureState.moveY / height) * 100);
      setThrottle(Math.max(0, Math.min(100, percentage)));
    }
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Throttle Simulator</Text>
            <View style={styles.gaugeContainer}>
              <Gauge size={24} color="black" style={styles.gaugeIcon} />
              <Text style={styles.rpmText}>{Math.round(rpm)} RPM</Text>
            </View>
          </View>

          <View style={styles.throttleContainer} {...panResponder.panHandlers}>
            <View 
              style={[
                styles.throttleFill, 
                { height: `${throttle}%` }
              ]} 
            />
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Throttle: {Math.round(throttle)}%
            </Text>
            <Text style={styles.footerText}>
              Controls: Drag to adjust
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '90%', // Takes 90% of screen width
    maxWidth: 400,
    padding: 24,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  gaugeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  gaugeIcon: {
    marginRight: 8,
  },
  rpmText: {
    fontSize: 18,
  },
  throttleContainer: {
    height: 256,
    backgroundColor: '#e5e7eb',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
  },
  throttleFill: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#3b82f6',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#4b5563',
  },
});

export default ThrottleSimulator;