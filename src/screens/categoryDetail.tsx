import React, { useState } from 'react';
import { View, Image, TouchableOpacity, TouchableWithoutFeedback, ScrollView, StyleSheet, Text, ImageBackground, SafeAreaView } from 'react-native';
import Category from '../components/categoriesCarousel';
import { images } from "../data/categoriesData.js"
import Footer from '../components/footer';

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
                <ScrollView style={{ flex: 1 }}>

                    <View style={{ flex: 1 }}>
                        <View style={styles.header}>
                            <Text style={styles.headerText}>
                                <TouchableOpacity onPress={handleMenuPress}>
                                    <Image source={require('./../../assets/images/menu.png')} />
                                </TouchableOpacity>
                                <Text style={styles.headerTitle}> BUY-NOT</Text>
                            </Text>
                            <Image source={require('./../../assets/images/search-normal.png')} />
                        </View>

                        {menuOpen && (
                            <View style={{ position: "absolute", left: 0, right: 0, top: 0, padding: 20, backgroundColor: "#FFFFFF", height: 800, width: 250, zIndex: 40 }}>
                                <View style={{ borderColor: "gray", borderWidth: 2, backgroundColor: "#FFFFFF", borderRadius: 20, paddingLeft: 20, paddingTop: 10, paddingBottom: 10, marginRight: 20 }}>
                                    <Text style={{ color: "#2D3748", fontSize: 20, fontWeight: "bold" }}>Username</Text>
                                    <Text style={{ fontSize: 10, marginTop: 4 }}>username@gmail.com</Text>
                                    <Text style={{ fontSize: 10 }}>+92 123 456 78</Text>
                                </View>
                                <View style={{ display: "flex", flexDirection: "row", gap: 5, alignItems: "center", marginTop: 40, borderBottomColor: "#E2E8F0", borderWidth: 1, paddingBottom: 20, borderRightColor: "transparent", borderLeftColor: "transparent", borderTopColor: "transparent", marginRight: 20 }}>
                                    <Image source={require('./../../assets/images/like.png')} />
                                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>Feedback</Text>
                                </View>
                                <View style={{ display: "flex", flexDirection: "row", gap: 5, alignItems: "center", marginTop: 20, borderBottomColor: "#E2E8F0", borderWidth: 1, paddingBottom: 20, borderRightColor: "transparent", borderLeftColor: "transparent", borderTopColor: "transparent", marginRight: 20 }}>
                                    <Image source={require('./../../assets/images/share.png')} />
                                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>Share this app</Text>
                                </View>
                                <View style={{ display: "flex", flexDirection: "row", gap: 5, alignItems: "center", marginTop: 20 }}>
                                    <Image source={require('./../../assets/images/terms.png')} />
                                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>Terms & Conditions</Text>
                                </View>
                            </View>
                        )}

                        <Text style={{ color: "#2D3748", fontSize: 20, marginTop: 30, fontWeight: "bold", textAlign: "center" }}>Coca Cola</Text>
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
                        <Image source={require('./../../assets/images/arrow.png')} style={{ position: "absolute", transform: 'rotate(90deg)', left: 157, top: 510, zIndex: 50 }} />
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
                     
                        <Footer />
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
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
        height: 250,
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
