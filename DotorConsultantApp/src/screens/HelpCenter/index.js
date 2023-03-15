import React, { useState } from "react";
import { View, Text, ImageBackground, TextInput, FlatList, TouchableOpacity } from 'react-native'
import Header from "../../components/Header";
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";

const data =[
    {
        id:0,
        name:"Booking a new Appointment"
    },
    {
        id:1,
        name:"Existing Appointment"
    },
    {
        id:2,
        name:"Online consultations"
    },
    {
        id:3,
        name:"Feedbacks"
    },
    {
        id:4,
        name:"Medicine orders"
    },
    {
        id:5,
        name:"Diagnostic Tests"
    },
    {
        id:6,
        name:"Health plans"
    },
    {
        id:7,
        name:"My account and Practo Drive"
    },
    {
        id:8,
        name:"Have a feature in mind"
    },
    {
        id:9,
        name:"Other issues"
    },
]

export default function HelpCenter({ navigation }) {

    const [value, setValue] = useState('I have an issue with')

    return (
        <ImageBackground source={Images.bg} style={styles.container}>
            <Header
                onPressLeft={() => navigation.goBack()}
                titleStyle={styles.title}
                title="Help center"
                showRight={false}
            />
            <View style={styles.search_container}>
                <TextInput
                    placeholder="Search....."
                    value={value}
                    onChangeText={setValue}
                    style={styles.input}
                    editable={false}
                />
            </View>
            <FlatList
                style={styles.list}
                data={data}
                showsVerticalScrollIndicator={false}
                renderItem={({item,index})=>{
                    return(
                        <TouchableOpacity style={styles.item}>
                            <Text style={styles.name}>{item.name}</Text>
                            {Icons.Icons({name:"next_arrow", height:13, width:7})}
                        </TouchableOpacity>
                    )
                }}
            />
        </ImageBackground>
    )
}