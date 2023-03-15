import React, { useState } from "react";
import { View, Text, ImageBackground, TextInput, TouchableOpacity, FlatList, Image } from 'react-native'
import Header from "../../components/Header";
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";

const data = [
    {
        id: 0,
        name: "Dr. Shruti Kedia",
        img: Images.search1,
        experience: 7,
        percent: 87,
        patient: 69,
        favorite: true,
        available: "10:00 AM tomorrow",
        specialist: "Tooths Dentist"
    },
    {
        id: 1,
        name: "Dr. Watamaniuk",
        img: Images.search2,
        experience: 9,
        percent: 74,
        patient: 78,
        favorite: false,
        available: "12:00 AM tomorrow",
        specialist: "Tooths Dentist"
    },
    {
        id: 2,
        name: "Dr. Crownover",
        img: Images.search3,
        experience: 5,
        percent: 59,
        patient: 86,
        favorite: true,
        available: "11:00 AM tomorrow",
        specialist: "Tooths Dentist"
    },
    {
        id: 3,
        name: "Dr. Balestra",
        img: Images.search4,
        experience: 6,
        percent: 87,
        patient: 69,
        favorite: false,
        available: "10:00 AM tomorrow",
        specialist: "Tooths Dentist"
    },
    {
        id: 4,
        name: "Dr. Crownover",
        img: Images.search3,
        experience: 5,
        percent: 59,
        patient: 86,
        favorite: true,
        available: "11:00 AM tomorrow",
        specialist: "Tooths Dentist"
    },
    {
        id: 5,
        name: "Dr. Balestra",
        img: Images.search4,
        experience: 6,
        percent: 87,
        patient: 69,
        favorite: false,
        available: "10:00 AM tomorrow",
        specialist: "Tooths Dentist"
    },
]

export default function Search({ navigation }) {

    const [value, setValue] = useState('')

    return (
        <ImageBackground source={Images.bg} style={styles.container}>
            <Header
                onPressLeft={() => navigation.goBack()}
                titleStyle={styles.title}
                title="Find Doctors"
                showRight={false}
            />
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
            <FlatList
                style={styles.list}
                data={data}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity style={[styles.item, { marginBottom: index === data.length - 1 ? 40 : 12 }]}>
                            <View style={styles.top_item}>
                                <View style={styles.info}>
                                    <Image source={item.img} style={styles.img} />
                                    <View style={styles.content}>
                                        <Text style={styles.name}>{item.name}</Text>
                                        <Text style={styles.specialist}>{item.specialist}</Text>
                                        <Text style={styles.text}>{item.experience} Years experience </Text>
                                        <View style={styles.percent_container}>
                                            <View style={styles.percent}>
                                                <View style={styles.dot} />
                                                <Text style={styles.text}>{item.percent}%</Text>
                                            </View>
                                            <View style={styles.percent}>
                                                <View style={styles.dot} />
                                                <Text style={styles.text}>{item.patient} Patient Stories</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <TouchableOpacity style={styles.heart}>
                                    {Icons.Icons({ name: item.favorite ? 'heart_button_red' : 'heart_button', height: 17, width: 19 })}
                                </TouchableOpacity>
                            </View>
                            <View style={styles.bottom_item}>
                                <View>
                                    <Text style={styles.available}>Next Available </Text>
                                    <Text style={styles.open}>{item.available.slice(0, 5)}
                                        <Text style={styles.open_text}>{item.available.slice(5,)}</Text>
                                    </Text>
                                </View>
                                <TouchableOpacity style={styles.button}>
                                    <Text style={styles.text_button}>Book Now</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </ImageBackground>
    )
}