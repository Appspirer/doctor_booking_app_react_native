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
        color: Colors.black_text,
        fontWeight: '600',
        alignSelf: 'center',
        marginLeft: 20
    },
    price_container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
    },
    price_icon: {
        fontSize: 16,
        color: Colors.green,
        fontWeight: '500'
    },
    price: {
        fontSize: 16,
        color: Colors.gray_text,
        marginLeft: 2
    },
    info_container: {
        backgroundColor: Colors.white,
        marginHorizontal: 16,
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderRadius: 8,
        marginTop: 20
    },
    left_info: {
        flexDirection: "row",
        alignItems: 'center'
    },
    img: {
        height: 87,
        width: 92,
        borderRadius: 8,
        marginRight: 10
    },
    name: {
        fontSize: 18,
        color: Colors.black_text,
        fontWeight: '700'
    },
    specialist: {
        fontSize: 14,
        color: Colors.gray_text,
        marginTop: 3
    },
    right_info: {
        justifyContent: "space-between",
        marginLeft: -40,
        paddingVertical: 10,
        alignItems: 'flex-end'
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        marginTop: 20,
        backgroundColor: Colors.green,
        alignSelf: 'center',
        paddingHorizontal: 40,
        paddingVertical: 10,
        borderRadius: 4
    },
    text: {
        fontSize: 14,
        color: Colors.white,
        fontWeight: "700"
    },
    status_container: {
        flexDirection: "row",
        marginHorizontal: 32,
        backgroundColor: Colors.white,
        padding: 10,
        marginTop: 20,
        borderRadius: 10,
        justifyContent:"space-between"
    },
    block: {
        width: (width -100) / 3,
        alignItems: 'center',
        backgroundColor: Colors.transparent,
        borderRadius:10,
        paddingVertical:16
    },
    number:{
        fontSize:18,
        color: Colors.black_text,
        fontWeight:'600'
    },
    status_text:{
        fontSize:13,
        color: Colors.gray_text,
        marginTop:5
    },
    sub_title:{
        fontSize:18,
        color: Colors.black_text,
        marginTop:30,
        fontWeight:'600'
    },
    service_number:{
        fontSize:13,
        color:Colors.green,
        fontWeight:'500',
        marginTop:15
    },
    service_content:{
        fontSize:13,
        color:Colors.gray_text,
        fontWeight:'500'
    },
    service_container:{
        marginHorizontal:16
    },
    line:{
        height:1,
        width:width-32,
        backgroundColor: Colors.border,
        marginTop:10
    },
    map_container:{
        marginTop:30,
        marginHorizontal:16,
        padding:8,
        backgroundColor: Colors.white,
        justifyContent:'center',
        borderRadius:10
    },
    map:{
        width: width - 32-16,
        height: (width-48)/318*190,
        borderRadius:10
    }
})