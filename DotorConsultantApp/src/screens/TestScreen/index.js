import React, { useState } from "react";
import { View, Text, ImageBackground, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import Header from "../../components/Header";
import Images from "../../themes/Images";
import styles from "./styles";

var { height, width } = Dimensions.get('window')

const categoryData = [
    {
        id: 0,
        img: Images.free_home,
        name: "Free home Sample pickup"
    },
    {
        id: 1,
        img: Images.practo,
        name: "Practo asociate labs"
    },
    {
        id: 2,
        img: Images.e_reports,
        name: "E-Reports in 24-72 hours"
    },
    {
        id: 3,
        img: Images.free_follow,
        name: "Free follow-up with a doctor"
    },
]

const data = [
    {
        id: 0,
        name: "Advanced Young Indian Health Checkup",
        exp: "Ideal for individuals aged 21-40 years",
        test: 69,
        oldPrice: 358,
        newPrice: 330,
        off: 35,
        description: "+ 10% Health cashback T&C",
        img: Images.test1
    },
    {
        id: 1,
        name: "Working Women’s Health Checkup",
        exp: "Ideal for individuals aged 21-40 years",
        test: 119,
        oldPrice: 387,
        newPrice: 345,
        off: 35,
        description: "+ 10% Health cashback T&C",
        img: Images.test2
    },
    {
        id: 2,
        name: "Active Professional Health Checkup",
        exp: "Ideal for individuals aged 21-40 years",
        test: 100,
        oldPrice: 457,
        newPrice: 411,
        off: 35,
        description: "+ 10% Health cashback T&C",
        img: Images.test3
    },
]

export default function TestScreen({ navigation }) {

    const [step, setStep] = useState(1)

    const renderContent = () => {
        switch (step) {
            case 1:
                return (
                    <View style={styles.empty_container}>
                        <Image source={Images.test_screen_details} style={styles.img} />
                        <Text style={styles.empty_title}>You haven’t booked any tests yet</Text>
                        <Text style={styles.empty_content}>Get started with your first health checkup</Text>
                        <TouchableOpacity style={styles.button} onPress={() => { setStep(2) }}>
                            <Text style={styles.text}>Book Now</Text>
                        </TouchableOpacity>
                    </View>
                )
            case 2:
                return (
                    <ScrollView showsVerticalScrollIndicator={false} style={styles.content2}>
                        <Text style={styles.sub_title}>Get Full body health checkups from the comfort of your home.</Text>
                        <Text style={[styles.off,{marginTop:10}]}>Upto 45% off + get 10% healthcash back</Text>
                        <View style={styles.category_container}>
                            {categoryData.map((item, index) => {
                                return (
                                    <TouchableOpacity key={index} style={styles.category_item}>
                                        <Image source={item.img} style={styles.category_img} />
                                        <Text style={styles.category_name}>{item.name}</Text>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                        <Text style={styles.recommend}>Recommend for you</Text>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            {data.map((item, index) => {
                                return (
                                    <TouchableOpacity key={index} style={styles.item} onPress={()=>navigation.navigate("PatientDetails")}>
                                        <Text style={styles.name}>{item.name}</Text>
                                        <Text style={styles.exp}>{item.exp}</Text>
                                        <View style={{flexDirection:'row'}}>
                                            <View style={styles.included}>
                                                <Text style={styles.test}>{item.test} test included</Text>
                                            </View>
                                        </View>
                                        <Image source={item.img} style={styles.item_img} />
                                        <View style={styles.item_bottom}>
                                            <View>
                                                <View style={styles.price_container}>
                                                    <Text style={styles.old_price}>$ {item.oldPrice}</Text>
                                                    <Text style={styles.new_price}>$ {item.newPrice}</Text>
                                                    <Text style={styles.off}>{item.off}% off</Text>
                                                </View>
                                                <Text style={styles.description}>{item.description}</Text>
                                            </View>
                                            <TouchableOpacity style={styles.item_button}>
                                                <Text style={styles.item_text}>Book Now</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })}
                        </ScrollView>
                        <View style={{height:50}}/>
                    </ScrollView>
                )
        }
    }

    return (
        <ImageBackground source={Images.bg} style={styles.container}>
            <Header
                onPressLeft={() => navigation.goBack()}
                titleStyle={styles.title}
                title="Diagonstics Tests"
                showRight={false}
            />
            {renderContent()}
        </ImageBackground>
    )
}