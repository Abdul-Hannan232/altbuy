import React, { useState } from 'react';
import { View, Image, ScrollView, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, Text } from 'react-native';
import Category from '../components/categoriesCarousel';
import Search from '../components/searches';
import Footer from '../components/footer';
import Header from '../components/header';
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
        <TouchableWithoutFeedback onPress={handlePagePress}>
            <ScrollView style={{ flex: 1 }}>

                <View style={{ flex: 1 }}>
                    <Header />
                    <Category title={"All Categories"} wrap={"wrap"} widthHeight={150} />
                    <Footer />
                </View>
            </ScrollView>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
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
