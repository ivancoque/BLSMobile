import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {LoginScreen} from '../../Authentication/LoginScreen';
import { SignupScreen } from '../../Authentication/SignupScreen';
const RootStack = createNativeStackNavigator();
/*
import {PrimeraScreen} from '../Navigation/PrimeraScreen';
import {SegundaScreen} from '../Navigation/SegundaScreen';
import {TerceraScreen} from '../Navigation/TerceraScreen';
*/

export const StackNavigator = () => {


    return(
        <RootStack.Navigator
            initialRouteName="PrimeraScreen"
            
        >
            <RootStack.Screen name="PrimeraScreen" options={{title:"Login"}} component={LoginScreen} />
            <RootStack.Screen name="SegundaScreen" options={{title:"Registro"}} component={SignupScreen} />
        </RootStack.Navigator>

    )
}