import React from 'react'
import {View, Text, Button} from 'react-native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'

interface Props extends NativeStackNavigationProp<any, any>{};
export const PrimeraScreen = ({ navigate }:Props) => {
    
    return (
        <View>
            <Text>Primera Screen</Text>
            <Button
                title="Go to Second Screen"
                onPress = { ()=> navigate("SegundaScreen")}
            />
        </View>
    )
}
