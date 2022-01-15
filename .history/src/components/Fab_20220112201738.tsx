import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

interface Props {
    title : string
    position : 'right' | 'left'
    onPress : () => void
}

export const Fab = ({title, onPress, position}:Props) => {
    console.log(title);

    return (
        <TouchableOpacity
                        onPress={
                            onPress
                        }

                        style={
                            /*
                                position =='right' ? styles.fabLocationRight : styles.fabLocationLeft
                            */
                           styles.fabLocation
                        }
                    >
                        <View style={styles.fab}>
                            <Text
                                style={styles.fabText}
                            >
                                {title}
                            </Text>
                        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    fabLocation : {
        position: 'absolute',
        bottom: 5,
        right : 5
    },
    right :{
        right: 5
    },
    left :{
        left: 5
    },
    fab:{
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
    },
    fabText:{
        color: "white",
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf : 'center',
    }
})
