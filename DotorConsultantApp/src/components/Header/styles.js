import {StyleSheet} from 'react-native'
import Colors from '../../themes/Colors'

export default StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:16
    },
    back_icon:{
        backgroundColor: Colors.white,
        height:30,
        width:30,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    left:{
        flexDirection:'row',
        alignItems:'center'
    }
})