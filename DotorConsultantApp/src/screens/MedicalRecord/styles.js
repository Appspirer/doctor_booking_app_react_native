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
    empty_container:{
        alignItems:"center",
        paddingTop: height*0.1
    },
    img:{
        height:214,
        width:214,
        borderRadius:200,
        marginBottom:50
    },
    empty_title:{
        fontSize:22,
        color: Colors.black_text2,
        fontWeight:'700'
    },
    empty_content:{
        fontSize:14,
        color: Colors.gray_text,
        marginTop:10,
        width: width*0.8,
        textAlign:'center',
        marginBottom:40
    },
    button:{
        width: width*0.8,
        backgroundColor: Colors.green,
        alignItems:'center',
        borderRadius:6,
        paddingVertical:16
    },
    text:{
        fontSize:18,
        color: Colors.white,
        fontWeight:'500'
    },
    record_item:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:16,
        paddingTop:12,
        paddingLeft:12,
        paddingRight:10,
        paddingBottom:10,
        backgroundColor: Colors.white,
        shadowColor: Colors.black,
        marginBottom:12,
        shadowOpacity:0.3,
        shadowOffset:{
            height:1,
        },
        shadowRadius:5,
        borderRadius:8
    },
    list:{
        paddingTop:10,
        marginTop:20
    },
    left_record_item:{
        flexDirection:'row',
        alignItems:'center'
    },
    date_container:{
        borderRadius:6,
        width:55,
        height:60,
        backgroundColor: Colors.green,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:5
    },
    status_container:{
        height:22,
        width:55,
        borderRadius:2,
        backgroundColor: Colors.green_20,
        justifyContent:'center',
        alignItems:'center',
        marginTop:6,
        marginRight:12
    },
    date:{
        textAlign:"center",
        fontSize:14,
        color: Colors.white,
        fontWeight:'600'
    },
    status:{
        fontSize:12,
        color: Colors.green,
        fontWeight:'600'
    },
    record_title:{
        fontSize:14,
        fontWeight:'700',
        marginBottom:3
    },
    record_sub_title:{
        fontSize:12,
        color: Colors.green,
        marginBottom:10
    },
    prescription:{
        fontSize:12,
        color: Colors.gray_text,
    },
    options:{
        width:20,
        alignItems:'flex-end'
    }
})