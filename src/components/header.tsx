import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from '@react-navigation/native';
import React, { useState } from "react";

export default function Header() {
    const navigation = useNavigation();
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    const handleMenuPress = () => {
        setMenuOpen(!menuOpen);
    };

    const handleSearchPress = () => {
        setSearchOpen(!searchOpen);
    };

    const handlePagePress = () => {
        if (menuOpen || searchOpen) {
            setMenuOpen(false);
            setSearchOpen(false);
        }
    };

    return (
        <>
            {(menuOpen || searchOpen) && (
                <TouchableWithoutFeedback onPress={handlePagePress}>
                    <View style={styles.overlay} />
                </TouchableWithoutFeedback>
            )}
            <View style={styles.header}>
                <View style={styles.headerText}>
                    <TouchableOpacity onPress={handleMenuPress}>
                        <Image source={require('./../../assets/images/menu.png')} style={{ marginTop: 4 }} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>BUY-NOT</Text>
                </View>
                <TouchableOpacity onPress={handleSearchPress}>
                    <Image source={require('./../../assets/images/search-normal.png')} />
                </TouchableOpacity>
            </View>

            {menuOpen && (
                <View style={styles.menu}>
                    <View style={styles.menuHeader}>
                        <Text style={styles.menuHeaderText}>Username</Text>
                        <Text style={styles.menuSubText}>username@gmail.com</Text>
                        <Text style={styles.menuSubText}>+92 123 456 78</Text>
                    </View>
                    <View style={styles.menuItem}>
                        <Image source={require('./../../assets/images/like.png')} />
                        <Text style={styles.menuItemText}>Feedback</Text>
                    </View>
                    <View style={styles.menuItem}>
                        <Image source={require('./../../assets/images/share.png')} />
                        <Text style={styles.menuItemText}>Share this app</Text>
                    </View>
                    <View style={styles.menuItem}>
                        <Image source={require('./../../assets/images/terms.png')} />
                        <Text style={styles.menuItemText}>Terms & Conditions</Text>
                    </View>
                </View>
            )}
            {searchOpen && (
                <View style={styles.menu2}>
                    <View style={styles.searchContainer}>
                        <View style={styles.searchHeader}>
                            <Image source={require('./../../assets/images/search-normal.png')} />
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeNumber}
                                value={number}
                                placeholder='Search Here...'
                                keyboardType="numeric"
                            />
                            <Text style={styles.clearText}>Clear All</Text>
                        </View>
                    </View>
                    {['Coca Cola', 'Pepsi', 'RedBull'].map((item, index) => (
                        <View key={index} style={styles.searchItem}>
                            <Text style={styles.searchItemText}>{item}</Text>
                            <Image source={require('./../../assets/images/arrow-up.png')} />
                        </View>
                    ))}
                </View>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 5,
    },
    header: {
        position: 'absolute',
        top: 0,
        width: '100%',
        backgroundColor: '#fff',
        zIndex: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        borderBottomColor: '#E2E8F0',
        borderWidth: 1,
        paddingBottom: 20,
        borderColor: 'transparent',
        marginRight: 20,
    },
    menuItemText: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        width: 160,
        borderColor: "transparent",
        fontSize: 18,
    },
    searchContainer: {
        borderBottomColor: "#E2E8F0",
        borderWidth: 1,
        paddingBottom: 20,
        borderTopColor: "transparent",
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
    },
    searchHeader: {
        flexDirection: "row",
        alignItems: "center",
    },
    clearText: {
        color: "#D21F3C",
        fontSize: 16,
    },
    searchItem: {
        marginTop: 20,
        borderBottomColor: "#E2E8F0",
        borderWidth: 1,
        paddingBottom: 20,
        borderTopColor: "transparent",
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    searchItemText: {
        color: "#A0AEC0",
        fontSize: 20,
    },
});
