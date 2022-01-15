import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator();
import {PrimeraScreen} from '../Navigation/PrimeraScreen';
import {SegundaScreen} from '../Navigation/SegundaScreen';
import {TerceraScreen} from '../Navigation/TerceraScreen';
export const StackNavigator = () => {
    return(
        <Stack.Navigator
            initialRouteName="PrimeraScreen"
            screenOptions= {{
                headerStyle: {
                  elevation:0  
                },
                cardStyle: {
                    backgroundColor: 'red',
                    headerShow: false
                }
            }}
        >
            <Stack.Screen name="PrimeraScreen" options={{title:""}} component={PrimeraScreen} />
            <Stack.Screen name="SegundaScreen" options={{title:""}} component={SegundaScreen} />
            <Stack.Screen name="TerceraScreen" options={{title:""}} component={TerceraScreen} />
        </Stack.Navigator>

    )
}