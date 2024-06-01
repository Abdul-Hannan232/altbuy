/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
  return (
    <>
      <Text style={{ color: "#D21F3C", fontSize: 20, fontWeight: "bold", margin: 30 }}> BUY-NOT</Text>
      <Image source={require('./assets/images/background.png')} style={{ width: "auto", borderRadius: 40 }} />
      <Text style={{ textAlign: "center", fontSize: 30, fontWeight: "bold" }}>Registration</Text>
    
      {/* <SafeAreaView style={{
        width:"70%",
        // margin:"auto",
        display:"flex",

        flexDirection:"column",
        justifyContent:"center",
        backgroundColor:"pink"
      }}>
      <Text style={{
          //  color:"#FFFFFF",
          color:"black",
           fontSize:18,
        
      }}>Username</Text>
        <TextInput
          style={{
            width: "100%",
            marginLeft: "auto",
            marginRight:"auto",
            borderColor: '#000000',
            borderWidth: 1,
            borderRadius: 15,
            paddingLeft: 20,
            backgroundColor:"#00000080",
            color:"#FFFFFF",
          }}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Create your username"
          keyboardType="numeric"
        />
        <TextInput
          style={{
            width: "80%",
            margin: "auto",
            borderWidth: 1,
            borderRadius: 15,
            paddingLeft: 20,
            backgroundColor:"#00000080",
            color:"#FFFFFF",
          }} onChangeText={onChangeNumber}
          value={number}
          placeholder="Enter your email"
          keyboardType="numeric"
        />
      </SafeAreaView> */}
    </>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
