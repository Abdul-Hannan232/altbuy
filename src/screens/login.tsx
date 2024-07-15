import { ButtonText, Button, Center, GluestackUIProvider, Input, InputField, Text } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config'; // Optional if you want to use default theme
import { Image, ImageBackground, View } from 'react-native';
import Footer from '../components/footer';

export default function App({ navigation }: any) {
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
                        <Text style={{ fontSize: 30, fontWeight: "bold", color: "#FFFFFF", textAlign: "center" }}>Registration</Text>

                        {/* //username input field */}


                        <Text style={{ color: "#FFFFFF", fontSize: 15, marginLeft: 20, marginTop: 30, marginBottom: 10 }}>Username</Text>

                        <Input style={{ borderColor: "transparent", height: 60 }} variant="outline" size="sm" isDisabled={false} isInvalid={false} isReadOnly={false} >
                            <InputField
                                placeholder='Create your username'
                                style={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                    borderColor: "transparent",
                                    borderRadius: 20,
                                    paddingLeft: 20,
                                    color: "#FFFFFF",
                                }}
                            />
                        </Input>

                        {/* //email input field */}


                        <Text style={{ color: "#FFFFFF", fontSize: 15, marginLeft: 20, marginTop: 20, marginBottom: 10 }}>Email</Text>

                        <Input style={{ borderColor: "transparent", height: 60 }} variant="outline" size="sm" isDisabled={false} isInvalid={false} isReadOnly={false} >
                            <InputField
                                placeholder='Enter your email'
                                style={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                    borderColor: "transparent",
                                    borderRadius: 20,
                                    paddingLeft: 20,
                                    color: "#FFFFFF",
                                }}
                            />
                        </Input>

                        {/* phone number field */}

                        <Text style={{ color: "#FFFFFF", fontSize: 15, marginLeft: 20, marginTop: 20, marginBottom: 10 }}>Phone Number</Text>

                        <Input style={{ borderColor: "transparent", height: 60, display: "flex", alignItems: "center", gap: 20 }} variant="outline" size="sm" isDisabled={false} isInvalid={false} isReadOnly={false} >
                            <Image source={require('./../../assets/images/pakistanFlag.png')} style={{
                                width: 40,
                                height: 30,
                                zIndex: 50,
                                marginLeft: 20,
                                padding: 10,
                            }} />
                            <InputField
                                placeholder='Enter your phone number'
                                style={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                    borderColor: "transparent",
                                    borderRadius: 20,
                                    paddingLeft: 60,
                                    position: 'absolute',
                                    left: 10,
                                    top: 0,
                                    bottom: 0,
                                    right: 0,
                                    zIndex: 30,
                                    color: "#FFFFFF",
                                }}
                            />
                        </Input>

                        <Text style={{ color: "#FFFFFF", textAlign: "center", fontSize: 10, marginTop: 20 }}>Why are we getting this information</Text>
                        <Text style={{ color: "#FDD015", textAlign: "center", fontSize: 13, marginTop: 2 }}>Terms & Conditions</Text>

                        <Button onPress={() => navigation.navigate('Otp')}
                            style={{ borderRadius: 10, marginTop: 30, backgroundColor: "#D21F3C" }} size="lg" variant="solid" action="negative" isDisabled={false} isFocusVisible={true} >
                            <ButtonText >Submit </ButtonText>
                        </Button>

                    </View>
                </ImageBackground>
            </View>
        </GluestackUIProvider>
    );
}