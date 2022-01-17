import React, {useState} from 'react'
import {View, TextInput, StyleSheet, Modal, Button } from 'react-native'


 function GoalInput(props) {
    const [enteredGoal, setEnteredGoal] = useState('')

    const handleGoalInput = (enteredText) => {
        setEnteredGoal(enteredText)
      }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
        <TextInput 
        placeholder="Daily Goal"
        style={styles.input}
        onChangeText={handleGoalInput}
        value={enteredGoal}
        />
        <View style={styles.buttonsContainer}>
        <View style={styles.button}>
        <Button title="CANCEL" color="red" onPress={props.handleCancelGoalAdd}/>
        </View>
        <View style={styles.button}>
        <Button title="ADD" onPress={() => props.handleAddGoal(enteredGoal, setEnteredGoal)} />
        </View>
        </View>
      </View>

        </Modal>
        
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        // in react native styling is default to flexbox, but flexbox renders
        // in columns in RN as opposed to the web. so we specify direction as "row"
        // flexDirection: 'row', 
        justifyContent: "center", 
        alignItems: "center",
        flex:1
    
      },
      input: {
        width: "80%", 
        borderBottomColor: "black", 
        borderWidth: 1, 
        padding: 10,
        marginBottom: 10
      }, 
      buttonsContainer: {
          flexDirection: "row",
          justifyContent: "space-around",
          width: "60%"
      },
      button: {
          width: '40%',
      }

})
export default GoalInput