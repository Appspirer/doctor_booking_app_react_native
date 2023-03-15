import React, { useState } from "react";
import { View, Text, Image, ImageBackground, TextInput, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";
import { useIsFocused } from '@react-navigation/native';


const liveData = [
    {
        id: 0,
        img: Images.live1
    },
    {
        id: 1,
        img: Images.live2
    },
    {
        id: 2,
        img: Images.live3
    },
]

const categoryData = [
    {
        id: 0,
        img: Images.category1
    },
    {
        id: 1,
        img: Images.category2
    },
    {
        id: 2,
        img: Images.category3
    },
    {
        id: 3,
        img: Images.category4
    },
]

const doctorData = [
    {
        id: 0,
        img: Images.doctor1,
        name: "Dr. Fillerup Grab",
        description: "Medicine Specialist",
        rate: 4
    },
    {
        id: 1,
        img: Images.doctor2,
        name: "Dr. Blessing",
        description: "Dentist Specialist",
        rate: 4
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
        img: Images.feature3,
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

function FocusAwareStatusBar(props) {
    const isFocused = useIsFocused();

    return isFocused ? <StatusBar {...props} /> : null;
}

export default function Home({ navigation }) {

    const [value, setValue] = useState('')

    const renderRating = (rate) => {
        let goldArr = [...Array(rate).keys()]
        let silverArr = [...Array(5 - rate).keys()]
        return (
            <View style={styles.rating_container}>
                {goldArr.map((item, index) => {
                    return (
                        <View key={index} style={styles.star}>
                            {Icons.Icons({ name: "star_gold", height: 12, width: 12 })}
                        </View>
                    )
                })}
                {silverArr.map((item, index) => {
                    return (
                        <View key={index} style={styles.star}>
                            {Icons.Icons({ name: "star", height: 12, width: 12 })}
                        </View>
                    )
                })}
            </View>
        )
    }

    return (
        <ImageBackground source={Images.bg} style={styles.container}>
            <FocusAwareStatusBar barStyle={'light-content'}/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ImageBackground source={Images.home_bg} style={styles.header}>
                    <View style={styles.info}>
                        <Text style={styles.name}>Hi Handwerker! </Text>
                        <Text style={styles.title}>Find Your Doctor</Text>
                    </View>
                    <Image source={Images.avatar} style={styles.avatar} />
                </ImageBackground>
                <View style={styles.search_container}>
                    {Icons.Icons({ name: 'search', height: 13, width: 13 })}
                    <TextInput
                        placeholder="Search....."
                        value={value}
                        onChangeText={setValue}
                        style={styles.input}
                        onEndEditing={() => navigation.navigate("Search")}
                    />
                    <TouchableOpacity onPress={() => setValue("")}>
                        {Icons.Icons({ name: 'ic_x', height: 11, width: 11 })}
                    </TouchableOpacity>
                </View>
                <Text style={styles.sub_title}>Live Doctors</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.live_list}>
                    {liveData.map((item, index) => {
                        return (
                            <TouchableOpacity key={index} style={[styles.live_item, { marginRight: index === liveData.length - 1 ? 30 : 14 }]}
                                onPress={() => navigation.navigate('LiveChat')}
                            >
                                <Image source={item.img} style={styles.live_img} />
                                <View style={styles.view}>
                                    <View style={styles.live}>
                                        <View style={styles.dot_white} />
                                        <Text style={styles.live_text}>LIVE</Text>
                                    </View>
                                    <View style={styles.play}>
                                        {Icons.Icons({ name: "play", height: 30, width: 30 })}
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.live_list}>
                    {categoryData.map((item, index) => {
                        return (
                            <TouchableOpacity key={index} style={[styles.category_item, { marginRight: index === categoryData.length - 1 ? 32 : 16 }]}>
                                <Image source={item.img} style={styles.category_img} />
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>

                <View style={styles.row_sub_title}>
                    <Text style={[styles.sub_title, { marginTop: 0 }]}>Popular Doctor </Text>
                    <TouchableOpacity style={styles.see_all_container}
                        onPress={() => navigation.navigate("Popular")}
                    >
                        <Text style={styles.see_all}>See all</Text>
                        {Icons.Icons({ name: "next_arrow", height: 9, width: 6 })}
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.live_list}>
                    {doctorData.map((item, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                style={[styles.doctor_item, { marginRight: index === doctorData.length - 1 ? 32 : 16 }]}
                                onPress={()=>navigation.navigate("Details")}
                            >
                                <Image source={item.img} style={styles.doctor_img} />
                                <Text style={styles.doctor_name}>{item.name}</Text>
                                <Text style={styles.doctor_description}>{item.description}</Text>
                                {renderRating(item.rate)}
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
                <View style={styles.row_sub_title}>
                    <Text style={[styles.sub_title, { marginTop: 0 }]}>Feature Doctor</Text>
                    <TouchableOpacity style={styles.see_all_container}>
                        <Text style={styles.see_all}>See all</Text>
                        {Icons.Icons({ name: "next_arrow", height: 9, width: 6 })}
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.live_list}>
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