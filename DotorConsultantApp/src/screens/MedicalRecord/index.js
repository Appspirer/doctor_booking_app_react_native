import React from "react";
import { View, Text, ImageBackground, Image, TouchableOpacity, FlatList } from 'react-native'
import Header from "../../components/Header";
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";

// const data = []

const data = [
    {
        id: 0,
        date: "27 FEB",
        status: "NEW",
        title: "Records added by you",
        sub_title: "Record for Abdullah mamun",
        prescription: 1
    },
    {
        id: 1,
        date: "22 FEB",
        status: "NEW",
        title: "Records added by you",
        sub_title: "Record for Abdullah mamun",
        prescription: 1
    },
    {
        id: 2,
        date: "01 MAR",
        status: "NEW",
        title: "Records added by you",
        sub_title: "Record for Abdullah mamun",
        prescription: 1
    },
]

export default function MedicalRecord({ navigation }) {

    const renderContent = () => {
        if (data.length === 0) {
            return (
                <View style={styles.empty_container}>
                    <Image source={Images.medical_record_details} style={styles.img} />
                    <Text style={styles.empty_title}>Add a medical record.</Text>
                    <Text style={styles.empty_content}>A detailed health history helps a doctor diagnose you better.</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("AddRecord")}>
                        <Text style={styles.text}>Add a record</Text>
                    </TouchableOpacity>
                </View>
            )
        } else {
            return (
                <View style={{ flex: 1 }}>
                    <FlatList
                        style={styles.list}
                        data={data}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={styles.record_item}>
                                    <View style={styles.left_record_item}>
                                        <View>
                                            <View style={styles.date_container}>
                                                <Text style={styles.date}>27 FEB</Text>
                                            </View>
                                            <View style={styles.status_container}>
                                                <Text style={styles.status}>NEW</Text>
                                            </View>
                                        </View>
                                        <View>
                                            <Text style={styles.record_title}>Records added by you</Text>
                                            <Text style={styles.record_sub_title}>Record for Abdullah mamun</Text>
                                            <Text style={styles.prescription}>1 Prescription</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <TouchableOpacity style={styles.options}>
                                            {Icons.Icons({ name: "options", height: 20, width: 4 })}
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )
                        }}
                    />
                    <TouchableOpacity style={[styles.button, {
                        position: 'absolute',
                        bottom: 50,
                        alignSelf: 'center'
                    }]} onPress={() => navigation.navigate("AddRecord")}>
                        <Text style={styles.text}>Add a record</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }

    return (
        <ImageBackground source={Images.bg} style={styles.container}>
            <Header
                onPressLeft={() => navigation.goBack()}
                titleStyle={styles.title}
                title="Medical Records"
                showRight={false}
            />
            {renderContent()}
        </ImageBackground>
    )
}