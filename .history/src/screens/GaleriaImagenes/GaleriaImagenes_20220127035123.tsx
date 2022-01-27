import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { CarouselImages } from '../../components/CarouselImages';
const widthScreen = Dimensions.get('window').width;
export const GaleriaImagenes = () => {
  return (
      <View style = {styles.container}>
            <Text style= {styles.title}>Galeria Imagenes</Text>
            <CarouselImages
                images={[
                    {url: 'https://pbs.twimg.com/media/FAu6q2pWUAUrwee?format=jpg&name=large'},
                    {url: 'https://pbs.twimg.com/media/FAu6q2rXMAA-21Z?format=jpg&name=large'},
                    {url: 'https://pbs.twimg.com/media/FAu6q2qX0BIzn1h?format=jpg&name=large'},
                    {url: 'https://pbs.twimg.com/media/FAu6q3aWUAU09jq?format=jpg&name=large'}
                ]}
                height={200}
                width={widthScreen}
                style = {styles.carousel}
            />
            <Text style= {styles.content}>Progreso de Andrea basado en la cirugía por microscopía 
                de la dermatología Dra. Betty Garzón realizado en la fecha del 20-01-2022 
            `</Text>
      </View>
  );
};
const styles = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#e679793c'
    },
    
    title : {
        flex: 1,
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 50,
        fontWeight

    },
    content : {
        flex: 5,
        fontSize: 20,
        padding: 30
    },
    carousel : {
        flex: 1,
    }
    });