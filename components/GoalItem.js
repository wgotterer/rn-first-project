import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native'

 const GoalItem =  props => {
    return  (
        // TouchableOpacity allows us to use properties like onPress.
        // View does not have an onPress prop so we need to wrap it in TouchableOpacity
       <TouchableOpacity activeOpacity={0.8} onPress={() => props.onDelete(props.id)}> 
          <View style={styles.listItem} on> 
          <Text >Goal: {props.title} </Text> 
          </View>
       </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        backgroundColor: "#ccc",
        borderColor: "black",
        borderWidth: 1,
        marginVertical: 10
      }

})

export default GoalItem