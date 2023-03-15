import React, { useState } from "react";
import { View, Text, ImageBackground, ScrollView, TouchableOpacity, Image, TextInput, Modal, Dimensions, FlatList } from 'react-native'
import Header from "../../components/Header";
import Colors from "../../themes/Colors";
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";
import moment from "moment";
import CalendarPicker from 'react-native-calendar-picker';

var { height, width } = Dimensions.get('window')

const data = [
    {
        id: 0,
        img: Images.patient1
    },
]

export default function AddRecord({ navigation }) {

    const [name, setName] = useState('Abdullah Mamun')
    const [showModal, setShowModal] = useState(false)
    const [date, setDate] = useState(moment(new Date).format("YYYY-MM-DD"))

    return (
        <ImageBackground source={Images.bg} style={styles.container}>
            <Modal
                transparent={true}
                visible={showModal}
            >
                <View style={styles.modal_container}>
                    <View style={styles.modal_content}>
                        <CalendarPicker
                            onDateChange={(day) => { setDate(day.toString().slice(0, 11)), setShowModal(false) }}
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
            </Modal>
            <Header
                onPressLeft={() => navigation.goBack()}
                titleStyle={styles.title}
                title="Add Records"
                showRight={false}
            />
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.list}>
                {data.map((item, index) => {
                    return (
                        <TouchableOpacity key={index} style={styles.item}>
                            <Image source={item.img} style={styles.img} />
                        </TouchableOpacity>
                    )
                })}
                <TouchableOpacity style={styles.add}>
                    <Text style={styles.plus}>+</Text>
                    <Text style={styles.add_img}>Add more images</Text>
                </TouchableOpacity>
            </ScrollView>
            <View style={styles.bottom_container}>
                <View style={styles.row}>
                    <View>
                        <Text style={styles.sub_title}>Record for</Text>
                        <TextInput
                            value={name}
                            onChangeText={setName}
                            style={styles.input}
                        />
                    </View>
                    <TouchableOpacity>
                        {Icons.Icons({ name: "edit", height: 14, width: 14 })}
                    </TouchableOpacity>
                </View>
                <Text style={[styles.sub_title, { marginTop: 20 }]}>Type of record</Text>
                <View style={[styles.row, { width: '80%', paddingHorizontal: 16, marginTop: 20 }]}>
                    <View style={styles.record_item}>
                        {Icons.Icons({ name: "report", height: 22.67, width: 17 })}
                        <Text style={styles.record_text}>Report</Text>
                    </View>
                    <View style={styles.record_item}>
                        {Icons.Icons({ name: "prescription", height: 23, width: 17 })}
                        <Text style={[styles.record_text, { color: Colors.green }]}>Prescription</Text>
                    </View>
                    <View style={styles.record_item}>
                        {Icons.Icons({ name: "invoice", height: 23, width: 17 })}
                        <Text style={styles.record_text}>Invoice</Text>
                    </View>
                </View>

                <View style={[styles.row, { marginTop: 20 }]}>
                    <View>
                        <Text style={styles.sub_title}>Record created on</Text>
                        <TextInput
                            value={date}
                            onChangeText={setDate}
                            style={styles.input}
                        />
                    </View>
                    <TouchableOpacity onPress={() => setShowModal(true)}>
                        {Icons.Icons({ name: "edit", height: 14, width: 14 })}
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => { }}>
                    <Text style={styles.text}>Upload record</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}