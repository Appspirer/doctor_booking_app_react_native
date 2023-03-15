import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'

var {height, width} = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60
    },
    title: {
        fontSize: 18,
        color: Colors.black_text,
        fontWeight: '700',
        alignSelf: 'center',
        marginLeft: 20
    },
    info_container: {
        backgroundColor: Colors.white,
        marginHorizontal: 16,
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderRadius: 8,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    appointment_container: {
        marginHorizontal: 16,
        marginTop: 30
    },
    sub_title: {
        fontSize: 16,
        color: Colors.black_text,
        fontWeight: '600',
        marginBottom: 15
    },
    block: {
        borderWidth: 1,
        borderColor: Colors.border,
        paddingVertical: 16,
        marginTop: 15,
        paddingHorizontal: 16,
        borderRadius: 10
    },
    block_text: {
        fontSize: 14,
        color: Colors.gray_text
    },
    list: {
        paddingLeft: 16,
        marginTop: 20
    },
    add: {
        backgroundColor: Colors.green_20,
        borderRadius: 6,
        height: 125,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    plus: {
        fontSize: 50,
        color: Colors.green
    },
    add_text: {
        fontSize: 18,
        color: Colors.green,
        fontWeight: '500'
    },
    item: {
        borderRadius: 6,
        width: 100,
    },
    item_img:{
        height: 125,
        width: 100,
        borderRadius:6
    },
    item_name:{
        fontSize:14,
        color: Colors.gray_text,
        textAlign:'center',
        marginTop:5
    },
    button:{
        width:'80%',
        backgroundColor:Colors.green,
        alignSelf:'center',
        alignItems:'center',
        marginTop:20,
        paddingVertical:16,
        borderRadius:6
    },
    button_text:{
        fontSize:18,
        color: Colors.white,
        fontWeight:'600'
    },
    calendar_container:{
        marginTop:20,
    },
    bottom_content:{
        backgroundColor: Colors.white,
        width:width,
        paddingTop:35,
        borderTopRightRadius:45,
        borderTopLeftRadius:45,
        marginTop:20,
        height:height
    },
    time_item:{
        height:60,
        width:60,
        borderRadius:30,
        alignItems:'center',
        justifyContent:"center",
        padding:10,
        marginRight:10
    },
    time_item_text:{
        textAlign:'center',
        fontSize:13,
        fontWeight:'500'
    },
    modal_container:{
        height:height,
        width:width,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent:"center",
        alignItems:'center'
    },
    modal_content:{
        width:width-32,
        height:height*0.65,
        backgroundColor: Colors.white,
        borderRadius:16,
        alignItems:'center',
        paddingTop:50,
        marginTop:50
    },
    thanks:{
        fontSize:38,
        color: Colors.black_text,
        fontWeight:'700',
        marginTop:10
    },
    success:{
        fontSize:20,
        color: Colors.gray_text,
        marginTop:5,
        marginBottom:20
    },
    modal_description:{
        fontSize:14,
        color:Colors.gray_text,
        textAlign:'center',
        width:'75%'
    },
    edit:{
        fontSize:14,
        color:Colors.gray_text,
        marginTop:30
    }
})