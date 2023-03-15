import React, { useState } from "react";
import { View, Text, ImageBackground, ScrollView, TouchableOpacity, Switch } from 'react-native'
import Header from "../../components/Header";
import Colors from "../../themes/Colors";
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";

export default function Settings({ navigation }) {

    const [isEnabledText, setIsEnabledText] = useState(true);
    const toggleSwitchText = () => setIsEnabledText(previousState => !previousState);
    const [isEnabledCall, setIsEnabledCall] = useState(true);
    const toggleSwitchCall = () => setIsEnabledCall(previousState => !previousState);

    return (
        <ImageBackground source={Images.bg} style={styles.container}>
            <Header
                onPressLeft={() => navigation.goBack()}
                titleStyle={styles.title}
                title="Settings"
                showRight={false}
            />
            <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
                <Text style={styles.account_settings}>Account settings</Text>
                <TouchableOpacity style={styles.item}>
                    <View style={styles.left_item}>
                        {Icons.Icons({ name: "password", height: 32, width: 32 })}
                        <Text style={styles.item_name}>Change Password</Text>
                    </View>
                    {Icons.Icons({ name: "next_arrow", height: 13, width: 7 })}
                </TouchableOpacity>
                <View style={styles.line} />
                <TouchableOpacity style={styles.item}>
                    <View style={styles.left_item}>
                        {Icons.Icons({ name: "notification", height: 32, width: 32 })}
                        <Text style={styles.item_name}>Notifications</Text>
                    </View>
                    {Icons.Icons({ name: "next_arrow", height: 13, width: 7 })}
                </TouchableOpacity>
                <View style={styles.line} />
                <TouchableOpacity style={styles.item}>
                    <View style={styles.left_item}>
                        {Icons.Icons({ name: "statistic", height: 32, width: 32 })}
                        <Text style={styles.item_name}>Statistics</Text>
                    </View>
                    {Icons.Icons({ name: "next_arrow", height: 13, width: 7 })}
                </TouchableOpacity>
                <View style={styles.line} />
                <TouchableOpacity style={styles.item}>
                    <View style={styles.left_item}>
                        {Icons.Icons({ name: "about_us", height: 32, width: 32 })}
                        <Text style={styles.item_name}>About us</Text>
                    </View>
                    {Icons.Icons({ name: "next_arrow", height: 13, width: 7 })}
                </TouchableOpacity>
                <View style={styles.line} />
                <Text style={styles.options}>More options</Text>
                <View style={styles.item}>
                    <Text style={[styles.item_name, { marginLeft: 0 }]}>Text messages</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: Colors.green }}
                        thumbColor={Colors.white}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitchText}
                        value={isEnabledText}
                        style={{transform:[{scaleY:0.8}, {scaleX:0.8}]}}
                    />
                </View>
                <View style={styles.line} />
                <View style={styles.item}>
                    <Text style={[styles.item_name, { marginLeft: 0 }]}>Phone calls</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: Colors.green }}
                        thumbColor={Colors.white}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitchCall}
                        value={isEnabledCall}
                        style={{transform:[{scaleY:0.8}, {scaleX:0.8}]}}
                    />
                </View>
                <View style={styles.line} />
                <TouchableOpacity style={styles.item}>
                    <Text style={[styles.item_name, { marginLeft: 0 }]}>Languages</Text>
                    <View style={styles.row}>
                        <Text style={styles.option_text}>English</Text>
                        {Icons.Icons({ name: "next_arrow", height: 13, width: 7 })}
                    </View>
                </TouchableOpacity>
                <View style={styles.line} />
                <TouchableOpacity style={styles.item}>
                    <Text style={[styles.item_name, { marginLeft: 0 }]}>Currency</Text>
                    <View style={styles.row}>
                        <Text style={styles.option_text}>$-USD</Text>
                        {Icons.Icons({ name: "next_arrow", height: 13, width: 7 })}
                    </View>
                </TouchableOpacity>
                <View style={styles.line} />
                <TouchableOpacity style={styles.item}>
                    <Text style={[styles.item_name, { marginLeft: 0 }]}>Linked accounts</Text>
                    <View style={styles.row}>
                        <Text style={styles.option_text}>Facebook, Google</Text>
                        {Icons.Icons({ name: "next_arrow", height: 13, width: 7 })}
                    </View>
                </TouchableOpacity>
                <View style={styles.line} />
            </ScrollView>
        </ImageBackground>
    )
}