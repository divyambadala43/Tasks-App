import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Touchable,
} from "react-native";

const GoalList = (props) => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
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
