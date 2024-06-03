import { ButtonText, Button, Center, GluestackUIProvider, Input, InputField, Text } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config'; // Optional if you want to use default theme
import { Image, ImageBackground, View } from 'react-native';
import Category from '../components/categoriesCarousel';
const App = () => {
    return (
        <GluestackUIProvider >
            <View style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 30,
                borderColor:"#E2E8F0",
                borderWidth:2,
            }}>
                {/* <CiMenuFries /> */}
                <Text style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 20,

                }}>
                    <Image source={require('./../../assets/images/menu.png')} />

                    <Text style={{ color: "#D21F3C", fontSize: 20, fontWeight: "bold", margin: 30 }}> BUY-NOT</Text>
                </Text>
                <Image source={require('./../../assets/images/search-normal.png')} />

            </View>
<Category/>
        </GluestackUIProvider>
    );
}
export default App