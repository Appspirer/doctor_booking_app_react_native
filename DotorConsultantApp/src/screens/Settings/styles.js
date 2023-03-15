import {StyleSheet, Dimensions} from 'react-native'
import Colors from '../../themes/Colors'

var {height, width} = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        flex:1,
        paddingTop:60
    },
    title: {
        fontSize: 18,
        color: Colors.black_text2,
        marginLeft: 10,
        fontWeight: '600'
    },
    content:{
        marginHorizontal:16,
        marginTop:30
    },
    account_settings:{
        fontSize:18,
        color: Colors.gray_text,
        fontWeight:'600',
        marginBottom:10
    },
    item:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingTop:13,
        paddingBottom:16
    },
    left_item:{
        flexDirection:'row',
        alignItems:"center"
    },
    line:{
        height:1,
        width:width-32,
        backgroundColor: Colors.border
    },
    item_name:{
        fontSize:16,
        color: Colors.gray_text,
        marginLeft:20
    },
    options:{
        fontSize:16,
        color: Colors.gray_text,
        fontWeight:'600',
        marginTop:30
    },
    option_text:{
        fontSize:12,
        color: Colors.gray_text,
        marginRight:5
    },
    row:{
        flexDirection:'row',
        alignItems:'center'
    }
})