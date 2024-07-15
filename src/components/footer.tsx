import { Image, StyleSheet, Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function footer() {
    const navigation = useNavigation();

    return (
        <>
            <View style={styles.footer}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Image source={require('./../../assets/images/home-2.png')} />
                    <Text onPress={() => navigation.navigate("home")}>Home</Text>
                </View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Image source={require('./../../assets/images/category-2.png')} />
                    <Text onPress={() => navigation.navigate("categoryDetail")} >Categories</Text>
                </View>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
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