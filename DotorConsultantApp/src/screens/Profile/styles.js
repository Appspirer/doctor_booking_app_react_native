import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'

var { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        color: Colors.white,
        marginLeft: 10,
        fontWeight: '600'
    },
    top_container: {
        backgroundColor: Colors.green,
        width: width,
        paddingTop: 60,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        paddingBottom: 30
    },
    set_up: {
        fontSize: 16,
        color: Colors.white,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 30
    },
    update: {
        fontSize: 14,
        color: Colors.white,
        marginHorizontal: 30,
        textAlign: 'center',
        marginTop: 10,
        lineHeight: 23
    },
    img_container: {
        height: 130,
        width: 130,
        alignSelf: 'center',
        marginTop: 30
    },
    img: {
        height: 130,
        width: 130,
        borderRadius: 65
    },
    pick_up: {
        position: 'absolute',
        right: -10,
        bottom: 15
    },
    bottom_container: {
        marginTop: 20,
        marginHorizontal: 16
    },
    sub_title: {
        fontSize: 18,
        color: Colors.black_text,
        fontWeight: '600'
    },
    block: {
        backgroundColor: Colors.white,
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingTop: 13,
        paddingBottom:5,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12
    },
    block_title: {
        fontSize: 10,
        color: Colors.green,
        fontWeight: '600'
    },
    value: {
        fontSize: 16,
        color: Colors.gray_text,
        lineHeight: 19,
        width: width - 84,
        paddingVertical:10
    },
    modal_container: {
        flex: 1,
        width: width,
        backgroundColor: Colors.gray_blue,
        paddingTop: 60
    },
    modal_content:{
        marginTop:height*0.2,
        paddingHorizontal:16
    },
    question:{
        fontSize:18,
        color: Colors.white,
    },
    input_container:{
        borderBottomWidth:1,
        borderBottomColor: Colors.white_60,
        marginTop:50
    },
    input:{
        fontSize:22,
        color: Colors.white,
        paddingVertical:5,
        fontWeight:'600'
    },
    calendar_container:{
        marginTop:30,
        backgroundColor: Colors.white,
        borderRadius:8
    },
    button:{
        marginBottom:30,
        alignSelf:'center',
        backgroundColor: Colors.green,
        borderRadius:12,
        paddingVertical:16,
        width: width*0.8,
        alignItems:'center'
    },
    text:{
        fontSize:18,
        color: Colors.white,
        fontWeight:'600'
    }
})