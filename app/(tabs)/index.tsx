import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from 'react-native';


export default function App(): React.JSX.Element {
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

          <View
            style={{
              width: 180,
              height: 57,
              backgroundColor: '#ffffff',
              borderRadius: 15,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 16,
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: '800',
                color: '#000000',
              }}
              numberOfLines={1}
            >
              Camry
            </Text>
            <ImageBackground
              style={{
                width: 25,
                height: 25,
                marginLeft: 10,
              }}
              source={require('/Users/afsararif/Documents/HackUTD24/Suprahotfire/assets/images/chevrondown.png')}
              resizeMode="contain"
            />
          </View>

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

            {/* First Year Stats */}
            <View
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
                  2021
                </Text>
              </View>

              <View style={{ flex: 1 }}>
                <View
                  style={{
                    height: 20,
                    backgroundColor: 'rgba(235, 10, 30, 0.55)',
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    marginLeft: -12,
                    justifyContent: 'center',
                    paddingLeft: 50,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '800',
                      color: '#ffffff',
                    }}
                  >
                    Highway MPG 25
                  </Text>
                </View>

                <View
                  style={{
                    height: 20,
                    backgroundColor: '#d10d1f',
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                    marginLeft: 0,
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
                    Combined MPG 35
                  </Text>
                </View>

                <View
                  style={{
                    height: 20,
                    backgroundColor: 'rgba(235, 10, 30, 0.32)',
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                    marginLeft: -1,
                    justifyContent: 'center',
                    paddingLeft: 27,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '800',
                      color: '#ffffff',
                    }}
                  >
                    City MPG 18
                  </Text>
                </View>
              </View>
            </View>

                    {/* First Year Stats */}
            <View
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
                  2021
                </Text>
              </View>

              <View style={{ flex: 1 }}>
                <View
                  style={{
                    height: 20,
                    backgroundColor: 'rgba(235, 10, 30, 0.55)',
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    marginLeft: -12,
                    justifyContent: 'center',
                    paddingLeft: 50,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '800',
                      color: '#ffffff',
                    }}
                  >
                    Highway MPG 25
                  </Text>
                </View>

                <View
                  style={{
                    height: 20,
                    backgroundColor: '#d10d1f',
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                    marginLeft: 0,
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
                    Combined MPG 35
                  </Text>
                </View>

                <View
                  style={{
                    height: 20,
                    backgroundColor: 'rgba(235, 10, 30, 0.32)',
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                    marginLeft: -1,
                    justifyContent: 'center',
                    paddingLeft: 27,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '800',
                      color: '#ffffff',
                    }}
                  >
                    City MPG 18
                  </Text>
                </View>
              </View>
            </View>

                    {/* First Year Stats */}
            <View
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
                  2021
                </Text>
              </View>

              <View style={{ flex: 1 }}>
                <View
                  style={{
                    height: 20,
                    backgroundColor: 'rgba(235, 10, 30, 0.55)',
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    marginLeft: -12,
                    justifyContent: 'center',
                    paddingLeft: 50,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '800',
                      color: '#ffffff',
                    }}
                  >
                    Highway MPG 25
                  </Text>
                </View>

                <View
                  style={{
                    height: 20,
                    backgroundColor: '#d10d1f',
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                    marginLeft: 0,
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
                    Combined MPG 35
                  </Text>
                </View>

                <View
                  style={{
                    height: 20,
                    backgroundColor: 'rgba(235, 10, 30, 0.32)',
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                    marginLeft: -1,
                    justifyContent: 'center',
                    paddingLeft: 27,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '800',
                      color: '#ffffff',
                    }}
                  >
                    City MPG 18
                  </Text>
                </View>
              </View>
            </View>

            {/* First Year Stats */}
            <View
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
                  2021
                </Text>
              </View>

              <View style={{ flex: 1 }}>
                <View
                  style={{
                    height: 20,
                    backgroundColor: 'rgba(235, 10, 30, 0.55)',
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    marginLeft: -12,
                    justifyContent: 'center',
                    paddingLeft: 50,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '800',
                      color: '#ffffff',
                    }}
                  >
                    Highway MPG 25
                  </Text>
                </View>

                <View
                  style={{
                    height: 20,
                    backgroundColor: '#d10d1f',
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                    marginLeft: 0,
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
                    Combined MPG 35
                  </Text>
                </View>

                <View
                  style={{
                    height: 20,
                    backgroundColor: 'rgba(235, 10, 30, 0.32)',
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                    marginLeft: -1,
                    justifyContent: 'center',
                    paddingLeft: 27,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '800',
                      color: '#ffffff',
                    }}
                  >
                    City MPG 18
                  </Text>
                </View>
              </View>
            </View>

            {/* First Year Stats */}
            <View
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
                  2021
                </Text>
              </View>

              <View style={{ flex: 1 }}>
                <View
                  style={{
                    height: 20,
                    backgroundColor: 'rgba(235, 10, 30, 0.55)',
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    marginLeft: -12,
                    justifyContent: 'center',
                    paddingLeft: 50,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '800',
                      color: '#ffffff',
                    }}
                  >
                    Highway MPG 25
                  </Text>
                </View>

                <View
                  style={{
                    height: 20,
                    backgroundColor: '#d10d1f',
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                    marginLeft: 0,
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
                    Combined MPG 35
                  </Text>
                </View>

                <View
                  style={{
                    height: 20,
                    backgroundColor: 'rgba(235, 10, 30, 0.32)',
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                    marginLeft: -1,
                    justifyContent: 'center',
                    paddingLeft: 27,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '800',
                      color: '#ffffff',
                    }}
                  >
                    City MPG 18
                  </Text>
                </View>
              </View>
            </View>

            <View style={{ marginTop: -100 }}>
  <Text
    style={{
      fontSize: 32,
      fontWeight: '800',
      color: '#ffffff',
      lineHeight: 38.4,
      marginBottom: 40,
      transform: [{ translateY: 275 }]
    }}
  >
    CO2{'\n'}Emissions
  </Text>
  
  <View style={{
    height: 400,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    {/* City CO2 - Top Circle */}
    <View style={{
      position: 'absolute',
      top: 0,
      left: '50%',
      transform: [{ translateX: -65 }]
    }}>
      <ImageBackground
        style={{
          width: 130,
          height: 130,
        }}
        source={require('/Users/afsararif/Documents/HackUTD24/Suprahotfire/assets/images/ellipse4.png')}
        resizeMode="cover"
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '800',
              color: '#ffffff',
              textAlign: 'center',
            }}
          >
            358{'\n'}City CO2
          </Text>
        </View>
      </ImageBackground>
    </View>

    {/* Combined CO2 - Right Circle */}
    <View style={{
      position: 'absolute',
      top: '50%',
      right: 0,
      transform: [{ translateY: -65 }]
    }}>
      <ImageBackground
        style={{
          width: 130,
          height: 130,
        }}
        source={require('/Users/afsararif/Documents/HackUTD24/Suprahotfire/assets/images/ellipse4.png')}
        resizeMode="cover"
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '800',
              color: '#ffffff',
              textAlign: 'center',
            }}
          >
            321{'\n'}Combined{'\n'}CO2
          </Text>
        </View>
      </ImageBackground>
    </View>

    {/* Highway CO2 - Bottom Circle */}
    <View style={{
      position: 'absolute',
      bottom: 0,
      left: '50%',
      transform: [{ translateX: -65 }]
    }}>
      <ImageBackground
        style={{
          width: 130,
          height: 130,
        }}
        source={require('/Users/afsararif/Documents/HackUTD24/Suprahotfire/assets/images/ellipse4.png')}
        resizeMode="cover"
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '800',
              color: '#ffffff',
              textAlign: 'center',
            }}
          >
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