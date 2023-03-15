import React, { useState } from "react";
import { View, Text, ImageBackground, FlatList, Image, TextInput, TouchableOpacity, StatusBar, KeyboardAvoidingView } from 'react-native'
import styles from "./styles";
import Header from "../../components/Header";
import Images from "../../themes/Images";
import Icons from "../../themes/Icons";

export default function LiveChat({ navigation }) {

    const [value, setValue] = useState('')

    const data = [
        {
            id: 0,
            name: "Everhart Tween",
            avatar: Images.avatar2,
            content: "Thanks for shareing doctor"
        },
        {
            id: 1,
            name: "Bonebrake Mash",
            avatar: Images.avatar3,
            content: "They treat immune system disorders"
        },
        {
            id: 2,
            name: "Handler Wack",
            avatar: Images.avatar4,
            content: "This is the largest directory"
        },
        {
            id: 3,
            name: "Comfort Love",
            avatar: Images.avatar5,
            content: "Depending on their education"
        },
    ]

    return (
        <ImageBackground source={Images.live_chat} style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
                <View style={styles.bg}>
                    <Header
                        onPressLeft={() => navigation.goBack()}
                    />
                    <View style={styles.chat_log}>
                        <FlatList
                            style={{ zIndex: 1 }}
                            inverted
                            data={data.reverse()}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => {
                                return (
                                    <View style={styles.item}>
                                        <Image source={item.avatar} style={styles.avatar} />
                                        <View>
                                            <Text style={styles.name}>{item.name}</Text>
                                            <Text style={styles.content}>{item.content}</Text>
                                        </View>
                                    </View>
                                )
                            }}
                        />
                        <Image source={Images.shadow} style={styles.shadow} />
                        <View style={styles.chat_block}>
                            <View style={styles.chat}>
                                {Icons.Icons({ name: "chat_white", height: 16, width: 16 })}
                            </View>
                            <TextInput
                                value={value}
                                onChangeText={setValue}
                                placeholder="Add a Comment......"
                                style={styles.input}
                            />
                            <TouchableOpacity>
                                {Icons.Icons({ name: 'face', height: 18, width: 18 })}
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </ImageBackground>
    )
}