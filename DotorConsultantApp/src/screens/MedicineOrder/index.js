import React, { useState } from "react";
import { View, Text, ImageBackground, TextInput, TouchableOpacity, FlatList } from 'react-native'
import Header from "../../components/Header";
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";

const data = [
    {
        id: 0,
        name: "Guide to medicine order",
        ic: Icons.Icons({ name: "guide", height: 76, width: 76 })
    },
    {
        id: 1,
        name: "Prescription related issues",
        ic: Icons.Icons({ name: "related", height: 76, width: 76 })
    },
    {
        id: 2,
        name: "Order status",
        ic: Icons.Icons({ name: "order_status", height: 76, width: 76 })
    },
    {
        id: 3,
        name: "Order delivery",
        ic: Icons.Icons({ name: "delivery", height: 76, width: 76 })
    },
    {
        id: 4,
        name: "Payments & Refunds",
        ic: Icons.Icons({ name: "refund", height: 76, width: 76 })
    },
    {
        id: 5,
        name: "Order returns",
        ic: Icons.Icons({ name: "order_return", height: 76, width: 76 })
    },
]

export default function MedicineOrder({ navigation }) {

    const [value, setValue] = useState('')

    return (
        <ImageBackground source={Images.bg} style={styles.container}>
            <Header
                onPressLeft={() => navigation.goBack()}
                titleStyle={styles.title}
                title="Medicines orders"
                showRight={false}
            />
            <View style={styles.search_container}>
                {Icons.Icons({ name: 'search', height: 13, width: 13 })}
                <TextInput
                    placeholder="Search....."
                    value={value}
                    onChangeText={setValue}
                    style={styles.input}
                />
                <TouchableOpacity onPress={() => setValue("")}>
                    {Icons.Icons({ name: 'ic_x', height: 11, width: 11 })}
                </TouchableOpacity>
            </View>
            <FlatList
                style={{ marginTop: 15 }}
                numColumns={2}
                data={data}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 16, }}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity style={styles.item}>
                            {item.ic}
                            <Text style={styles.name}>{item.name}</Text>
                        </TouchableOpacity>
                    )
                }}
            />
        </ImageBackground>
    )
}