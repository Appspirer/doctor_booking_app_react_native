import React from "react";
import { View, Text, ImageBackground, ScrollView } from 'react-native'
import Header from "../../components/Header";
import Images from "../../themes/Images";
import styles from "./styles";

export default function Policy({navigation}) {
    return (
        <ImageBackground source={Images.bg} style={styles.container}>
            <Header
                onPressLeft={() => navigation.goBack()}
                titleStyle={styles.title}
                title="Privacy policy"
                showRight={false}
            />
            <ScrollView showsVerticalScrollIndicator={false} style={{marginHorizontal:16, marginTop:20}}>
                <Text style={styles.sub_title}>Doctor Hunt Apps Privacy Policy</Text>
                <Text style={styles.text}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words believable. It is a long established fact that reader will distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a moreIt is a long established fact that reader will distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more </Text>
                <View style={styles.row}>
                    <View style={styles.dot} />
                    <Text style={styles.text}>The standard chunk of lorem Ipsum used since  1500s is reproduced below for those interested.</Text>
                </View>
                <View style={styles.row}>
                    <View style={styles.dot} />
                    <Text style={styles.text}>Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum. The point of using.</Text>
                </View>
                <View style={styles.row}>
                    <View style={styles.dot} />
                    <Text style={styles.text}>Lorem Ipsum is that it has a moreIt is a long established fact that reader will distracted.</Text>
                </View>
                <View style={styles.row}>
                    <View style={styles.dot} />
                    <Text style={styles.text}>The point of using Lorem Ipsum is that it has a moreIt is a long established fact that reader will distracted.</Text>
                </View>
                <Text style={[styles.text,{marginTop:20}]}>It is a long established fact that reader distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a moreIt is a long established.</Text>
            </ScrollView>
        </ImageBackground>
    )
}