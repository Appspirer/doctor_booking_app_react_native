import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, ScrollView, Image } from 'react-native'
import Header from "../../components/Header";
import Rating from "../../components/Rating";
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";

const popularData = [
    {
        id: 0,
        img: Images.popular1,
        name: 'Dr. Truluck Nik',
        specialist: "Medicine Specialist",
        rate: 4
    },
    {
        id: 1,
        img: Images.popular2,
        name: 'Dr. Tranquilli',
        specialist: "Patheology Specialist",
        rate: 4
    },
    {
        id: 2,
        img: Images.popular3,
        name: 'Dr. Truluck Nik',
        specialist: "Medicine Specialist",
        rate: 4
    },
]

const categoryData = [
    {
        id: 0,
        img: Images.category5,
        name: "Dr. Pediatrician",
        specialist: "Specialist Cardiologist ",
        rate: 4,
        view: 2475,
        favorite: true
    },
    {
        id: 1,
        img: Images.category6,
        name: "Dr. Mistry Brick",
        specialist: "Specialist Dentist ",
        rate: 4,
        view: 2893,
        favorite: false
    },
    {
        id: 2,
        img: Images.category7,
        name: "Dr. Ether Wall",
        specialist: "Specialist Cancer",
        rate: 4,
        view: 2754,
        favorite: true
    },
    {
        id: 3,
        img: Images.category8,
        name: "Dr. Johan smith",
        specialist: "Specialist cardiologist",
        rate: 4,
        view: 2475,
        favorite: false
    },
]

export default function Popular({ navigation }) {

    return (
        <ImageBackground source={Images.bg} style={styles.container}>
            <Header
                onPressLeft={() => navigation.goBack()}
                titleStyle={styles.title}
                title=""
                rightIcon={<TouchableOpacity>
                    {Icons.Icons({ name: 'search', height: 18, width: 18 })}
                </TouchableOpacity>}
            />
            <View style={styles.row_sub_title}>
                <Text style={[styles.sub_title, { marginTop: 0 }]}>Popular Doctor </Text>
                <TouchableOpacity style={styles.see_all_container}
                    onPress={() => navigation.navigate("Popular")}
                >
                    <Text style={styles.see_all}>See all</Text>
                    {Icons.Icons({ name: "next_arrow", height: 9, width: 6 })}
                </TouchableOpacity>
            </View>
            <View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.popular_list}>
                    {popularData.map((item, index) => {
                        return (
                            <TouchableOpacity key={index} style={[styles.popular_item, {
                                marginRight: index === popularData.length - 1 ? 32 : 16
                            }]}>
                                <Image source={item.img} style={styles.img} />
                                <Text style={styles.popular_name}>{item.name}</Text>
                                <Text style={styles.popular_specialist}>{item.specialist}</Text>
                                <Rating rate={item.rate} starSize={10} style={{ marginTop: 5 }} />
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            </View>
            <Text style={[styles.sub_title, { marginTop: 20 }]}>Category</Text>
            <View style={styles.category_list}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {categoryData.map((item, index) => {
                        return (
                            <TouchableOpacity key={index} style={[styles.category_item, {
                                marginBottom: index === categoryData.length - 1 ? 30 : 14
                            }]}>
                                <View style={styles.info}>
                                    <Image source={item.img} style={styles.category_img} />
                                    <View>
                                        <Text style={styles.category_name}>{item.name}</Text>
                                        <Text style={styles.category_specialist}>{item.specialist}</Text>
                                        <Rating rate={item.rate} style={{ alignSelf: 'flex-start', marginTop: 10, marginBottom: 0 }} />
                                    </View>
                                </View>
                                <View style={styles.category_right}>
                                    <TouchableOpacity>
                                        {Icons.Icons({ name: item.favorite ? 'heart_button_red' : 'heart_button', height: 17, width: 19 })}
                                    </TouchableOpacity>
                                    <Text style={styles.view}>{(item.view / 1000).toString().slice(0, 3)}
                                        <Text style={styles.full_view}> ({item.view} views)</Text>
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            </View>
        </ImageBackground>
    )
}