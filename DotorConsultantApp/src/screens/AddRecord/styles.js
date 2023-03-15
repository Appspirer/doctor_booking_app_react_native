import {StyleSheet, Dimensions} from 'react-native'
import Colors from '../../themes/Colors'

var {height, width} = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        flex:1,
        paddingTop:60
    },
    title:{
        fontSize:18,
        color: Colors.black_text2,
        marginLeft:10,
        fontWeight:'600'
    },
    img:{
        height:125,
        width:100
    },
    add:{
        height:125,
        width:100,
        backgroundColor: Colors.green_20,
        borderRadius:6,
        alignItems:'center',
        justifyContent:"center",
        marginRight:32
    },
    plus:{
        fontSize:50,
        color: Colors.green
    },
    add_img:{
        fontSize:16,
        color: Colors.green,
        fontWeight:'400',
        textAlign:'center'
    },
    list:{
        paddingLeft:16,
        marginTop:40
    },
    item:{
        borderRadius:6,
        marginRight:16
    },
    bottom_container:{
        width: width,
        height:height*0.6,
        position:'absolute',
        bottom:0,
        backgroundColor:Colors.white,
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        shadowColor: Colors.black,
        shadowOpacity:0.1,
        shadowRadius:10,
        paddingHorizontal:16,
        paddingTop:30
    },
    row:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:'space-between',
        paddingBottom:20,
        borderBottomWidth:1,
        borderBottomColor:Colors.border
    },
    sub_title:{
        fontSize:16,
        fontWeight:'500'
    },
    input:{
        width: width*0.7,
        color:Colors.green,
        fontSize:18,
        fontWeight:'700',
        marginTop:0,
        height:40
    },
    record_item:{
        alignItems:'center',
    },
    record_text:{
        fontSize:13,
        marginTop:5
    },
    button:{
        width: width*0.8,
        backgroundColor: Colors.green,
        alignItems:'center',
        borderRadius:6,
        paddingVertical:16,
        alignSelf:'center',
        position:'absolute',
        bottom:50
    },
    text:{
        fontSize:18,
        color: Colors.white,
        fontWeight:'500'
    },
    modal_container:{
        height:height,
        width:width,
        backgroundColor: 'rgba(0,0,0,0.7)',
        justifyContent:'flex-end'
    },
    modal_content:{
        backgroundColor:Colors.white,
        paddingBottom:100,
        paddingTop:20
    }
})