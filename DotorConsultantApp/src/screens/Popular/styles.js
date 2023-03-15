import {StyleSheet, Dimensions} from 'react-native'
import Colors from '../../themes/Colors'

var {height, width} = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        flex:1,
        paddingTop:60
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
    sub_title: {
        fontSize: 18,
        color: Colors.black_text,
        fontWeight: '600',
        marginTop: 30,
        marginLeft: 16
    },
    popular_item:{
        backgroundColor: Colors.white,
        borderRadius:12,
    },
    popular_list:{
        marginTop: 20,
        paddingLeft:16
    },
    img:{
        width: (width-32)/2.5,
        height: (width-32)/2.5*131/136,
        borderTopLeftRadius:12,
        borderTopRightRadius:12,
        marginBottom:10
    },
    popular_name:{
        fontSize:14,
        fontWeight:"700",
        textAlign:'center'
    },
    popular_specialist:{
        fontSize:10,
        color: Colors.gray_text2,
        textAlign:'center',
        marginTop:5
    },
    category_list:{
        marginTop:20,
        marginHorizontal:16,
        flex:1
    },
    category_item:{
        backgroundColor: Colors.white,
        padding:10,
        borderRadius:8,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    category_img:{
        height:82, 
        width:82,
        borderRadius:8,
        marginRight:10
    },
    info:{
        flexDirection:'row',
        alignItems:'center',
    },
    category_name:{
        fontSize:18,
        color: Colors.black_text,
        fontWeight:'700'
    },
    category_specialist:{
        fontSize:14,
        color: Colors.gray_text2,
        marginTop:3
    },
    category_right:{
        justifyContent:'space-between',
        paddingTop:5,
        alignItems:'flex-end',
        marginLeft:-40,
        marginRight:8
    },
    view:{
        fontSize:16,
        fontWeight:'600',
        color: Colors.black_text
    },
    full_view:{
        fontSize:12,
        color: Colors.gray_text
    }
})