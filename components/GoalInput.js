import React, {useState} from 'react'
import {View, TextInput, StyleSheet, Text, Button } from 'react-native'


 function GoalInput(props) {
    const [enteredGoal, setEnteredGoal] = useState('')

    const handleGoalInput = (enteredText) => {
        setEnteredGoal(enteredText)
      }

    return (
        <View style={styles.inputContainer}>
        <TextInput 
        placeholder="Daily Goal"
        style={styles.input}
        onChangeText={handleGoalInput}
        value={enteredGoal}
        />
        <Button title="ADD" onPress={() => props.handleAddGoal(enteredGoal, setEnteredGoal)} />
      </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        // in react native styling is default to flexbox, but flexbox renders
        // in columns in RN as opposed to the web. so we specify direction as "row"
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