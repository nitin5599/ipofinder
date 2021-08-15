import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  Button
} from 'react-native';
import {
    SafeAreaProvider,
    useSafeAreaInsets,
} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons'
import {
    SharedElement,
    createSharedElementStackNavigator,
} from 'react-navigation-shared-element';
// import { Button } from 'react-native-paper';

const SPACING = 15;

const Detail = ({ route, navigation }) => {

    const { plant } = route.params;
    const safeInsets = useSafeAreaInsets();
    const opacity = useRef(new Animated.Value(0)).current;
  
    useEffect(() => {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 250,
        delay: 500,
        useNativeDriver: true,
      }).start();
    }, []);
    
    return (
        <View style={styles.wrapper}>

            <Animated.View
                style={{
                    opacity,
                    position: 'absolute',
                    top: safeInsets.top + SPACING,
                    left: safeInsets.left + SPACING,
                    right: safeInsets.right + SPACING,
                    zIndex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <Icon name="close-circle-outline" size={24} onPress={() => navigation.goBack()} />
                <Icon name="ellipsis-horizontal-circle-outline" size={24} />
            </Animated.View>
    
            <SharedElement id={plant.id}>
                <Image source={plant.img} style={styles.plantImage} />
            </SharedElement>
    
            <View style={styles.plantDetails}>
                <Text style={styles.plantTitle}>{plant.name}</Text>
    
                <Text style={styles.plantPrice}>€{plant.price}</Text>
        
                {/* <Button
                    title="Contact Seller"
                    style={styles.plantContactButton}
                /> */}
                
                <Button style={styles.btnstyle1} title='some' />
                    {/* <Text style={{color:"#fff",fontSize:15}}> Press me</Text> */}
                {/* </Button> */}
        
                <Animated.Text
                    style={{
                    opacity,
                    fontSize: 17,
                    }}
                >
                    {plant.about}
                </Animated.Text>
            </View>
    
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
    },
    listHeader: {
      fontSize: 28,
      fontWeight: '800',
      margin: SPACING,
    },
    plants: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    plantTexts: {
      margin: 10,
      marginBottom: 15,
    },
    plantHeader: {
      fontWeight: '600',
    },
    plantDescription: {
      color: 'gray',
    },
    plantImage: {
      height: 300,
      width: '100%',
    },
    plantDetails: {
      paddingVertical: 10,
      paddingHorizontal: SPACING,
    },
    plantTitle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    plantPrice: {
      fontSize: 16,
      marginVertical: 10
    },
    plantContactButton: {
      marginVertical: SPACING,
    },
    
  btnstyle1:{
    backgroundColor:"#000",
    color:"#fff",
    paddingHorizontal:30,
    paddingVertical:5,
    marginVertical:10,
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOpacity: 0.9,
    elevation: 8,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},

  },
});

export default Detail
