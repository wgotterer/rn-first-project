import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StyleSheet, View, FlatList } from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])

  // this handle function is passed as a prop to GoalItem 
  // to set state when onPress occurs. the function will recieve 
  // an arguement, goalTitle, which is the state info being sent from the child
  // component back to the parent and used to as the value to the key of value.
  // when the button is pressed we are making a shallow copy of the current array
  // and then adding an object with a key of id with value of random number and  key of value
  // with a value of the enteredGoal state
  const handleAddGoal = (goalTitle) => {
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      {id: Math.random().toString(), value: goalTitle}
    ])
  }
  return (
    <View style={styles.screen}>
      <GoalInput handleAddGoal={handleAddGoal}/>
      <FlatList 
          keyExtractor={(item, index) => item.id}
          data={courseGoals} renderItem={itemData => <GoalItem title={itemData.item.value}/>}
          />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
 
})
