import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StyleSheet, View, FlatList } from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [dayGoals, setdayGoals] = useState([])

  // this handle function is passed as a prop to GoalItem 
  // to set state when onPress occurs. the function will recieve 
  // an arguement, goalTitle, which is the state info being sent from the child
  // component back to the parent and used to as the value to the key of value.
  // when the button is pressed we are making a shallow copy of the current array
  // and then adding an object with a key of id with value of random number and  key of value
  // with a value of the enteredGoal state
  const handleAddGoal = (goalTitle, resetGoalTitle) => {
    setdayGoals(currentGoals => [
      ...currentGoals, 
      {id: Math.random().toString(), value: goalTitle}
    ])
    resetGoalTitle('')
  }

  const handleRemoveGoal = goalId => {
    setdayGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId)
    })
  }
  return (
    <View style={styles.screen}>
      <GoalInput handleAddGoal={handleAddGoal}/>
      {/* use flatlist instead of .map() because flatlist has 
      lazy loading, only shows what's on the screen,
       the  and can inhance permance. keyExtractor extracts a unique key for each item
       "data" propertery is required for flatlist and is set equal to an array
       renderItem is also required and takes an item from data and renders it
       for each iteration made in dayGoals we get a new GoalItem */}
      <FlatList 
          keyExtractor={(item, index) => item.id}
          data={dayGoals} renderItem={itemData =>  <GoalItem id={itemData.item.id} onDelete={handleRemoveGoal} title={itemData.item.value}/>}
          />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
 
})
