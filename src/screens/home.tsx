import React, { useState } from 'react';
import { View, ScrollView, Image, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, Text, SafeAreaView } from 'react-native';
import Category from '../components/categoriesCarousel';
import Search from '../components/searches';
import Footer from '../components/footer';
import { Input } from '@gluestack-ui/themed';
import { TextInput } from 'react-native';
import Header from '../components/header';
const MyComponent = () => {
 
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false)

    const handlePagePress = () => {
        if (menuOpen || searchOpen) {
            setMenuOpen(false);
            setSearchOpen(false)

        }
    };
   
    return (
        <SafeAreaView style={styles.safeContainer}>
            <TouchableWithoutFeedback onPress={handlePagePress}>
                <View style={{ flex: 1 }}>
                    <Header />
                    <ScrollView contentContainerStyle={styles.scrollContent}>
                        <View style={styles.container}>
                            <Category title={"Popular Categories"} wrap={"none"} widthHeight={100} />
                            <Search title={"Popular Search"} />
                            <Search title={"Popular Search"} />

                        </View>
                    </ScrollView>
                    <Footer />

                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        width: 160,
        borderColor: "transparent",
        fontSize: 18
    },
    safeContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
    scrollContent: {
        paddingBottom: 100, // Adjusted padding to prevent content from being hidden behind the footer
    },
    header: {
        position: 'absolute',
        top: 0,
        width: '100%',
        backgroundColor: '#fff',
        zIndex: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',
        padding: 20,
    },
    headerText: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerTitle: {
        color: "#D21F3C",

        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    menu: {
        position: 'absolute',
        top: 60,
        left: 0,
        right: 0,
        padding: 20,
        backgroundColor: '#FFFFFF',
        height: 800,
        width: 250,
        zIndex: 40,
    },
    menu2: {
        position: 'absolute',
        top: 60,
        zIndex: 60,
        left: 0,
        right: 0,
        padding: 20,
        backgroundColor: '#FFFFFF',
        height: 800,

    },
    menuHeader: {
        borderColor: 'gray',
        borderWidth: 2,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10,
        marginRight: 20,
    },
    menuHeaderText: {
        color: '#2D3748',
        fontSize: 20,
        fontWeight: 'bold',
    },
    menuSubText: {
        fontSize: 10,
        marginTop: 4,
    },
    menuItem: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
        marginTop: 20,
        borderBottomColor: '#E2E8F0',
        borderWidth: 1,
        paddingBottom: 20,
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
        borderTopColor: 'transparent',
        marginRight: 20,
    },
    menuItemText: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 60,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
});

export default MyComponent;
