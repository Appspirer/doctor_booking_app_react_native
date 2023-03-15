import {StyleSheet, Dimensions} from 'react-native'
import Colors from '../../themes/Colors'

var { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        flex:1,
        paddingTop:60
    },
    title:{
        fontSize:18,
        color: Colors.black_text2,
        marginLeft:10
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
        width: width - 32
    },
    input: {
        width: width - 112,
        height: 30
    },
    top_item:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    info:{
        flexDirection:'row',
        alignItems:'center'
    },
    name:{
        fontSize:18,
        fontWeight:'700',
        color: Colors.black_text
    },
    specialist:{
        fontSize:13,
        fontWeight:'400',
        color: Colors.green,
        marginBottom:3
    },
    text:{
        fontSize:12,
        color: Colors.gray_text
    },
    percent:{
        flexDirection:'row',
        alignItems:'center'
    },
    dot:{
        height:10,
        width:10,
        borderRadius:5,
        backgroundColor: Colors.green,
        marginRight:3
    },
    percent_container:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10
    },
    img:{
        height:87,
        width:92,
        marginRight:10,
        borderRadius:4
    },
    item:{
        paddingHorizontal:16,
        backgroundColor: Colors.white,
        borderRadius:8,
        paddingVertical:16
    },
    list:{
        paddingHorizontal:16,
        paddingTop:10,
        marginTop:20,
    },
    heart:{
        marginTop:5
    },
    content:{
        width: '60%',
    },
    bottom_item:{
        marginTop:15,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    available:{
        fontSize:13,
        fontWeight:'600',
        color: Colors.green,
        marginBottom:3
    },
    open:{
        fontSize:12,
        fontWeight:'700',
        color: Colors.gray_text
    },
    open_text:{
        fontSize:12,
        fontWeight:'400',
        color: Colors.gray_text
    },
    button:{
        paddingHorizontal:20,
        paddingVertical:10,
        backgroundColor: Colors.green,
        borderRadius:4
    },
    text_button:{
        fontSize:12,
        fontWeight:'500',
        color: Colors.white
    }
})