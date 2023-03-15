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
    search_container: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 4,
        backgroundColor: Colors.white,
        paddingHorizontal: 16,
        height: 54,
        alignSelf: 'center',
        width: width - 32
    },
    input: {
        width: width - 112,
        height: 30,
        fontSize: 18,
        color: Colors.green
    },
    item: {
        flexDirection: 'row',
        justifyContent:"space-between",
        alignItems:'center',
        paddingVertical:17.5
    },
    list: {
        marginHorizontal: 16,
        marginTop: 10,
    },
    name:{
        fontSize:18,
        color: Colors.gray_text
    }
})