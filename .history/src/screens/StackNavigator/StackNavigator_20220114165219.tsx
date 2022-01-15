import {createStackNavigator} from 'react-navigation-stack';
const Stack = createStackNavigator();

export const StackNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="PrimeraScreen" component={PrimeraScreen} />
            <Stack.Screen name="SegundaScreen" component={SegundaScreen} />
            <Stack.Screen name="Tercera" component={TerceraScreen} />
        </Stack.Navigator>

    )
}