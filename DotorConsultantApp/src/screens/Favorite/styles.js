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
        alignSelf: 'center'
    },
    search_container: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 6,
        backgroundColor: Colors.white,
        paddingHorizontal: 16,
        height: 54,
        alignSelf: 'center',
        width: width - 32,
        marginBottom:20
    },
    input: {
        width: width - 112,
        height: 30
    },
    item:{
        width:(width-32-14)/2 ,
        backgroundColor:Colors.white,
        marginBottom:14,
        alignItems:'center',
        paddingTop:25,
        paddingBottom:25,
        borderRadius:6
    },
    list:{
        flexWrap:'wrap', 
        flexDirection:'row', 
        justifyContent:'space-between',
        marginHorizontal:16,
        paddingTop:10,
    },
    img:{
        height:84,
        width:84,
        borderRadius:42
    },
    name:{
        fontSize:15,
        fontWeight:'700',
        color: Colors.black_text,
        marginTop:10
    },
    specialist:{
        fontSize:12,
        color: Colors.green,
        marginTop:3
    },
    heart:{
        position:"absolute",
        right:8,
        top:8
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
    },
    feature_list:{
        paddingLeft: 16,
        marginTop:30
    },
    sub_title: {
        fontSize: 18,
        color: Colors.black_text,
        fontWeight: '600',
        marginTop: 30,
        marginLeft: 16
    },
})