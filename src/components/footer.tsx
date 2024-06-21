import { StyleSheet, Text, View } from "react-native";

export default function footer() {
    return (
        <>
            <View style={styles.footer}>
                <Text style={{ fontSize: 20 }}>Footer text</Text>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 60, // Adjust height as needed
        backgroundColor: '#f0f0f0', // Background color for the footer
        justifyContent: 'center',
        alignItems: 'center',
    },
})