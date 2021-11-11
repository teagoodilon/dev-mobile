import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Animated } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import profile from './src/assets/profile.jpg';


export default function App() {
  const [currentTab, setCurrentTab] = useState("home");
  const [showMenu, setShowMenu] = useState(false);

  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue= useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar backgroundColor='white' style="dark" />
      <View style={{justifyContent: 'flex-start', padding: 20, marginTop: 10}}>
        <Image source={profile} style={{
          width: 80,
          height: 80,
          borderRadius: 10
        }}></Image>
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'white',
          marginTop: 10
        }}>Roger Alvarenga</Text>

        <TouchableOpacity>
          <Text style={{
            marginTop: 6,
            color: 'white'
          }}>Ver Perfil</Text>
        </TouchableOpacity>

        <View style={{ flexGrow: 1, marginTop: 40}}>
          {

          }
          {TabButton(currentTab, setCurrentTab, "Mapa", profile)}
          {TabButton(currentTab, setCurrentTab, "Programação", profile)}
          {TabButton(currentTab, setCurrentTab, "Oficinas", profile)}
          {TabButton(currentTab, setCurrentTab, "Reportar", profile)}
        </View>
        <View>
          {TabButton(currentTab, setCurrentTab, "Sair", profile)}
        </View>
      </View>
        {

        }
        <Animated.View style={{
          flexGrow: 1,
          backgroundColor: 'white',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: 15,
          paddingVertical: 20,
          borderRadius: showMenu ? 20: 0,
          transform: [
            { scale: scaleValue },
            {translateX: offsetValue }
          ]
        }}>
          {
            
          }
          <Animated.View style={{
            transform: [{
              translateY: closeButtonOffset
            }]
          }}>
            <TouchableOpacity onPress={()=>{
              Animated.timing(scaleValue, {
                toValue: showMenu ? 1 : 0.88,
                duration: 300,
                useNativeDriver: true
              })
                .start()

              Animated.timing(offsetValue, {
                toValue: showMenu ? 1 : 220,
                duration: 300,
                useNativeDriver: true
              })
                .start()

              Animated.timing(closeButtonOffset, {
                toValue: !showMenu ? -30 : 0,
                duration: 300,
                useNativeDriver: true
              })
                .start()

              setShowMenu(!showMenu);
            }}>

              <Image source={profile} style={{
                width: 20,
                height: 20,
                tintColor: 'black',
                marginTop: 40,
              }}></Image>

            </TouchableOpacity>

            <Text style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: 'black',
                paddingTop: 20
              }}>{currentTab}</Text>

              <Image source={profile} style={{
                width: '100%',
                height: 300,
                borderRadius: 15,
                marginTop: 20
              }}></Image>

              <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                paddingTop: 15,
                paddingBottom: 5
              }}>Roger Alvarenga</Text>
              
              <Text>Jornalista, Pai de família, gosta de leite</Text>
            </Animated.View>
        </Animated.View>
    </SafeAreaProvider>
  );
}

const TabButton = (currentTab, setCurrentTab, title, image) =>{
  return (
    <TouchableOpacity onPress={() => {
      if(title == "Sair"){
        
      } else {
        setCurrentTab(title)
      }
    }}>
      <View style={{
        flexDirection: "row",
        alignItems: 'center',
        paddingVertical: 8,
        backgroundColor: currentTab == title ? 'white' : 'transparent',
        paddingLeft: 5,
        paddingRight: 20,
        borderRadius: 8,
        marginTop:10
      }}>
      <Image source={image} style={{
        width: 25, height: 25,
        tintColor: currentTab == title ? "orange" : "white"
      }}></Image>

      <Text style={{
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: 15,
        color: currentTab == title ? "orange" : "white"
      }}>{title}</Text>

      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
