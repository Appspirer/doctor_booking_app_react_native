import React from "react";
import { View, Text, Dimensions, ImageBackground, TouchableOpacity, StatusBar } from 'react-native'
import styles from "./styles";
import Carousel from 'react-native-reanimated-carousel';
import Images from "../../themes/Images";

const { width, height } = Dimensions.get('window');

const data = [
    {
        id: 0,
        img: Images.boarding1,
        name: "Find Trusted Doctors",
        description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of it over 2000 years old."
    },
    {
        id: 1,
        img: Images.boarding2,
        name: "Choose Best Doctors",
        description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of it over 2000 years old."
    },
    {
        id: 2,
        img: Images.boarding3,
        name: "Easy Appointments",
        description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of it over 2000 years old."
    }
]

export default function Boarding({navigation}) {
    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'}/>
            <Carousel
                loop
                width={width}
                height={height}
                data={data}
                autoPlay={true}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => {}}
                renderItem={({ item, index }) => (
                    <ImageBackground source={item.img} style={styles.bg}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.description}>{item.description}</Text>

                    </ImageBackground>
                )}
            />
            <View style={styles.button_container}>
                <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Login")}>
                    <Text style={styles.text}>Get Started</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.skip}>
                    <Text style={styles.text_skip}>Skip</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}