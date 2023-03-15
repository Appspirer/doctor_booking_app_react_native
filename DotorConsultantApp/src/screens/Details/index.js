import React from "react";
import { View, Text, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native'
import Header from "../../components/Header";
import Rating from "../../components/Rating";
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";

export default function Details({navigation}) {
    return (
        <ImageBackground source={Images.bg} style={styles.container}>
            <Header
                onPressLeft={() => navigation.goBack()}
                titleStyle={styles.title}
                title="Doctor Details"
                rightIcon={<TouchableOpacity>
                    {Icons.Icons({ name: 'search', height: 18, width: 18 })}
                </TouchableOpacity>}
                style={{paddingBottom:10}}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.info_container}>
                    <View style={styles.top}>
                        <View style={styles.left_info}>
                            <Image source={Images.category5} style={styles.img} />
                            <View>
                                <Text style={styles.name}>Dr. Pediatrician</Text>
                                <Text style={styles.specialist}>Specialist Cardiologist </Text>
                                <Rating rate={4} style={{ alignSelf: 'flex-start', marginBottom: 0 }} starSize={12.45} />
                            </View>
                        </View>
                        <View style={styles.right_info}>
                            <TouchableOpacity>
                                {Icons.Icons({ name: "heart_button_red", height: 17, width: 19 })}
                            </TouchableOpacity>
                            <View style={styles.price_container}>
                                <Text style={styles.price_icon}>$</Text>
                                <Text style={styles.price}>28.00/hr</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Appointment")}>
                        <Text style={styles.text}>Book Now</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.status_container}>
                    <View style={styles.block}>
                        <Text style={styles.number}>100</Text>
                        <Text style={styles.status_text}>Runing</Text>
                    </View>
                    <View style={styles.block}>
                        <Text style={styles.number}>500</Text>
                        <Text style={styles.status_text}>Ongoing</Text>
                    </View>
                    <View style={styles.block}>
                        <Text style={styles.number}>700</Text>
                        <Text style={styles.status_text}>Patient</Text>
                    </View>
                </View>
                <View style={styles.service_container}>
                    <Text style={styles.sub_title}>Services</Text>
                    <Text style={styles.service_number}>1.
                        <Text style={styles.service_content}>  Patient care should be the number one priority.</Text>
                    </Text>
                    <View style={styles.line} />
                    <Text style={styles.service_number}>2.
                        <Text style={styles.service_content}>  If you run your practiceyou know how frustrating.</Text>
                    </Text>
                    <View style={styles.line} />
                    <Text style={styles.service_number}>3.
                        <Text style={styles.service_content}>  That’s why some of appointment reminder system.</Text>
                    </Text>
                </View>
                <View style={styles.map_container}>
                    <Image source={Images.map} style={styles.map} />
                </View>
                <View style={{height:30}}/>
            </ScrollView>
        </ImageBackground>
    )
}