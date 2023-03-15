import {StyleSheet, Dimensions} from 'react-native'
import Colors from '../../themes/Colors';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
    container:{
        flex:1
    },
    bg:{
        width: width,
        height:height
    },
    name:{
        fontSize:28,
        fontWeight:'600',
        color: Colors.black_text,
        marginTop:height*0.6,
        alignSelf:'center'
    },
    description:{
        fontSize:14,
        color: Colors.gray_text,
        width: '85%',
        alignSelf:"center",
        textAlign:'center',
        marginTop:15
    },
    button_container:{
        position:'absolute',
        bottom: height*0.1,
        width:width
    },
    button:{
        borderRadius:10,
        width: width*0.8,
        backgroundColor: Colors.green,
        paddingVertical:16,
        alignSelf:'center',
        alignItems:'center'
    },
    text:{
        fontSize:18,
        color: Colors.white,
        fontWeight:'500'
    },
    skip:{
        marginTop:15,
        alignSelf:'center'
    },
    text_skip:{
        fontSize:14,
        color: Colors.gray_text2
    },
})