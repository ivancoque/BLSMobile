import React from 'react';
import { ActivityIndicator, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';

export const CarouselImages = ({images, height , width})=> {
  return(
      <Carousel
        layout='default'
        data={images}
        sliderWidth={width}
        itemWidth={width}
        itemHeight={height}
        renderItem={({item, index}:any) => {
          return (
            <Image
              source={{uri: item.url}}
              style={{width: width, height: height}}
              
            />
            
          )}
          
        }
      />
  );
};
