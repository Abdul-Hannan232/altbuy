import { ButtonText, Button, Center, GluestackUIProvider, Input, InputField, Text } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config'; // Optional if you want to use default theme
import { Image, ImageBackground, View } from 'react-native';
 const  App=()=> {
    return (
        <GluestackUIProvider >
            <View style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 30
            }}>
                {/* <CiMenuFries /> */}

                <Text style={{
                    display: "flex",
                    flexDirection: "row"

                }}>
                    <Text style={{ color: "#D21F3C", fontSize: 20, fontWeight: "bold", margin: 30 }}> BUY-NOT</Text>
                    {/* <CiSearch /> */}
                </Text>
            </View>

        </GluestackUIProvider>
    );
}
export default App