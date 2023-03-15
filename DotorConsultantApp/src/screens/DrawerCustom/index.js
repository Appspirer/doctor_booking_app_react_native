import React, { useState } from "react";
import { View, Text, ImageBackground, TouchableOpacity, Image, Alert, Modal, StatusBar } from 'react-native'
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";
import { useIsFocused } from '@react-navigation/native';

const data = [
    {
        id: 0,
        icon: Icons.Icons({ name: "my_doctor", height: 23, width: 18 }),
        name: "My Doctors",
        navigate: "MyDoctor"
    },
    {
        id: 1,
        icon: Icons.Icons({ name: "medical_record", height: 19, width: 19 }),
        name: "Medical Records",
        navigate: "MedicalRecord"
    },
    {
        id: 2,
        icon: Icons.Icons({ name: "payment", height: 13, width: 19 }),
        name: "Payments",
        navigate: null
    },
    {
        id: 3,
        icon: Icons.Icons({ name: "medicine_order", height: 20, width: 17 }),
        name: "Medicine Orders",
        navigate: "MedicineOrder"
    },
    {
        id: 4,
        icon: Icons.Icons({ name: "test_booking", height: 21, width: 21 }),
        name: "Test Bookings",
        navigate: "TestScreen"
    },
    {
        id: 5,
        icon: Icons.Icons({ name: "privacy_policy", height: 22, width: 17 }),
        name: "Privacy & Policy",
        navigate: "Policy"
    },
    {
        id: 6,
        icon: Icons.Icons({ name: "help_center", height: 18, width: 18 }),
        name: "Help Center",
        navigate: "HelpCenter"
    },
    {
        id: 7,
        icon: Icons.Icons({ name: "setting", height: 18, width: 18 }),
        name: "Settings",
        navigate: "Settings"
    },
]

function FocusAwareStatusBar(props) {
    const isFocused = useIsFocused();

    return isFocused ? <StatusBar {...props} /> : null;
}

export default function DrawerCustom({ navigation }) {

    const [showModal, setShowModal] = useState(false)

    return (
        <ImageBackground source={Images.drawer_bg} style={styles.container}>
            {/* <FocusAwareStatusBar barStyle={'light-content'} /> */}
            <Modal
                transparent={true}
                visible={showModal}
                animationType="fade"
            >
                <View style={styles.modal_container}>
                    <View style={styles.modal_content}>
                        <Text style={styles.logout}>Log Out</Text>
                        <Text style={styles.question}>Are you sure you want to logout?</Text>
                        <View style={styles.modal_button_container}>
                            <TouchableOpacity style={[styles.modal_button, { marginRight: 20 }]} onPress={() => setShowModal(false)}>
                                <Text style={styles.modal_text}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modal_button} onPress={() => navigation.navigate("Login")}>
                                <Text style={styles.modal_text}>Ok</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <View style={styles.header}>
                <TouchableOpacity style={styles.info} onPress={() => navigation.navigate("Profile")}>
                    <Image source={Images.avatar3} style={styles.avatar} />
                    <View>
                        <Text style={styles.name}>Abdullah Mamun</Text>
                        <View style={styles.phone_container}>
                            {Icons.Icons({ name: 'phone', height: 12, width: 12 })}
                            <Text style={styles.phone}>01303-527300</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.close} onPress={() => navigation.closeDrawer()}>
                    {Icons.Icons({ name: "ic_x_white", height: 12.6, width: 12.6 })}
                </TouchableOpacity>
            </View>
            {data.map((item, index) => {
                return (
                    <TouchableOpacity key={index} style={styles.item} onPress={() => item.navigate ? navigation.navigate(item.navigate) : null}>
                        <View style={styles.left_item}>
                            {item.icon}
                            <Text style={styles.item_name}>{item.name}</Text>
                        </View>
                        {Icons.Icons({ name: 'next_arrow_white', height: 13, width: 7 })}
                    </TouchableOpacity>
                )
            })}
            <TouchableOpacity style={[styles.left_item, {
                position: 'absolute',
                bottom: 80,
                left: 24
            }]}
                onPress={() => setShowModal(true)}
            >
                {Icons.Icons({ name: "logout", height: 15, width: 15 })}
                <Text style={[styles.item_name, { fontWeight: '700', fontSize: 20 }]}>Logout</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}