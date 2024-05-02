import {useState} from "react"
import {view, TextInput, Button, StyleSheet} from "react-native"

function GoalInput({onAddGoal}){
    const [enteredGoalText, setEnteredGoalText]= useState('')

    function handleInputGoal(enteredText){
        console.log(enteredText)
        setEnteredGoalText(enteredText)
    }
    function addGoalHandler() {
        onAddGoal(enteredGoalText)
        setEnteredGoalText('')
    }

    return(
        <view style={StyleSheet.inputContainer}>
            <TextInput
            style={StyleSheet.textInput}
            placeholder='your Goal¡'
            onChangeText={handleInputGoal}
            value={enteredGoalText}

        />
        <Button
        title="Add Goal"
        color={'#A3FFD6'}
        onPress={addGoalHandler}
        />
        </view>
    )
}

export default GoalInput

const styles = StylesSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        borderBottomwidth: 1,
        borderBottomColor: '#7BC9FF'
    },
    textInput: {
        borderwidth: 1,
        borderColor: '#cccccc',
        width: '80%',
        marginRight: 3,
        padding: 8,
        borderRadius: 5
    }
})
