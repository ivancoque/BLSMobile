import React, {useState} from 'react'
import { View, Text, Button, ImageBackground } from 'react-native'

const CounterScreen = () => {
    const [contador, setContador] = useState(0)
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Image
            <Text style={{
                fontSize: 30,
                color: 'white',
                top: 0
            }}>
                Contador: {contador}
            </Text>
            <Button 
                title="Aumentar"
                onPress={() => {
                    setContador(contador + 1)
                }}
            />
            
        </View>
        )
}

export default CounterScreen
