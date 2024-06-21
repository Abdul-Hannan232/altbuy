import { View, Text, ImageBackground, Dimensions } from "react-native";
import {images} from "../data/categoriesData.js"
import { Button } from "@gluestack-ui/themed";
export default function Category({ title, wrap, widthHeight,navigation }: any) {
    return <>
        <View style={{ padding: 33 }}>
            <Text style={{ fontSize: 22, color: "#2D3748", fontWeight: "bold" }}>{title}</Text>
            <View style={{ display: "flex", flexWrap: wrap, flexDirection: "row", alignItems: "center", gap: 10, marginTop: 60 }}>
                {images ? images.map((item: any,) => {
                    return <>
                        <View >
                        <Button         onPress={() => navigation.navigate('categoryDetail')}style={{backgroundColor:"transparent",width:100}}>
                            <ImageBackground source={item.image}
                           
                                style={{
                                    resizeMode: 'contain',
                                    width: widthHeight, height: widthHeight, display: "flex", justifyContent: "flex-end", flexDirection: "column", alignItems: "center", paddingBottom: 10
                                }}>
                                
                                <Text style={{ color: "#FFFFFF", fontSize: 15, }}>{item.name}</Text>
                              
                            </ImageBackground>
                            </Button>
                        </View>
                    </>
                }) : "loading"}
            </View>
        </View>
    </>
}