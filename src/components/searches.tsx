import React from 'react';
import { View, ImageBackground, Image, StyleSheet } from "react-native";
import { ButtonText, Button, Center, GluestackUIProvider, Input, InputField, Text } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';

export default function Search({ title,categories }: any) {
    const navigation = useNavigation();

    return (
        <View style={styles.root}>
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <View style={{ borderBottomColor: "gray", borderWidth: 1, paddingBottom: 30, borderRightColor: "transparent", borderLeftColor: "transparent", borderTopColor: "transparent" }}>
                    <View style={styles.row}>
                        <View style={styles.card}>
                            <ImageBackground
                                source={require('./../../assets/images/cocacola.png')}
                                style={styles.imageBackground}>
                                <Image source={require('./../../assets/images/israel.png')} style={styles.image} />
                            </ImageBackground>
                            <Text style={styles.cardText}>Coca-Cola</Text>
                        </View>
                        <Image source={require('./../../assets/images/arrow.png')} style={{ position: "absolute", left: 147, zIndex: 50 }} />
                        <View style={styles.card}>
                            <ImageBackground
                                source={require('./../../assets/images/colanext.png')}
                                style={styles.imageBackground}
                            >
                                <Image source={require('./../../assets/images/pak.png')} style={styles.image} />
                            </ImageBackground>
                            <Text style={styles.cardText}>Cola Next</Text>
                        </View>
                    </View>
                    <Text onPress={() => navigation.navigate("categoryDetail")} style={{ color: "#D21F3C", textAlign: "center", fontSize: 15, fontWeight: "bold", marginTop: 20 }}> View All Alternatives</Text>
                </View>
                <View style={{ borderBottomColor: "gray", borderWidth: 1, paddingBottom: 30, marginBottom: 30, borderRightColor: "transparent", borderLeftColor: "transparent", borderTopColor: "transparent" }}>
                    <View style={styles.row}>
                        <View style={styles.card}>
                            <ImageBackground
                                source={require('./../../assets/images/cocacola.png')}
                                style={styles.imageBackground}
                            >
                                <Image source={require('./../../assets/images/israel.png')} style={styles.image} />
                            </ImageBackground>
                            <Text style={styles.cardText}>Coca-Cola</Text>
                        </View>
                        <Image source={require('./../../assets/images/arrow.png')} style={{ position: "absolute", left: 147, zIndex: 50 }} />
                        <View style={styles.card}>
                            <ImageBackground
                                source={require('./../../assets/images/colanext.png')}
                                style={styles.imageBackground}
                            >
                                <Image source={require('./../../assets/images/pak.png')} style={styles.image} />
                            </ImageBackground>
                            <Text style={styles.cardText}>Cola Next</Text>
                        </View>
                    </View>
                    <Text style={{ color: "#D21F3C", textAlign: "center", fontSize: 15, fontWeight: "bold", marginTop: 20 }}> View All Alternatives</Text>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "#FFFFFF",

    },
    container: {
        padding:20,
    },
    title: {
        fontSize: 22,
        color: "#2D3748",
        fontWeight: "bold",
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        gap: 20
    },
    card: {
       
        padding: 8,
        borderColor: "#E2E8F0",
        backgroundColor: "#F8F9FA",
                height: 155,
        borderWidth: 1,
        borderRadius: 20,
        marginRight: 10, // Added marginRight to simulate gap
        zIndex: 20
    },
    imageBackground: {
        height: 105,
        width: 140,
    },
    image: {
        width: 50,
        height: 50,
    },
    cardText: {
        fontSize: 15,
        color: "black",
        fontWeight: "bold",
        paddingLeft: 15,
        paddingTop: 5,
    },
});
