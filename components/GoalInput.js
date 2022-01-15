import React, {useState} from 'react'
import {View, TextInput, StyleSheet, Button } from 'react-native'


 function GoalInput(props) {
    const [enteredGoal, setEnteredGoal] = useState('')

    const handleGoalInput = (enteredText) => {
        setEnteredGoal(enteredText)
      }

    return (
        <View style={styles.inputContainer}>
        <TextInput 
        placeholder="Course Goal"
        style={styles.input}
        onChangeText={handleGoalInput}
        value={enteredGoal}
        />
        <Button title="ADD" onPress={() => props.handleAddGoal(enteredGoal)} />
      </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row', 
        justifyContent: "space-between", 
        alignItems: "center"
    
      },
      input: {
        width: "80%", 
        borderBottomColor: "black", 
        borderWidth: 1, 
        padding: 10
      }

})
export default GoalInput