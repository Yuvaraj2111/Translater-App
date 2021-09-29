import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
    label: {
        fontSize: 17,
        color: blueMiddle
    },
    input: {
        borderWidth: 1,
        borderColor: '#eef5f8',
        borderRadius: 20,
        backgroundColor: '#eef5f8',
    },
    list: {
        marginLeft: 10,
        marginRight: 10,
        top: 0,
        borderWidth: 1,
        backgroundColor: '#eef5f8',
        borderColor: '#eef5f8',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopWidth: 0,
        paddingTop: 5,
        paddingLeft: 20,
        paddingBottom: 5,
        paddingRight: 10,
        // height: 80,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    }
});