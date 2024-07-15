import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import React, { useState } from "react";

export default function header() {
    const navigation = useNavigation();
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false)
    const handleMenuPress = () => {
        setMenuOpen(!menuOpen);
    };

    const handlePagePress = () => {
        if (menuOpen || searchOpen) {
            setMenuOpen(false);
            setSearchOpen(false)

        }
    };
    const handleSearchPress = () => {
        setSearchOpen(!searchOpen)
    }
    return (
        <>
        
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
                    <View style={{ borderBottomColor: "#E2E8F0", borderWidth: 1, paddingBottom: 20, borderTopColor: "transparent", borderLeftColor: "transparent", borderRightColor: "transparent" }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
                                <Image source={require('./../../assets/images/search-normal.png')} />
                                <TextInput
                                    style={styles.input}
                                    onChangeText={onChangeNumber}
                                    value={number}
                                    placeholder='Search Here...'
                                    keyboardType="numeric"
                                />
                            </View>
                            <Text style={{ color: "#D21F3C", fontSize: 16 }}>Clear All</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 20, borderBottomColor: "#E2E8F0", borderWidth: 1, paddingBottom: 20, borderTopColor: "transparent", borderLeftColor: "transparent", borderRightColor: "transparent" }}>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <Text style={{ color: "#A0AEC0", fontSize: 20 }}>Coca Cola</Text>

                            <Image source={require('./../../assets/images/arrow-up.png')} />
                        </View>
                    </View>
                    <View style={{ marginTop: 20, borderBottomColor: "#E2E8F0", borderWidth: 1, paddingBottom: 20, borderTopColor: "transparent", borderLeftColor: "transparent", borderRightColor: "transparent" }}>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <Text style={{ color: "#A0AEC0", fontSize: 20 }}>Pepsi</Text>

                            <Image source={require('./../../assets/images/arrow-up.png')} />
                        </View>
                    </View>
                    <View style={{ marginTop: 20, borderBottomColor: "#E2E8F0", borderWidth: 1, paddingBottom: 20, borderTopColor: "transparent", borderLeftColor: "transparent", borderRightColor: "transparent" }}>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <Text style={{ color: "#A0AEC0", fontSize: 20 }}>RedBull</Text>

                            <Image source={require('./../../assets/images/arrow-up.png')} />
                        </View>
                    </View>
                </View>
            )}
        </>
    )
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        width: 160,
        borderColor: "transparent",
        fontSize: 18
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
        justifyContent: "space-around",
        alignItems: 'center',
        zIndex: 1000,
        flexDirection: "row",

    },
})