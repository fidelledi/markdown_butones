import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Button } from "react-native";
import Icons from "react-native-vector-icons/MaterialIcons";

const MarkdownButton = (props) => {
  const [showMarkdown, setShowMarkdown] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setShowMarkdown(!showMarkdown)}>
        <View
          style={{
            width: 25,
            height: 25,
            borderColor: props.borderColor,
            borderWidth: 0.5,
            alignItems: "center",
            shadowColor: props.shadowColor,
            shadowOffset: { width: 0, height: 3 },
            shadowRadius: 12,
            shadowOpacity: 0.26,
            borderRadius: 3,
            backgroundColor: props.buttonBGColor,
          }}
        >
          <Icons
            reverse
            name="arrow-drop-down"
            size={23}
            color={props.iconColor}
          />
        </View>
        <View style={styles.sizedBox} />
      </TouchableOpacity>
      {showMarkdown == false ? null : (
        <View
          style={{
            shadowColor: props.shadowColor,
            shadowOffset: { width: 0, height: 3 },
            shadowRadius: 12,
            shadowOpacity: 0.26,
            padding: 20,
            borderRadius: 12,
            backgroundColor: props.CardColor,
          }}
        >
          <Text
            style={{
              alignContent: "center",
              alignItems: "center",
            }}
          >
            {props.ordinaryText}
          </Text>
          <View style={styles.sizedBox} />
          <View style={styles.buttonStyle}>
            <Button
              color={props.Button1Color}
              title={props.buttonOneText}
              onPress={() => {}}
            />
            <View style={styles.sizedBox} />
            <Button
              color={props.Button2Color}
              title={props.buttonTwoText}
              onPress={() => {}}
            />
            <Button
              color={props.Button3Color}
              title={props.buttonThreeText}
              onPress={() => {}}
            />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    alignContent: "center",
  },
  buttonStyle: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  sizedBox: {
    height: 12,
  },
});

export default MarkdownButton;
