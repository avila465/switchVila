import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles=StyleSheet.create({
    container:{
        backgroundColor:colors.white,
        shadowOffset:{
            width:0,
            height:1,
        },
        shadowOpacity:0.22,
        shadowRadius:2.22,
        elevation:3,
    }
});