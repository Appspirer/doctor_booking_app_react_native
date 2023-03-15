import React, { useState } from "react";
import { View, Text, ImageBackground, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native'
import Header from "../../components/Header";
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";

const data = [
    {
        id: 0,
        favorite: false,
        img: Images.category7,
        name: "Dr. Shouey",
        specialist: "Specalist Cardiology"
    },
    {
        id: 1,
        favorite: true,
        img: Images.doctor1,
        name: "Dr. Christenfeld N",
        specialist: "Specalist Cancer"
    },
    {
        id: 2,
        favorite: false,
        img: Images.search1,
        name: "Dr. Shouey",
        specialist: "Specalist Medicine"
    },
    {
        id: 3,
        favorite: true,
        img: Images.feature3,
        name: "Dr. Shouey",
        specialist: "Specalist Dentist"
    },
]

const featureData = [
    {
        id: 0,
        rate: 3.7,
        favorite: false,
        img: Images.feature1,
        name: "Dr. Crick",
        price: 25
    },
    {
        id: 1,
        rate: 3,
        favorite: true,
        img: Images.feature2,
        name: "Dr. Strain",
        price: 22
    },
    {
        id: 2,
        rate: 2.9,
        favorite: false,
        img: Images.category5,
        name: "Dr. Lachinet",
        price: 29
    },
    {
        id: 3,
        rate: 3.7,
        favorite: true,
        img: Images.feature1,
        name: "Dr. Crick",
        price: 25
    },
]

export default function Favorite({ navigation }) {

    const [value, setValue] = useState('')

    return (
        <ImageBackground source={Images.bg} style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Favourite Doctors</Text>
                <View style={styles.search_container}>
                    {Icons.Icons({ name: 'search', height: 13, width: 13 })}
                    <TextInput
                        placeholder="Search....."
                        value={value}
                        onChangeText={setValue}
                        style={styles.input}
                    />
                    <TouchableOpacity onPress={() => setValue("")}>
                        {Icons.Icons({ name: 'ic_x', height: 11, width: 11 })}
                    </TouchableOpacity>
                </View>
                <View>
                    <ScrollView contentContainerStyle={styles.list}>
                        {data.map((item, index) => {
                            return (
                                <TouchableOpacity key={index} style={styles.item}>
                                    <Image source={item.img} style={styles.img} />
                                    <Text style={styles.name}>{item.name}</Text>
                                    <Text style={styles.specialist}>{item.specialist}</Text>
                                    <TouchableOpacity style={styles.heart}>
                                        {Icons.Icons({ name: item.favorite ? "heart_button_red" : 'heart_button', height: 15, width: 16.76 })}
                                    </TouchableOpacity>
                                </TouchableOpacity>
                            )
                        })}
                    </ScrollView>
                </View>
                <View style={styles.row_sub_title}>
                    <Text style={[styles.sub_title, { marginTop: 0 }]}>Feature Doctor</Text>
                    <TouchableOpacity style={styles.see_all_container}>
                        <Text style={styles.see_all}>See all</Text>
                        {Icons.Icons({ name: "next_arrow", height: 9, width: 6 })}
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.feature_list}>
                    {featureData.map((item, index) => {
                        return (
                            <TouchableOpacity key={index} style={[styles.feature_item, { marginRight: index === featureData.length - 1 ? 32 : 16 }]}>
                                <View style={styles.row}>
                                    <TouchableOpacity>
                                        {Icons.Icons({ name: !item.favorite ? 'heart_button' : 'heart_button_red', height: 9, width: 10 })}
                                    </TouchableOpacity>
                                    <View style={styles.row_rating}>
                                        {Icons.Icons({ name: "star_gold", height: 9, width: 9 })}
                                        <Text style={styles.feature_rate}>{item.rate.toFixed(2)}</Text>
                                    </View>
                                </View>
                                <Image source={item.img} style={styles.feature_img} />
                                <Text style={styles.feature_name}>{item.name}</Text>
                                <View style={styles.price_container}>
                                    <Text style={styles.price_icon}>$</Text>
                                    <Text style={styles.price}>{item.price.toFixed(2)}/hours</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
                <View style={{ height: 50 }} />
            </ScrollView>
        </ImageBackground>
    )
}