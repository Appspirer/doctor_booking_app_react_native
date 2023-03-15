import React, { useState } from "react";
import { View, Text, ImageBackground, TouchableOpacity, Image, ScrollView, Modal, TextInput, Dimensions, StatusBar } from 'react-native'
import Header from "../../components/Header";
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";
import CalendarPicker from 'react-native-calendar-picker';
import moment from "moment";
import Colors from "../../themes/Colors";

var {height,width} = Dimensions.get('window')

export default function Profile({ navigation }) {

    const [showModal, setShowModal] = useState(false)
    const [fieldFocus, setFieldFocus] = useState(0)
    const [nameValue, setNameValue] = useState('Abdullah Mamun')
    const [phoneValue, setPhoneValue] = useState('8801800000000')
    const [locationValue, setLocationValue] = useState('Add Details')
    const [birthValue, setBirthValue] = useState(moment(new Date).format("DD MM YYYY"))

    const renderModalContent = () => {
        switch (fieldFocus) {
            case 0:
                return (
                    <View style={styles.modal_content}>
                        <Text style={styles.question}>What is your name?</Text>
                        <View style={styles.input_container}>
                            <TextInput
                                value={nameValue}
                                onChangeText={setNameValue}
                                style={styles.input}
                                onEndEditing={() => setShowModal(false)}
                            />
                        </View>
                    </View>
                )
            case 1:
                return (
                    <View style={styles.modal_content}>
                        <Text style={styles.question}>What is your phone number?</Text>
                        <View style={styles.input_container}>
                            <TextInput
                                keyboardType="numeric"
                                value={phoneValue}
                                onChangeText={setPhoneValue}
                                style={styles.input}
                                onEndEditing={() => setShowModal(false)}
                            />
                        </View>
                    </View>
                )
            case 2:
                return (
                    <View style={styles.modal_content}>
                        <Text style={styles.question}>What is your date of birth?</Text>
                        <View style={styles.calendar_container}>
                        <CalendarPicker
                            onDateChange={(day)=>{setBirthValue(day.format("DD MM YYYY")), setShowModal(false)}}
                            firstDay={1}
                            weekdays={['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']}
                            selectedDayColor={Colors.green}
                            selectedDayTextStyle={{ color: Colors.white }}
                            headerWrapperStyle={{
                                backgroundColor: Colors.green,
                                marginTop: 0,
                                marginBottom: 0,
                                paddingTop: 12,
                                paddingBottom: 12,
                                borderTopLeftRadius: 8,
                                borderTopRightRadius: 8
                            }}
                            nextTitleStyle={{ color: Colors.white }}
                            previousComponent={Icons.Icons({ name: "back_white", height: 12, width: 12 })}
                            nextComponent={Icons.Icons({ name: "next_arrow_white", height: 12, width: 12 })}
                            monthTitleStyle={{ color: Colors.white, fontWeight: '700' }}
                            yearTitleStyle={{ color: Colors.white, fontWeight: '700' }}
                            width={width - 32}
                        />
                        </View>
                    </View>
                )
            case 3:
                return (
                    <View style={styles.modal_content}>
                        <Text style={styles.question}>What is your location?</Text>
                        <View style={styles.input_container}>
                            <TextInput
                                value={locationValue}
                                onChangeText={setLocationValue}
                                style={styles.input}
                                onEndEditing={() => setShowModal(false)}
                            />
                        </View>
                    </View>
                )
        }
    }

    return (
        <ImageBackground source={Images.bg} style={styles.container}>
            <StatusBar barStyle={'light-content'}/>
            <Modal
                visible={showModal}
                transparent={true}
                animationType="fade"
            >
                <View style={styles.modal_container}>
                    <Header
                        onPressLeft={() => setShowModal(false)}
                        titleStyle={styles.title}
                        title="Profile"
                        showRight={false}
                    />
                    {renderModalContent()}
                </View>
            </Modal>
            <View style={styles.top_container}>
                <Header
                    onPressLeft={() => navigation.goBack()}
                    titleStyle={styles.title}
                    title="Profile"
                    showRight={false}
                />
                <Text style={styles.set_up}>Set up your profile</Text>
                <Text style={styles.update}>Update your profile to connect your doctor with better impression.</Text>
                <TouchableOpacity style={styles.img_container}>
                    <Image source={Images.avatar_details} style={styles.img} />
                    <TouchableOpacity style={styles.pick_up}>
                        {Icons.Icons({ name: "ic_pick", height: 36, width: 36 })}
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.bottom_container}>
                <Text style={[styles.sub_title, { marginBottom: 20 }]}>Personal information</Text>
                <View style={styles.block}>
                    <View>
                        <Text style={styles.block_title}>Name</Text>
                        <TouchableOpacity onPress={() => { setShowModal(true), setFieldFocus(0) }}>
                            <Text style={styles.value}>{nameValue}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.block}>
                    <View>
                        <Text style={styles.block_title}>Contact Number</Text>
                        <Text style={styles.value}>+{phoneValue}</Text>
                    </View>
                    <TouchableOpacity style={styles.edit} onPress={() => { setShowModal(true), setFieldFocus(1) }}>
                        {Icons.Icons({ name: "edit", height: 15, width: 15 })}
                    </TouchableOpacity>
                </View>
                <View style={styles.block}>
                    <View>
                        <Text style={styles.block_title}>Date of birth</Text>
                        <Text style={styles.value}>{birthValue}</Text>
                    </View>
                    <TouchableOpacity style={styles.edit} onPress={() => { setShowModal(true), setFieldFocus(2) }}>
                        {Icons.Icons({ name: "edit", height: 15, width: 15 })}
                    </TouchableOpacity>
                </View>
                <View style={styles.block}>
                    <View>
                        <Text style={styles.block_title}>Location</Text>
                        <TouchableOpacity onPress={() => { setShowModal(true), setFieldFocus(3) }}>
                            <Text style={styles.value}>{locationValue}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Continue</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}