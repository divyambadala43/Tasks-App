import React from "react";
import { Text, View, StyleSheet } from "react-native";

const GoalList = (props) => {
  return (
    <View style={styles.listItem}>
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "#ccc",
    marginVertical: 10,
  },
});

export default GoalList;
