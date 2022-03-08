import React from "react";
import { Text, StyleSheet } from 'react-native'

const Helvetica = ({ type = 'Light', children, color = "black", marginTop, fontSize = 12 }) => {
    const style = StyleSheet.create({
        text: {
            fontFamily: `Helvetica-${type}`,
            color: color,
            marginLeft: 16,
            marginVertical: 2,
            marginTop: marginTop,
            fontSize: fontSize
        },
    })
    return <Text style={style.text}>{children}</Text>
}

export default Helvetica;