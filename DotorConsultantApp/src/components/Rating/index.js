import React from "react";
import { View, Text } from 'react-native'
import Icons from "../../themes/Icons";
import styles from "./styles";

export default function Rating({rate, style, starSize=12}) {
    let goldArr = [...Array(rate).keys()]
    let silverArr = [...Array(5 - rate).keys()]
    return (
        <View style={[styles.rating_container,style]}>
            {goldArr.map((item, index) => {
                return (
                    <View key={index} style={styles.star}>
                        {Icons.Icons({ name: "star_gold", height: starSize, width: starSize })}
                    </View>
                )
            })}
            {silverArr.map((item, index) => {
                return (
                    <View key={index} style={styles.star}>
                        {Icons.Icons({ name: "star", height: starSize, width: starSize })}
                    </View>
                )
            })}
        </View>
    )
}