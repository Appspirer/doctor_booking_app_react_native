import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";

export default function Header({ onPressLeft, titleStyle, title = "", showRight = true, rightIcon, style}) {
    return (
        <View style={[styles.container, style]}>
            <View style={styles.left}>
                <TouchableOpacity style={styles.back_icon} onPress={onPressLeft ? onPressLeft : null}>
                    {Icons.Icons({ name: 'back', height: 13, width: 7 })}
                </TouchableOpacity>
                <Text style={titleStyle}>{title}</Text>
            </View>
            {showRight && (rightIcon ? rightIcon : <Image source={Images.avatar1} style={styles.avatar} />)}
        </View>
    )
}