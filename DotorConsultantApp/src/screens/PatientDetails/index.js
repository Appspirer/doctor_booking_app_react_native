import React, { useState } from "react";
import { View, Text, ImageBackground, Image, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native'
import Header from "../../components/Header";
import Images from "../../themes/Images";
import styles from "./styles";
import DropDownPicker from 'react-native-dropdown-picker';
import Colors from "../../themes/Colors";

export default function PatientDetails({ navigation }) {

    const [step, setStep] = useState(0)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [openDay, setOpenDay] = useState(false)
    const [dayValue, setDayValue] = useState("Day")
    const [day, setDay] = useState([
        { label: "Day", value: "Day" },
        { label: "Day1", value: "Day1" },
        { label: "Day2", value: "Day2" },
    ])
    const [openMonth, setOpenMonth] = useState(false)
    const [monthValue, setMonthValue] = useState("Month")
    const [month, setMonth] = useState([
        { label: "Month", value: "Month" },
        { label: "Month1", value: "Month1" },
        { label: "Month2", value: "Month2" },
    ])
    const [openYear, setOpenYear] = useState(false)
    const [yearValue, setYearValue] = useState("Year")
    const [year, setYear] = useState([
        { label: "Year", value: "Year" },
        { label: "Year1", value: "Year1" },
        { label: "Year2", value: "Year2" },
    ])
    const [gender, setGender] = useState(0)

    const renderContent = () => {
        switch (step) {
            case 0:
                return (
                    <View style={styles.empty_container}>
                        <Image source={Images.patient_details} style={styles.img} />
                        <Text style={styles.empty_title}>Your cart is empty</Text>
                        <TouchableOpacity style={styles.button} onPress={() => { setStep(1) }}>
                            <Text style={styles.text}>Add Tests</Text>
                        </TouchableOpacity>
                    </View>
                )
            case 1:
                return (
                    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={styles.content_container}>
                                <Text style={styles.content_title}>Patient’s Name</Text>
                                <View style={styles.input_container}>
                                    <TextInput
                                        value={name}
                                        placeholder="Abdullah Mamun"
                                        onChangeText={setName}
                                        style={styles.input}
                                    />
                                </View>
                                <Text style={[styles.content_title, { marginTop: 20 }]}>Age</Text>
                                <View style={styles.date_container}>
                                    <View>
                                        <DropDownPicker
                                            open={openDay}
                                            value={dayValue}
                                            items={day}
                                            setOpen={setOpenDay}
                                            setValue={setDayValue}
                                            setItems={setDay}
                                            style={styles.picker}
                                        />
                                    </View>
                                    <View>
                                        <DropDownPicker
                                            open={openMonth}
                                            value={monthValue}
                                            items={month}
                                            setOpen={setOpenMonth}
                                            setValue={setMonthValue}
                                            setItems={setMonth}
                                            style={styles.picker}
                                        />
                                    </View>
                                    <View>
                                        <DropDownPicker
                                            open={openYear}
                                            value={yearValue}
                                            items={year}
                                            setOpen={setOpenYear}
                                            setValue={setYearValue}
                                            setItems={setYear}
                                            style={styles.picker}
                                        />
                                    </View>
                                </View>
                                <Text style={[styles.content_title, { marginTop: 20 }]}>Gender</Text>
                                <View style={styles.gender_container}>
                                    <TouchableOpacity style={styles.gender_item} onPress={() => setGender(0)}>
                                        <View style={styles.dot} >
                                            <View style={[styles.dot_inside, { backgroundColor: gender === 0 ? Colors.green : Colors.white }]} />
                                        </View>
                                        <Text style={styles.gender_name}>Male</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.gender_item} onPress={() => setGender(1)}>
                                        <View style={styles.dot} >
                                            <View style={[styles.dot_inside, { backgroundColor: gender === 1 ? Colors.green : Colors.white }]} />
                                        </View>
                                        <Text style={styles.gender_name}>Female</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.gender_item} onPress={() => setGender(2)}>
                                        <View style={styles.dot} >
                                            <View style={[styles.dot_inside, { backgroundColor: gender === 2 ? Colors.green : Colors.white }]} />
                                        </View>
                                        <Text style={styles.gender_name}>Others</Text>
                                    </TouchableOpacity>
                                </View>
                                <Text style={[styles.content_title, { marginTop: 20 }]}>Mobile Number</Text>
                                <View style={styles.input_container}>
                                    <TextInput
                                        keyboardType="numeric"
                                        value={phone}
                                        placeholder="+8801000000000"
                                        onChangeText={setPhone}
                                        style={styles.input}
                                    />
                                </View>
                                <Text style={[styles.content_title, { marginTop: 20 }]}>Email</Text>
                                <View style={styles.input_container}>
                                    <TextInput
                                        value={email}
                                        placeholder="itsmemamun1@gmail.com"
                                        onChangeText={setEmail}
                                        style={styles.input}
                                    />
                                </View>
                            </View>
                            <TouchableOpacity style={[styles.button, {
                                alignSelf: 'center',
                                marginTop: 38
                            }]} onPress={() => { }}>
                                <Text style={styles.text}>Continue</Text>
                            </TouchableOpacity>

                        </ScrollView>
                    </KeyboardAvoidingView>
                )
        }
    }

    return (
        <ImageBackground source={Images.bg} style={styles.container}>
            <Header
                onPressLeft={() => navigation.goBack()}
                titleStyle={styles.title}
                title="Patient Details"
                showRight={false}
            />
            {renderContent()}
        </ImageBackground>
    )
}