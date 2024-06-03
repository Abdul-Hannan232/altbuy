import { View, Text, ImageBackground, Dimensions } from "react-native";
import data from "../data/categoriesData.json"
export default function Category({ title, wrap, widthHeight }: any) {
    // const imageMapping: any = {
    //     'beverages': require('./../../assets/images/beverages.png'),
    //     'snacks': require('./../../assets/images/snacks.png'),
    //     'sauces': require('./../../assets/images/sauces.png'),
    //     'dairy': require('./../../assets/images/dairy.png'),
    //     // Add more mappings as needed
    // };
    return <>


        <View style={{ padding: 33 }}>
            <Text style={{ fontSize: 22, color: "#2D3748", fontWeight: "bold" }}>{title}</Text>
            <View style={{ display: "flex", flexWrap: wrap, flexDirection: "row", alignItems: "center", gap: 10, marginTop: 20 }}>
                {/* {data ? data.map((item) => {
                    console.log("data", item.image)
                    return <>
                        <View>
                            <ImageBackground source={imageMapping[item.image]} // Use the mapped image source
                                style={{ width: widthHeight, height: widthHeight, display: "flex", justifyContent: "flex-end", flexDirection: "column", alignItems: "center", paddingBottom: 10 }}>

                                <Text style={{ color: "#FFFFFF", fontSize: 15, }}>{item.name}</Text>
                            </ImageBackground>
                        </View>
                    </>
                }) : "loading"} */}

                <View>
                    <ImageBackground source={require('./../../assets/images/beverages.png')} style={{ width: widthHeight, height: widthHeight, display: "flex", justifyContent: "flex-end", flexDirection: "column", alignItems: "center", paddingBottom: 10 }}>

                        <Text style={{ color: "#FFFFFF", fontSize: 15, }}>Beverages</Text>
                    </ImageBackground>
                </View>

                <View>
                    <ImageBackground source={require('./../../assets/images/snacks.png')} style={{ width: widthHeight, height: widthHeight, display: "flex", justifyContent: "flex-end", flexDirection: "column", alignItems: "center", paddingBottom: 10 }}>

                        <Text style={{ color: "#FFFFFF", fontSize: 15, }}>Snacks</Text>
                    </ImageBackground>
                </View>
                <View>
                    <ImageBackground source={require('./../../assets/images/sauces.png')} style={{ width: widthHeight, height: widthHeight, display: "flex", justifyContent: "flex-end", flexDirection: "column", alignItems: "center", paddingBottom: 10 }}>

                        <Text style={{ color: "#FFFFFF", fontSize: 15, }}>Sauces</Text>
                    </ImageBackground>
                </View>
                <View>
                    <ImageBackground source={require('./../../assets/images/dairy.png')} style={{ width: widthHeight, height: widthHeight, display: "flex", justifyContent: "flex-end", flexDirection: "column", alignItems: "center", paddingBottom: 10 }}>

                        <Text style={{ color: "#FFFFFF", fontSize: 15, }}>Dairy</Text>
                    </ImageBackground>
                </View>
                <View>
                    <ImageBackground source={require('./../../assets/images/beverages.png')} style={{ width: widthHeight, height: widthHeight, display: "flex", justifyContent: "flex-end", flexDirection: "column", alignItems: "center", paddingBottom: 10 }}>

                        <Text style={{ color: "#FFFFFF", fontSize: 15, }}>Beverages</Text>
                    </ImageBackground>
                </View>

                <View>
                    <ImageBackground source={require('./../../assets/images/snacks.png')} style={{ width: widthHeight, height: widthHeight, display: "flex", justifyContent: "flex-end", flexDirection: "column", alignItems: "center", paddingBottom: 10 }}>

                        <Text style={{ color: "#FFFFFF", fontSize: 15, }}>Snacks</Text>
                    </ImageBackground>
                </View>
                <View>
                    <ImageBackground source={require('./../../assets/images/sauces.png')} style={{ width: widthHeight, height: widthHeight, display: "flex", justifyContent: "flex-end", flexDirection: "column", alignItems: "center", paddingBottom: 10 }}>

                        <Text style={{ color: "#FFFFFF", fontSize: 15, }}>Sauces</Text>
                    </ImageBackground>
                </View>
                <View>
                    <ImageBackground source={require('./../../assets/images/dairy.png')} style={{ width: widthHeight, height: widthHeight, display: "flex", justifyContent: "flex-end", flexDirection: "column", alignItems: "center", paddingBottom: 10 }}>

                        <Text style={{ color: "#FFFFFF", fontSize: 15, }}>Dairy</Text>
                    </ImageBackground>
                </View>
            </View>
        </View>
    </>
}