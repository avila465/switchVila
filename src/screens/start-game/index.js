import { Alert, Button, Keyboard, Text, TouchableWithoutFeedback, View } from "react-native";
import {Card, Input, NumberContainer} from '../../components'
import React,{useState} from "react";

import colors from "../../utils/colors";
import {styles} from './styles'

const StartGame = ({onStartGame}) =>{
    const [number,setNumber]=useState('');
    const [selectedNumber, setSelectedNumber] = useState(null);
    const [confirmed, setConfirmed] = useState(false);
    const onHandleChange = (value)=>{
        setNumber(value.replace(/[^0-9]/g,''))
    }
    const onHandleReset = () =>{
        setNumber('');
        setConfirmed(false);
    }
    const onHandleConfirm = () => {
        const chosenNumber = parseInt(number, 10);
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid Number', 'Number has to be between 1 and 99', [{text: 'Ok', style: 'destructive', onPress: onHandleReset}]);
        } else {
            setConfirmed(true);
            setSelectedNumber(chosenNumber);
            setNumber('');
        }
    }
    const confirmedOutput = () => confirmed ? (
        <Card style={styles.confirmedContainer}>
            <Text style={styles.confirmedTitle}>Your selected number</Text>
            <NumberContainer number={selectedNumber} />
            <Button 
                title="Start Game"
                onPress={() => onStartGame(selectedNumber)}
                color={colors.primary}
            />
        </Card>
    ) : null;
    return(
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss();
        }}>
            <View style={styles.container}>
                <Text style={styles.title}>Let's Start!</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select number!</Text>
                    <Input
                        style={styles.input} placeholder="Num."
                        maxLength={2}
                        keyboardType='number-pad'
                        onChangeText={onHandleChange}
                        value={number}/>
                    <View style={styles.buttonContainer}>
                        <Button
                            title="Restart"
                            onPress={onHandleReset}
                            color={colors.primary}
                        />
                        <Button
                            title="Confirm"
                            onPress={onHandleConfirm}
                            color={colors.primary}
                        />
                    </View>
                </Card>
                {confirmedOutput()}
            </View>
        </TouchableWithoutFeedback>
    )
    }
export default StartGame;