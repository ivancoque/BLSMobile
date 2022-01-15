import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const FlexScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.caja1}>Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#e6a9a9',
        justifyContent: ''
    },
    caja1: {
        borderWidth: 2,
        borderColor: 'red',
        fontSize: 30,
    },
    caja2: {
        borderWidth: 2,
        borderColor: 'red',
        fontSize: 30,
    },
    caja3: {
        borderWidth: 2,
        borderColor: 'red',
        fontSize: 30,
    }
})