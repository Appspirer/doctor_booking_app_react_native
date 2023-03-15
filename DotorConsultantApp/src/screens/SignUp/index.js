import { Formik } from "formik";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, ImageBackground, KeyboardAvoidingView, ScrollView } from 'react-native'
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";

export default function SignUp({ navigation }) {

    const [hidePassword, setHidePassword] = useState(true)
    const [check, setCheck] = useState(true)

    return (
        <ImageBackground source={Images.bg} style={styles.container}>
            <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.title}>Join us to start searching</Text>
                    <Text style={styles.description}>You can search c ourse, apply course and find scholarship for abroad studies</Text>

                    <Formik
                        initialValues={{ email: '', password: '', name: '' }}
                        onSubmit={values => console.log(values)}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <View style={styles.form_container}>
                                <View style={styles.special_login_container}>
                                    <TouchableOpacity style={styles.button_special}>
                                        {Icons.Icons({ name: 'google', height: 18.17, width: 18.17 })}
                                        <Text style={styles.text_special}>Google</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.button_special}>
                                        {Icons.Icons({ name: 'facebook', height: 18.17, width: 18.17 })}
                                        <Text style={styles.text_special}>Facebook</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={[styles.input_container, { marginTop: 30 }]}>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={handleChange('name')}
                                        value={values.name}
                                        placeholder="Name"
                                    />
                                    {values.name.length > 0 && Icons.Icons({ name: 'check', height: 11, width: 15 })}
                                </View>
                                <View style={[styles.input_container, { marginTop: 15 }]}>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={handleChange('email')}
                                        value={values.email}
                                        placeholder="Email"
                                    />
                                    {values.email.length > 0 && Icons.Icons({ name: 'check', height: 11, width: 15 })}
                                </View>
                                <View style={[styles.input_container, { marginTop: 15 }]}>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={handleChange('password')}
                                        value={values.password}
                                        placeholder="Password"
                                        secureTextEntry={hidePassword ? true : false}
                                    />
                                    <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
                                        {Icons.Icons({ name: hidePassword ? 'eye' : 'eye_open', height: 11, width: 15 })}
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity style={styles.policy_container} onPress={() => setCheck(!check)}>
                                    <View style={styles.radio_button}>
                                        {check ? Icons.Icons({ name: "check_white", height: 8, width: 8 }) : <></>}
                                    </View>
                                    <Text style={styles.policy}>I agree with the Terms of Service & Privacy Policy</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </Formik>
                </ScrollView>
                <View style={styles.bottom}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>Sign up</Text>
                    </TouchableOpacity>
                    <View style={styles.text_bottom}>
                        <Text style={styles.question}>Have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                            <Text style={styles.question}>Log in</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </ImageBackground>
    )
}