import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'

var { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: height * 0.2,
        paddingHorizontal: 16
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'center'
    },
    description: {
        marginTop: 10,
        fontSize: 14,
        color: Colors.gray_text2,
        textAlign: 'center',
        width: '85%',
        alignSelf: "center"
    },
    special_login_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    form_container: {
        marginTop: height * 0.08

    },
    button_special: {
        width: (width - 32 - 20) / 2,
        backgroundColor: Colors.white,
        shadowColor: Colors.black,
        shadowOpacity: 0.1,
        shadowOffset: {
            height: 1
        },
        shadowRadius: 10,
        alignItems: 'center',
        borderRadius: 12,
        paddingVertical: 16,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    text_special: {
        fontSize: 16,
        color: Colors.gray_text2,
        marginLeft: 10
    },
    input_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: Colors.border,
        backgroundColor: Colors.white,
        borderRadius: 12,
        height: 50
    },
    input: {
        width: width - 64 - 30,
        height: 30
    },
    button: {
        marginTop: 40,
        backgroundColor: Colors.green,
        width: width * 0.8,
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 12,
        paddingVertical: 16
    },
    text: {
        fontSize: 18,
        color: Colors.white,
        fontWeight: '600'
    },
    forgot: {
        marginTop: 20,
        alignSelf: 'center'
    },
    forgot_text: {
        fontSize: 14,
        color: Colors.green
    },
    text_bottom: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 40,
        width: width
    },
    question: {
        fontSize: 14,
        color: Colors.green,
        marginRight: 5
    },
    modal_container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'flex-end'
    },
    content_container: {
        backgroundColor: Colors.white,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingHorizontal: 16,
        paddingTop: 60,
        paddingBottom: 60
    },
    modal_input: {
        borderRadius: 12,
        borderWidth: 1,
        borderColor: Colors.border,
        width: width - 32,
        height: 50,
        paddingHorizontal: 16,
        marginTop: 40
    },
    digit_container: {
        flexDirection: 'row',
        width: width * 0.8,
        alignSelf: 'center',
    },
    digit_input: {
        borderRadius: 12,
        borderWidth: 1,
        borderColor: Colors.border,
        height: (width * 0.8 - 20 * 3) / 4,
        width: (width * 0.8 - 20 * 3) / 4,
        paddingHorizontal: 16,
        marginTop: 40,
        paddingHorizontal: 0,
        textAlign: 'center',
        fontSize: 26,
        fontWeight: 'bold',
        color: Colors.green,
    },
    modal_title:{
        fontSize: 24,
        fontWeight: '600',
    },
    modal_description:{
        marginTop: 10,
        fontSize: 14,
        color: Colors.gray_text2,
        width:'80%'
    }
})