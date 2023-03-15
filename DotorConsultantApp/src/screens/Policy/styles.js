import { StyleSheet } from 'react-native'
import Colors from '../../themes/Colors'

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
    sub_title: {
        fontSize: 18,
        color: Colors.gray_text,
        fontWeight: '800',
        marginBottom: 10
    },
    text: {
        fontSize: 14,
        color: Colors.text,
        fontWeight: '500',
        lineHeight:22
    },
    row: {
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 16,
        marginRight: 26
    },
    dot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: Colors.green,
        marginTop: 7,
        marginRight: 10
    }
})