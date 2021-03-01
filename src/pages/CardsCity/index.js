import React, {useState, useEffect} from 'react';
import Carousel from 'react-native-snap-carousel';
import {Dimensions} from 'react-native';

import {Container} from './styles';

import Item from './Item';

const ModalView = () => {
  const [data, setData] = useState([]);
  const {width} = Dimensions.get('window');

  useEffect(() => {
    setData({
      activeIndex: 0,
      carouselItems: [
        {
          title: 'Item 1',
          text: 'Text 1',
        },
        {
          title: 'Item 2',
          text: 'Text 2',
        },
        {
          title: 'Item 3',
          text: 'Text 3',
        },
        {
          title: 'Item 4',
          text: 'Text 4',
        },
        {
          title: 'Item 5',
          text: 'Text 5',
        },
      ],
    });
  }, []);
  return (
    <Container>
      <Carousel
        // ref={(c) => { this._carousel = c; }}
        data={data.carouselItems}
        renderItem={Item}
        sliderWidth={width}
        itemWidth={width}
      />
    </Container>
  );
};

export default ModalView;
