import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'

var { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        width: width,
        height: width * 156 / 375,
        paddingTop: 20,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16
    },
    name: {
        fontSize: 20,
        color: Colors.white_text
    },
    title: {
        fontSize: 25,
        color: Colors.white,
        fontWeight: '700',
        marginTop: 5
    },
    avatar: {
        height: 60,
        width: 60,
        borderRadius: 30
    },
    search_container: {
        marginTop: -20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 6,
        backgroundColor: Colors.white,
        paddingHorizontal: 16,
        height: 54,
        alignSelf: 'center',
        width: width - 32
    },
    input: {
        width: width - 112,
        height: 30
    },
    sub_title: {
        fontSize: 18,
        color: Colors.black_text,
        fontWeight: '600',
        marginTop: 30,
        marginLeft: 16
    },
    live: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.red,
        borderRadius: 2,
        right: 10,
        top: 10,
        paddingHorizontal: 8,
        paddingVertical: 5
    },
    dot_white: {
        height: 5.6,
        width: 5.6,
        borderRadius: 3,
        backgroundColor: Colors.white
    },
    live_text: {
        fontSize: 7,
        color: Colors.white,
        fontWeight: '800',
        marginLeft: 5
    },
    play: {
        position: 'absolute',
        alignSelf: 'center',
        top: (width - 32 - 30) / 2.5 * 168 / 116 * 0.5,
    },
    view: {
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.3)',
        width: (width - 32 - 30) / 2.5,
        height: (width - 32 - 30) / 2.5 * 168 / 116,
        borderRadius: 6
    },
    live_list: {
        paddingLeft: 16,
        marginTop:30
    },
    live_item: {
        width: (width - 32 - 30) / 2.5,
        alignItems: 'center',
        justifyContent: "center",
        height: (width - 32 - 30) / 2.5 * 168 / 116,
        borderRadius: 6
    },
    live_img: {
        width: (width - 32 - 30) / 2.5,
        height: (width - 32 - 30) / 2.5 * 168 / 116
    },
    category_item:{
        width: 80,
        height:90
    },
    row_sub_title:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:30
    },
    see_all_container:{
        flexDirection:'row',
        alignItems:'center',
        marginRight:16
    },
    see_all:{
        fontSize:12,
        color:Colors.gray_text,
        marginRight:5
    },
    doctor_item:{
        backgroundColor: Colors.white,
        borderRadius:8
    },
    doctor_img:{
        width:(width-32)/1.5,
        height:(width-32)/1.5*180/190
    },
    doctor_name:{
        fontSize:18,
        color: Colors.black_text,
        fontWeight:'700',
        marginTop:15,
        alignSelf:'center'
    },
    doctor_description:{
        fontSize:12,
        color:Colors.gray_80,
        alignSelf:'center',
        paddingHorizontal:16,
        marginTop:3
    },
    rating_container:{
        flexDirection:'row',
        alignSelf:'center',
        marginTop:10,
        marginBottom:20
    },
    star:{
        marginHorizontal:2
    },
    feature_item:{
        backgroundColor: Colors.white,
        borderRadius:6,
        width:(width-60)/3.3,
    },
    feature_img:{
        marginTop:10,
        alignSelf:'center',
        height:54,
        width:54,
        borderRadius:27
    },
    row:{
        marginTop:10,
        marginHorizontal:8,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    row_rating:{
        flexDirection:'row',
        alignItems:'center'
    },
    feature_rate:{
        fontSize:10,
        fontWeight:'600',
        marginLeft:5
    },
    feature_name:{
        fontSize:12,
        fontWeight:'600',
        color: Colors.black_text,
        alignSelf:"center",
        marginTop:10
    },
    price_container:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:5,
        marginBottom:15
    },
    price_icon:{
        fontSize:9,
        color: Colors.green,
        fontWeight:'500'
    },
    price:{
        fontSize:9,
        color: Colors.gray_text,
        marginLeft:2
    }
})