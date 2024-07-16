import React, { useState } from 'react';
import { View, Image, TouchableOpacity, TouchableWithoutFeedback, ScrollView, StyleSheet, Text, ImageBackground, SafeAreaView } from 'react-native';
import Category from '../components/categoriesCarousel';
import { images } from "../data/categoriesData.js"
import Footer from '../components/footer';
import Header from "../components/header"
const MyComponent = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuPress = () => {
        setMenuOpen(!menuOpen);
    };

    const handlePagePress = () => {
        if (menuOpen) {
            setMenuOpen(false);
        }
    };

    return (
        <SafeAreaView style={styles.safeContainer}>

            <TouchableWithoutFeedback onPress={handlePagePress}>
                    <View style={{ flex: 1 }}>

                        <Header />
                        <ScrollView contentContainerStyle={styles.scrollContent}>
                            <Text style={{ color: "#2D3748", fontSize: 20, marginTop: 90, fontWeight: "bold", textAlign: "center" }}>Coca Cola</Text>
                            <Text style={{ color: "#D21F3C", fontSize: 13, marginTop: 3, textAlign: "center" }}>All Alternatives</Text>
                            <View style={styles.card}>
                                <ImageBackground
                                    source={require('./../../assets/images/cocacola.png')}
                                    style={styles.imageBackground}
                                >
                                    <Image source={require('./../../assets/images/israel.png')} style={styles.image} />
                                </ImageBackground>
                                <Text style={styles.cardText}>Coca-Cola</Text>
                            </View>
                            <Image source={require('./../../assets/images/arrow.png')} style={{ position: "absolute", transform: 'rotate(90deg)', left: 167, top: 480, zIndex: 50 }} />
                            <View style={{ display: "flex", flexWrap: "wrap", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 10, marginTop: 10 }}>
                                {images ? images.map((item: any,) => {
                                    return <>
                                        <View style={styles.row}>
                                            <View style={styles.card2}>
                                                <ImageBackground
                                                    source={require('./../../assets/images/colanext.png')}
                                                    style={styles.imageBackground2}>
                                                    <Image source={require('./../../assets/images/pak.png')} style={styles.image2} />
                                                </ImageBackground>
                                                <Text style={styles.cardText2}>Coca-Next</Text>
                                            </View>

                                        </View>
                                    </>
                                }) : "loading"}
                            </View>
                        </ScrollView>
                        <Footer />
                    </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    scrollContent: {
        paddingBottom: 100, // Adjusted padding to prevent content from being hidden behind the footer
    },
    safeContainer: {
        flex: 1,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        gap: 20
    },
    card: {
        padding: 12,
        height: 340,
        width: 350,
        margin: "auto",
        borderWidth: 1,
        borderRadius: 30,
        zIndex: 20,
        marginBottom: 20,
        marginTop: 20,
        borderColor: "#E2E8F0",
        backgroundColor: "#F8F9FA",
    },
    imageBackground: {
        height: 230,
        width: 320,
    }, cardText: {
        fontSize: 25,
        color: "black",
        fontWeight: "bold",
        paddingLeft: 15,
        paddingTop: 10,
    }, image: {
        width: 100,
        height: 100,
    },


    card2: {

        padding: 8,
        borderColor: "#E2E8F0",
        backgroundColor: "#F8F9FA",
        height: 155,
        borderWidth: 1,
        borderRadius: 20,
        marginRight: 10, // Added marginRight to simulate gap
        zIndex: 20
    },
    imageBackground2: {
        height: 110,
        width: 140,
    },
    image2: {
        width: 50,
        height: 50,
    },
    cardText2: {
        fontSize: 15,
        color: "black",
        fontWeight: "bold",
        paddingLeft: 15,
        paddingTop: 5,
    },
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 30,
        borderColor: "#E2E8F0",
        borderWidth: 2,
        position: "relative",
    },
    headerText: {
        display: "flex",
        flexDirection: "row",
        gap: 20,
    },
    headerTitle: {
        color: "#D21F3C",
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 30,
    },
    menu: {
        position: 'absolute',
        top: 80, // Adjust according to your header height
        left: 0,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
});

export default MyComponent;
