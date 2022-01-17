import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredGoal) => {
    setEnteredGoal(enteredGoal);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add Tasks"
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title="ADD" onPress={() => props.onAddGoal(enteredGoal)} />
      //Another approach
      {/* <Button title="ADD" onPress={() => props.onAddGoal.bind(this, enteredGoal)} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    width: "80%",
    padding: 10,
  },
});

export default GoalInput;
