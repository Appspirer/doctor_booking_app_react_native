import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'

var { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60
    },
    title: {
        fontSize: 18,
        color: Colors.black_text2,
        marginLeft: 10,
        fontWeight: '600'
    },
    empty_container: {
        alignItems: "center",
        paddingTop: height * 0.1
    },
    img: {
        height: 214,
        width: 214,
        borderRadius: 200,
        marginBottom: 50
    },
    empty_title: {
        fontSize: 22,
        color: Colors.black_text2,
        marginBottom: 40,
        fontWeight: '700'
    },
    empty_content: {
        fontSize: 14,
        color: Colors.gray_text,
        marginTop: 10,
        width: width * 0.8,
        textAlign: 'center',
    },
    button: {
        width: width * 0.8,
        backgroundColor: Colors.green,
        alignItems: 'center',
        borderRadius: 6,
        paddingVertical: 16
    },
    text: {
        fontSize: 18,
        color: Colors.white,
        fontWeight: '500'
    },
    content_container: {
        backgroundColor: Colors.white,
        marginHorizontal: 16,
        shadowColor: Colors.black,
        marginTop: 30,
        borderRadius: 12,
        paddingHorizontal: 14,
        paddingVertical: 30
    },
    content_title: {
        fontSize: 14,
        fontWeight: '600',
    },
    input_container: {
        borderWidth: 1,
        borderRadius: 12,
        borderColor: Colors.border,
        height: 54,
        justifyContent: 'center',
        paddingHorizontal: 20,
        marginTop: 10,
    },
    input: {
        fontSize: 16,
        color: Colors.gray_text,
        height: 40
    },
    picker: {
        borderColor: Colors.border,
        width: (width - 32 - 28 - 28) / 3,
    },
    date_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        zIndex: 1
    },
    gender_container: {
        flexDirection: "row",
        alignItems: 'center',
        marginTop: 10
    },
    gender_item: {
        flexDirection: 'row',
        alignItems: "center",
        width: width / 4
    },
    dot: {
        height: 16,
        width: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: Colors.gray_text2,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    dot_inside: {
        height: 10,
        width: 10,
        borderRadius: 6,
    }
})