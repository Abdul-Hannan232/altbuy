import { View, Text, ImageBackground, Dimensions } from "react-native";
export default function Category() {
    return <>


        <View style={{ padding: 33 }}>
            <Text style={{ fontSize: 22, color: "#2D3748", fontWeight: "bold" }}>Popular Categories</Text>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10, marginTop: 20 }}>
                <View>
                    <ImageBackground source={require('./../../assets/images/beverages.png')} style={{ width: 100, height: 100, display: "flex", justifyContent: "flex-end", flexDirection: "column", alignItems: "center", paddingBottom: 10 }}>

                        <Text style={{ color: "#FFFFFF", fontSize: 15, }}>Beverages</Text>
                    </ImageBackground>
                </View>
                <View>
                    <ImageBackground source={require('./../../assets/images/snacks.png')} style={{ width: 100, height: 100, display: "flex", justifyContent: "flex-end", flexDirection: "column", alignItems: "center", paddingBottom: 10 }}>

                        <Text style={{ color: "#FFFFFF", fontSize: 15, }}>Snacks</Text>
                    </ImageBackground>
                </View>
                <View>
                    <ImageBackground source={require('./../../assets/images/sauces.png')} style={{ width: 100, height: 100, display: "flex", justifyContent: "flex-end", flexDirection: "column", alignItems: "center", paddingBottom: 10 }}>

                        <Text style={{ color: "#FFFFFF", fontSize: 15, }}>Sauces</Text>
                    </ImageBackground>
                </View>
                <View>
                    <ImageBackground source={require('./../../assets/images/dairy.png')} style={{ width: 100, height: 100, display: "flex", justifyContent: "flex-end", flexDirection: "column", alignItems: "center", paddingBottom: 10 }}>

                        <Text style={{ color: "#FFFFFF", fontSize: 15, }}>Dairy</Text>
                    </ImageBackground>
                </View>

            </View>
        </View>
    </>
}