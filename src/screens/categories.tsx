import React, { useState } from 'react';
import { View, Image, ScrollView,TouchableOpacity, TouchableWithoutFeedback, StyleSheet, Text } from 'react-native';
import Category from '../components/categoriesCarousel';
import Search from '../components/searches';

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
                      <View style={{ position: "absolute", left: 0, right: 0, top: 0, padding: 20, backgroundColor: "#FFFFFF", height: 800, width: 250,zIndex:40 }}>
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

                <Category title={"All Categories"} wrap={"wrap"} widthHeight={150}/>
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
