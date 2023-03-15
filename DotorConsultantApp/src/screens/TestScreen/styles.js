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
        color: Colors.black_text2,
        marginLeft: 10,
        fontWeight: '600'
    },
    empty_container: {
        alignItems: "center",
        paddingTop: height * 0.1
    },
    img: {
        height: 214,
        width: 214,
        borderRadius: 200,
        marginBottom: 50
    },
    empty_title: {
        fontSize: 22,
        color: Colors.black_text2,
        fontWeight: '700'
    },
    empty_content: {
        fontSize: 14,
        color: Colors.gray_text,
        marginTop: 10,
        width: width * 0.8,
        textAlign: 'center',
        marginBottom: 40
    },
    button: {
        width: width * 0.8,
        backgroundColor: Colors.green,
        alignItems: 'center',
        borderRadius: 6,
        paddingVertical: 16
    },
    text: {
        fontSize: 18,
        color: Colors.white,
        fontWeight: '500'
    },
    content2: {
        marginHorizontal: 16,
        marginTop: 20
    },
    sub_title: {
        fontWeight: '700',
        fontSize: 22,
        lineHeight: 36,
    },
    off: {
        fontSize: 14,
        color: Colors.green,
    },
    category_item: {
        width: (width - 16 * 3) / 2,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 30
    },
    category_img: {
        height: 53,
        width: 50,
        borderRadius: 8
    },
    category_name: {
        fontSize: 15,
        marginLeft: 10,
        width: '60%'
    },
    recommend: {
        marginTop: 30,
        fontSize: 18,
        color: Colors.black_text2,
        fontWeight: '700',
        letterSpacing: -0.3,
        marginBottom: 20
    },
    category_container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: width - 32,
        justifyContent: 'space-between'
    },
    item: {
        backgroundColor: Colors.white,
        paddingTop: 12,
        paddingBottom: 20,
        marginBottom: 14,
        borderRadius: 6,
        shadowColor: Colors.black,
        shadowOpacity: 0.2,
        shadowOffset: {
            height: 1
        },
        shadowRadius: 2
    },
    name: {
        marginHorizontal: 16,
        fontSize: 16,
        fontWeight: '700'
    },
    exp: {
        fontSize: 14,
        color: Colors.gray_text,
        marginTop: 5,
        marginHorizontal: 16
    },
    included: {
        borderWidth: 1,
        borderColor: Colors.green,
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 6,
        marginHorizontal: 16,
        marginVertical: 18
    },
    test: {
        fontSize: 12,
        color: Colors.green
    },
    item_img: {
        width: width - 32,
        height: (width - 32) * 220 / 335,
        borderRadius: 6
    },
    item_bottom: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        marginTop: 11,
        marginHorizontal: 16
    },
    price_container: {
        flexDirection: "row",
        alignItems: 'center',
    },
    old_price: {
        fontSize: 16,
        fontWeight: '500'
    },
    new_price: {
        fontSize: 15,
        fontWeight: '500',
        color: Colors.gray_text,
        marginLeft: 10,
        marginRight: 5
    },
    description: {
        fontSize: 14,
        color: Colors.gray_text,
        marginTop: 5
    },
    item_button: {
        backgroundColor: Colors.green,
        borderRadius: 6,
        paddingHorizontal: 30,
        paddingVertical: 8
    },
    item_text: {
        fontSize: 12,
        color: Colors.white,
        fontWeight: '500'
    }
})