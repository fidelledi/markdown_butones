import React from 'react';
import { View, Text, StyleSheet } from "react-native";

const CardScreen = props => {
    return(
        <View style={{...styles.CardStyle, ...props.styles}}>{props.children}</View>
    );
};

const styles = StyleSheet.create( 
    {
    CardStyle: {
        shadowColor: 'gray',
        shadowOffset: {width: 0, height: 3},
        shadowRadius: 12,
        shadowOpacity: 0.26,
        backgroundColor: '#F7F7FC',
        padding: 20,
        borderRadius: 12
    },
}
);

export default CardScreen;