import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'

var { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    bg: {
        flex: 1,
        paddingTop: 60,
        backgroundColor: 'rgba(0,0,0,0.1)'
    },
    chat_log: {
        height: height * 0.6,
        position: 'absolute',
        bottom: 0,
        width: width - 32,
        paddingHorizontal: 16,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    avatar: {
        height: 44,
        width: 44,
        borderRadius: 22,
        marginRight: 10
    },
    name: {
        fontSize: 18,
        color: Colors.white,
        fontWeight: '500'
    },
    content: {
        fontSize: 14,
        color: Colors.white,
        marginTop: 3
    },
    chat_block: {
        marginBottom: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.white,
        padding: 8,
        paddingRight: 16,
        borderRadius: 50,
        width: width - 32,
    },
    chat: {
        height: 44,
        width: 44,
        borderRadius: 22,
        backgroundColor: Colors.green,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        height: 40,
        width: width - 148,
    },
    shadow: {
        position: 'absolute',
        width: width,
        bottom: 0
    }
})