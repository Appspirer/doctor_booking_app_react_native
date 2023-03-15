import React, { useState } from "react";
import { View, Text, ImageBackground, TouchableOpacity, Image, ScrollView, Dimensions, Modal } from 'react-native'
import Header from "../../components/Header";
import Rating from "../../components/Rating";
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";
import CalendarPicker from 'react-native-calendar-picker';
import moment from "moment";
import Colors from "../../themes/Colors";

var { height, width } = Dimensions.get('window')

const data = [
    {
        id: 0,
        name: "My self",
        img: Images.patient1
    },
    {
        id: 1,
        name: "My child",
        img: Images.patient2
    },
    {
        id: 2,
        name: "My wife",
        img: Images.patient3
    },
]

const time = [
    {
        id: 0,
        time: '10:00 AM',
    },
    {
        id: 1,
        time: '12:00 AM',
    },
    {
        id: 2,
        time: '2:00 PM',
    },
    {
        id: 3,
        time: '3:00 PM',
    },
    {
        id: 4,
        time: '4:00 PM',
    },
]

const remindData = [
    {
        id: 0,
        time: "30 Minit"
    },
    {
        id: 1,
        time: "40 Minit"
    },
    {
        id: 2,
        time: "25 Minit"
    },
    {
        id: 3,
        time: "10 Minit"
    },
    {
        id: 4,
        time: "35 Minit"
    },
]

export default function Appointment({ navigation }) {

    const [step, setStep] = useState(1)
    const [timeSelected, setTimeSelected] = useState(2)
    const [remindSelected, setRemindSelected] = useState(2)
    const [showModal, setShowModal] = useState(false)
    const [currentDate, setCurrentDate] = useState(moment(new Date).format("YYYY-MM-DD"))

    const renderContent = () => {
        switch (step) {
            case 1: return (
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.info_container}>
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
                    <View style={styles.appointment_container}>
                        <Text style={styles.sub_title}>Appointment For</Text>
                        <TouchableOpacity style={styles.block}>
                            <Text style={styles.block_text}>Patient Name</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.block}>
                            <Text style={styles.block_text}>Contact Number</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={[styles.sub_title, { marginTop: 30, marginLeft: 16 }]}>Who is this patient?</Text>
                    <View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.list}>
                            <TouchableOpacity style={styles.add}>
                                <Text style={styles.plus}>+</Text>
                                <Text style={styles.add_text}>Add</Text>
                            </TouchableOpacity>
                            {data.map((item, index) => {
                                return (
                                    <TouchableOpacity key={index} style={[styles.item, { marginRight: index === data.length - 1 ? 32 : 10 }]}>
                                        <Image source={item.img} style={styles.item_img} />
                                        <Text style={styles.item_name}>{item.name}</Text>
                                    </TouchableOpacity>
                                )
                            })}
                        </ScrollView>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => setStep(2)}>
                        <Text style={styles.button_text}>Next</Text>
                    </TouchableOpacity>
                </ScrollView>
            )
            case 2: return (
                <View>
                    <View style={styles.calendar_container}>
                        <CalendarPicker
                            onDateChange={setCurrentDate}
                            // minDate={moment(new Date()).format("YYYY-MM-DD")}
                            firstDay={1}
                            weekdays={['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']}
                            selectedDayColor={Colors.green}
                            // todayBackgroundColor={Colors.green}
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
                    <View style={styles.bottom_content}>
                        <Text style={[styles.sub_title, { marginLeft: 16 }]}>Available Time</Text>
                        <View>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ paddingLeft: 16 }}>
                                {time.map((item, index) => {
                                    return (
                                        <TouchableOpacity key={index} style={[styles.time_item, {
                                            backgroundColor: timeSelected === index ? Colors.green : Colors.green_20,
                                            marginRight: index === time.length - 1 ? 32 : 16
                                        }]}
                                            onPress={() => setTimeSelected(index)}
                                        >
                                            <Text style={[styles.time_item_text, {
                                                color: timeSelected === index ? Colors.white : Colors.green
                                            }]}>{item.time}</Text>
                                        </TouchableOpacity>
                                    )
                                })}
                            </ScrollView>
                        </View>
                        <Text style={[styles.sub_title, { marginLeft: 16, marginTop: 40 }]}>Available Time</Text>
                        <View>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ paddingLeft: 16 }}>
                                {remindData.map((item, index) => {
                                    return (
                                        <TouchableOpacity key={index} style={[styles.time_item, {
                                            backgroundColor: remindSelected === index ? Colors.green : Colors.green_20,
                                            marginRight: index === time.length - 1 ? 32 : 16
                                        }]}
                                            onPress={() => setRemindSelected(index)}
                                        >
                                            <Text style={[styles.time_item_text, {
                                                color: remindSelected === index ? Colors.white : Colors.green
                                            }]}>{item.time}</Text>
                                        </TouchableOpacity>
                                    )
                                })}
                            </ScrollView>
                        </View>
                        <TouchableOpacity style={[styles.button, { marginTop: 50 }]} onPress={() => setShowModal(true)}>
                            <Text style={styles.button_text}>Confirm</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
    }

    return (
        <ImageBackground source={Images.bg} style={styles.container}>
            <Modal
                visible={showModal}
                transparent={true}
            >
                <View style={styles.modal_container}>
                    <View style={styles.modal_content}>
                        {Icons.Icons({ name: "like", height: 156, width: 156 })}
                        <Text style={styles.thanks}>Thank You !</Text>
                        <Text style={styles.success}>Your Appointment Successful</Text>
                        <Text style={styles.modal_description}>You booked an appointment with Dr.Pediatrician Purpieson on February 21, at 02:00 PM</Text>
                        <TouchableOpacity style={[styles.button, { marginTop: 50 }]} onPress={() => navigation.navigate("HomeScreen")}>
                            <Text style={styles.button_text}>Done</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setShowModal(false)}>
                            <Text style={styles.edit}>Edit your appointment</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Header
                onPressLeft={() => navigation.goBack()}
                titleStyle={styles.title}
                title="Appointment"
                showRight={false}
                style={{ paddingBottom: 10 }}
            />
            {renderContent()}
        </ImageBackground>
    )
}