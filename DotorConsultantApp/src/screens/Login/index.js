import React, { useEffect, useRef, useState } from "react";
import { View, Text, ImageBackground, TextInput, TouchableOpacity, Modal, Dimensions, Alert, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native'
import Images from "../../themes/Images";
import styles from "./styles";
import { Formik } from 'formik';
import Icons from "../../themes/Icons";
import Colors from "../../themes/Colors";

var { height, width } = Dimensions.get('window')

export default function Login({ navigation }) {

    const [hidePassword, setHidePassword] = useState(true)
    const [showModal, setShowModal] = useState(false)
    const [email, setEmail] = useState('')
    const [step, setStep] = useState(1)
    const [digitNumber, setDigitNumber] = useState('')

    const ref1 = useRef()
    const ref2 = useRef()
    const ref3 = useRef()
    const ref4 = useRef()

    useEffect(() => {
        if (step === 2) {
            ref1.current.focus()
        }
    }, [step])

    const renderModal = () => {

        const data = [
            {
                id: 1,
                ref: ref1,
                nextRef: ref2
            },
            {
                id: 2,
                ref: ref2,
                nextRef: ref3
            },
            {
                id: 3,
                ref: ref3,
                nextRef: ref4
            },
            {
                id: 4,
                ref: ref4,
                // nextRef: ref1
            },
        ]

        const checkDigit = () => {
            if (digitNumber.length === 4) {
                if (digitNumber === "1234") {
                    setStep(3)
                } else {
                    setDigitNumber('')
                    ref1.current.focus()
                }
            }
        }

        const updatePassword = () => {
            Alert.alert('Success', "",
                [
                    {
                        text: "OK",
                        onPress: () => setShowModal(false)
                    }
                ])
        }

        const modalContent = () => {
            switch (step) {
                case 1:
                    return (
                        <TouchableWithoutFeedback>
                            <View style={styles.content_container}>
                                <View>
                                    <Text style={styles.modal_title}>Forgot password</Text>
                                    <Text style={styles.modal_description}>Enter your email for the verification proccesss, we will send 4 digits code to your email.</Text>
                                    <TextInput
                                        value={email}
                                        onChangeText={setEmail}
                                        placeholder="Email"
                                        style={styles.modal_input}
                                    />
                                    <TouchableOpacity style={styles.button} onPress={() => setStep(2)}>
                                        <Text style={styles.text}>Continue</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    )
                case 2:
                    return (
                        <View style={styles.content_container}>
                            <Text style={styles.modal_title}>Enter 4 Digits Code</Text>
                            <Text style={styles.modal_description}>Enter the 4 digits code that you received on your email.</Text>
                            <View style={styles.digit_container}>
                                {data.map((item, index) => {
                                    return (
                                        <TextInput
                                            keyboardType="numeric"
                                            key={index}
                                            ref={item.ref}
                                            value={digitNumber.length > index ? digitNumber[index] : ''}
                                            onChangeText={(t) => { setDigitNumber(digitNumber + t), item.nextRef ? item.nextRef.current.focus() : null }}
                                            style={[styles.digit_input, { marginRight: index === data.length - 1 ? 0 : 20 }]}
                                            maxLength={1}
                                        />
                                    )
                                })}

                            </View>
                            <TouchableOpacity style={styles.button} onPress={() => checkDigit()}>
                                <Text style={styles.text}>Continue</Text>
                            </TouchableOpacity>
                        </View>
                    )
                case 3:
                    return (
                        <View style={styles.content_container}>
                            <Text style={styles.modal_title}>Reset Password</Text>
                            <Text style={styles.modal_description}>Set the new password for your account so you can login and access all the features.</Text>
                            <Formik
                                initialValues={{ repassword: '', password: '' }}
                                onSubmit={values => console.log(values)}
                            >
                                {({ handleChange, handleBlur, handleSubmit, values }) => (
                                    <View style={{ marginTop: 20 }}>
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
                                        <View style={[styles.input_container, { marginTop: 15 }]}>
                                            <TextInput
                                                style={styles.input}
                                                onChangeText={handleChange('repassword')}
                                                value={values.repassword}
                                                placeholder="Re-enter Password"
                                                secureTextEntry={hidePassword ? true : false}
                                            />
                                            <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
                                                {Icons.Icons({ name: hidePassword ? 'eye' : 'eye_open', height: 11, width: 15 })}
                                            </TouchableOpacity>
                                        </View>
                                        <TouchableOpacity style={styles.button} onPress={() => updatePassword()}>
                                            <Text style={styles.text}>Update Password</Text>
                                        </TouchableOpacity>
                                    </View>
                                )}
                            </Formik>
                        </View>
                    )
            }
        }

        return (
            <TouchableWithoutFeedback onPress={() => setShowModal(false)}>
                <KeyboardAvoidingView behavior='padding' style={{ flex: 1 }}>
                    <View style={styles.modal_container}>
                        {modalContent()}
                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        )
    }

    return (
        <ImageBackground style={styles.container} source={Images.bg}>
            <Modal
                transparent={true}
                visible={showModal}
                animationType="fade"
            >
                {renderModal()}
            </Modal>
            <Text style={styles.title}>Welcome back</Text>
            <Text style={styles.description}>You can search c ourse, apply course and find scholarship for abroad studies</Text>

            <View>
                <Formik
                    initialValues={{ email: '', password: '' }}
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
                                    onChangeText={handleChange('email')}
                                    value={values.email}
                                    placeholder="itsmemamun1@gmail.com"
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
                            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("HomeScreen")}>
                                <Text style={styles.text}>Login</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.forgot} onPress={() => setShowModal(true)}>
                                <Text style={styles.forgot_text}>Forgot password</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </Formik>
            </View>
            <View style={styles.text_bottom}>
                <Text style={styles.question}>Don’t have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                    <Text style={styles.question}>Join us</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}