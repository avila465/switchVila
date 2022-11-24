import { Colors } from "react-native/Libraries/NewAppScreen";
import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        marginVertical:15,
    },
    title:{
        fontSize:18,
        fontWeight:"bold",
        color: colors.primary,
        textAlign:"center",
        paddingVertical:20,
    },
    inputContainer:{
        backgroundColor:colors.white,
        justifyContent:"center",
        alignItems:"center",
        marginHorizontal:20,
        shadowOffset:{
            width:0,
            height:1,
        },
        shadowOpacity:0.22,
        shadowRadius:2.22,
        elevation:3,
        paddingVertical:20,
    },
    input:{
        width:'100%',
        minWidth:70,
        fontSize:20,
        paddingVertical:10,
        textAlign:"center"
    },
    buttonContainer:{
        flexDirection:"row",
        width:'60%',
        justifyContent:"space-around",
        marginTop:20
    },
    confirmedContainer: {
        width: '58%',
        height: 180,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 25,
    },
    confirmedTitle: {
        fontSize: 16
    },  

});