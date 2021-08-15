import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");
const ratio = 228 / 362;
const CARD_WIDTH = width * 0.8;
const CARD_HEIGHT = CARD_WIDTH * ratio;

// const styles = StyleSheet.create({
//   card: {
//     width: CARD_WIDTH,
//     height: CARD_HEIGHT,
//   },
// });

const plants = [
    {
      id: 1,
      name: 'Succulent Plant',
      price: '39.99',
      like: true,
      img: require('../assets/images/logo1.jpg'),
      about:
        'Succulent Plantis one of the most popular and beautiful species that will produce clumpms. The storage of water often gives succulent plants a more swollen or fleshy appearance than other plants, a characteristic known as succulence.Succulent Plantis one of the most popular and beautiful species that will produce clumpms. The storage of water often gives succulent plants a more swollen or fleshy appearance than other plants, a characteristic known as succulence.Succulent Plantis one of the most popular and beautiful species that will produce clumpms. The storage of water often gives succulent plants a more swollen or fleshy appearance than other plants, a characteristic known as succulence.',
    },
  
    {
      id: 2,
      name: 'Dragon Plant',
      price: '29.99',
      like: false,
      img: require('../assets/images/logo1.jpg'),
      about:
        'Dragon Plant one of the most popular and beautiful species that will produce clumpms. The storage of water often gives succulent plants a more swollen or fleshy appearance than other plants, a characteristic known as succulence.',
    },
    {
      id: 3,
      name: 'Dragon Plant',
      price: '29.99',
      like: false,
      img: require('../assets/images/logo1.jpg'),
      about:
        'Dragon Plant one of the most popular and beautiful species that will produce clumpms. The storage of water often gives succulent plants a more swollen or fleshy appearance than other plants, a characteristic known as succulence.',
    },
    {
      id: 4,
      name: 'Dragon Plant',
      price: '29.99',
      like: false,
      img: require('../assets/images/logo1.jpg'),
      about:
        'Dragon Plant one of the most popular and beautiful species that will produce clumpms. The storage of water often gives succulent plants a more swollen or fleshy appearance than other plants, a characteristic known as succulence.',
    },
    {
      id: 5,
      name: 'Dragon Plant',
      price: '29.99',
      like: false,
      img: require('../assets/images/logo1.jpg'),
      about:
        'Dragon Plant one of the most popular and beautiful species that will produce clumpms. The storage of water often gives succulent plants a more swollen or fleshy appearance than other plants, a characteristic known as succulence.',
    },
]

export {plants, CARD_HEIGHT, CARD_WIDTH}