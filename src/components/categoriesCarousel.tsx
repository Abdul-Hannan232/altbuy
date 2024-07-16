import { View, Text, ImageBackground, Dimensions } from "react-native";
import {images} from "../data/categoriesData.js"
import { Button } from "@gluestack-ui/themed";
import { useNavigation } from '@react-navigation/native';

export default function Category({ title, wrap, widthHeight,boxWidth,gap }: any) {
    const navigation = useNavigation();

    return <>
        <View style={{ padding: 33 ,marginTop: 70}}>
            <Text style={{ fontSize: 22, color: "#2D3748", fontWeight: "bold" }}>{title}</Text>
            <View style={{ display: "flex", flexWrap: wrap,justifyContent:"center", flexDirection: "row", alignItems: "center", gap: gap, marginTop:40 }}>
                {images ? images.map((item: any,) => {
                    return <>
                        <View >
                        <Button  onPress={() => navigation.navigate('categories')}style={{backgroundColor:"transparent",width:boxWidth,height:boxWidth}}>
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