import { ButtonText, Button, Center, GluestackUIProvider, Input, InputField, Text } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config'; // Optional if you want to use default theme
import { Image, ImageBackground, StyleSheet, TextInput, View } from 'react-native';
import Footer from '../components/footer';
import { useRef } from 'react';

export default function App({ navigation }: any) {
    const inputRefs = [
        useRef<TextInput>(null),
        useRef<TextInput>(null),
        useRef<TextInput>(null),
        useRef<TextInput>(null),
        useRef<TextInput>(null),
    ];

    const handleInputChange = (text: string, index: number) => {
        if (text.length === 1 && index < inputRefs.length - 1) {
            inputRefs[index + 1].current?.focus();
        }
    };

    return (
        <GluestackUIProvider config={config}>
            <Text style={{ color: "#D21F3C", fontSize: 20, fontWeight: "bold", margin: 30 }}> BUY-NOT</Text>
            <View style={{ flex: 1 }}>
                <ImageBackground
                    source={require('./../../assets/images/background.png')}
                    style={{ height: 800 }}
                >
                    <View
                        style={{
                            marginLeft: 25,
                            marginRight: 25,
                            marginTop: 60,
                            borderRadius: 40,
                            fontSize: 42,
                            lineHeight: 84,
                            fontWeight: 'bold',
                            textAlign: "center",
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            opacity: 80,
                            display: 'flex',
                            flexDirection: 'column',
                            padding: 30
                        }}
                    >
                        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#FFFFFF", textAlign: "center" }}>OTP Verification</Text>
                        <Text style={{ color: "#FFFFFF", textAlign: "center", fontSize: 12, marginTop: 10 }}> OTP has been sent to your mobile number</Text>
                        <Text style={{ color: "#FFFFFF", textAlign: "center", fontSize: 10, marginTop: 2, fontWeight: "bold" }}>+92 123 3456 78</Text>

                        {/* //username input field */}



                        <View style={styles.container}>
                            {inputRefs.map((ref, index) => (
                                <TextInput
                                    key={index}
                                    ref={ref}
                                    style={styles.input}
                                    keyboardType="numeric"
                                    maxLength={1}
                                    onChangeText={(text) => handleInputChange(text, index)}
                                />
                            ))}
                        </View>
                        {/* phone number field */}



                        <Text style={{ color: "#FFFFFF", textAlign: "center", fontSize: 10, marginTop: 20 }}>Didn’t Received?</Text>
                        <Text style={{ color: "#FDD015", textAlign: "center", fontSize: 13, marginTop: 2 }}>Resend OTP</Text>

                        <Button onPress={() => navigation.navigate('Home')} style={{ borderRadius: 10, marginTop: 30, backgroundColor: "#D21F3C" }} size="lg" variant="solid" action="negative" isDisabled={false} isFocusVisible={true} >
                            <ButtonText>Submit </ButtonText>
                        </Button>

                    </View>
                </ImageBackground>
            </View>
        </GluestackUIProvider>
    );
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        marginTop: 40,
    },
    input: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderColor: 'transparent',
        borderRadius: 15,
        fontSize: 20,
        color: '#FFFFFF',
        textAlign: 'center',
        height: 50,
        width: 50,
    },
});