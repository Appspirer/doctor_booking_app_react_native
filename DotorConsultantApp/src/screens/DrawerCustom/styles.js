import {StyleSheet, Dimensions} from 'react-native'
import Colors from '../../themes/Colors'

var {height, width} = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        flex:1,
        paddingTop:60,
        paddingHorizontal:16
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:30
    },
    avatar:{
        height:44,
        width:44,
        borderRadius:22,
        marginRight:10
    },
    name:{
        fontSize:16,
        color: Colors.white,
        fontWeight:'600'
    },
    info:{
        flexDirection:'row',
        alignItems:'center'
    },
    phone_container:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:5
    },
    phone:{
        fontSize:12,
        color: Colors.white,
        marginLeft:5,
        fontWeight:'500'
    },
    close:{
        height:30,
        width:30,
        borderRadius:15,
        backgroundColor: Colors.red,
        justifyContent:'center',
        alignItems:'center'
    },
    item:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:15,
        paddingHorizontal:8,
        width:width*0.55,
        justifyContent:'space-between',
        paddingVertical:15
    },
    item_name:{
        marginLeft:16,
        fontSize:16,
        color: Colors.white
    },
    left_item:{
        flexDirection:'row',
        alignItems:'center'
    },
    modal_container:{
        flex:1,
        width:width,
        backgroundColor: "rgba(0,0,0,0.75)",
        justifyContent:'center',
        alignItems:'center'
    },
    modal_content:{
        backgroundColor: Colors.white,
        width: width-32,
        paddingVertical:30,
        paddingHorizontal:20,
        borderRadius:8
    },
    logout:{
        fontSize:26,
        fontWeight:'600',
        marginBottom:10
    },
    question:{
        fontSize:16,
        color: Colors.gray_text
    },
    modal_button_container:{
        marginTop:30,
        alignSelf:'flex-end',
        flexDirection:'row'
    },
    modal_button:{
        marginRight:10,
        paddingHorizontal:10,
        height:20, 
        justifyContent:'center',
        alignItems:'center'
    },
    modal_text:{
        fontSize:16,
        color: Colors.green,
        fontWeight:'600'
    }
})