import React, {useState} from 'react'
import {SafeAreaView, View, Text, Button, ImageBackground } from 'react-native'

const CounterScreen = () => {
    const [contador, setContador] = useState(0)
    return (
        <SafeAreaView style={{
            flex: 1,
        }}>
            <ImageBackground
                style={{
                    flex:1,

                }}
                source={require('../assets/Login/login.jpg')}
            >
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
            </ImageBackground>
                       
        </SafeAreaView>
        )
}

export default CounterScreen
