import React, {useEffect, useState, useCallback,} from 'react'
import {    
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar, 
    ScrollView,
    TouchableOpacity,
    RefreshControl,
    FlatList,
    Animated,
    PanResponder,
    Image,
    Dimensions} from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import { diffClamp, translate, usePanGestureHandler, withDecay, withOffset } from 'react-native-redash/lib/module/v1';
import  { add, Extrapolate, interpolate, interpolateNode } from 'react-native-reanimated'
import Icon from 'react-native-vector-icons/Ionicons'
import { SharedElement, createSharedElementStackNavigator } from 'react-navigation-shared-element';

import { 
    COLORS, 
    icons, 
    images, 
    SIZES, 
    FONTS, 
    plants, 
    CARD_HEIGHT as DEFAULT_CARD_HEIGHT, 
    CARD_WIDTH, 
    CARD_HEIGHT
} from "../constants"

const Mainline = ({navigation}) => {

    const renderSearch = () => {
        return (
            <View style={{backgroundColor: 'white'}}>
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: 'white', 
                    marginHorizontal: 20,
                    marginTop: Platform.OS == 'android' ? 20 : null
                }}>
                    <Icon name="ios-search-outline" size={20} style={{ margin: 10 }} />
                    <TextInput
                        underlineColorAndroid="transparent"
                        placeholder="Try New Delhi"
                        placeholderTextColor="lightgrey"
                        style={{ flex: 1, fontWeight: '700', backgroundColor: 'white', marginTop:-3 }}
                    />
                </View>
            </View>
        )
    }

    const listTabs = [ 
        {status: 'Current'},
        {status: 'Listed'},
    ]
    const [selectedTab, setSelectedTab] = useState(0)
    const setStatusFilter = (status) => {
        setSelectedTab(status)
    }

    const renderTabs = () => {
        <View style={[styles.categoryContainer, {marginTop: 100}]}>
            {
                listTabs.map((e, index) => (
                    <TouchableOpacity 
                        key={index}
                        style={[styles.pill, {backgroundColor: selectedTab === index ? 'orange' : 'transparent'}]}
                        onPress={()=>setSelectedTab(index)}
                    >
                        <Text style={[styles.pillText, , {color: selectedTab === index ? 'white' : '#000'}]}>{e.status}</Text>
                    </TouchableOpacity>
                    )
                )
            }
        </View>
    }

    // const { height } = Dimensions.get("window");
    // const MARGIN = 16;
    // const CARD_HEIGHT = DEFAULT_CARD_HEIGHT + MARGIN * 2;
    
    // const [ContainerHeight, setContainerHeight] = useState(height)
    
    // const {gestureHandler, translation, velocity, state} = usePanGestureHandler();
    
    // const visibleCards = Math.floor(ContainerHeight / CARD_HEIGHT)
    
    // const Y = diffClamp(withDecay({
    //     value:translation.y,
    //     velocity: velocity.y, 
    //     state
    // }), -plants.length * CARD_HEIGHT + visibleCards * CARD_HEIGHT , 0);
    const SPACING = 50;
    const IMAGE = 200;
    const ITEM_SIZE = IMAGE + SPACING*3;

    const Card = ({plant, index}) => {        
        
        // const positionY = add(Y, index * CARD_HEIGHT);
        // const isDisappearing = -CARD_HEIGHT;
        // const isOnTop = 0;
        // const isOnBottom = (visibleCards - 1)*CARD_HEIGHT;
        // const isAppearing = (visibleCards)*CARD_HEIGHT;

        // const extraTranslateY = interpolateNode(positionY, {
        //     inputRange: [isOnBottom, isAppearing],
        //     outputRange: [0, -CARD_HEIGHT/4],
        //     extrapolate: Extrapolate.CLAMP
        // });

        // const translateY = add(interpolateNode(Y, {
        //     inputRange: [-CARD_HEIGHT*index, 0],
        //     outputRange: [-(CARD_HEIGHT)*index, 0],
        //     extrapolate: Extrapolate.CLAMP
        // }), extraTranslateY);
        
        // const scale = interpolateNode(positionY, {
        //     inputRange: [isDisappearing, isOnTop, isOnBottom, isAppearing],
        //     outputRange: [0.5, 1, 1, 0.5],
        //     extrapolate: Extrapolate.CLAMP,
        //   });
        
        //   const opacity = interpolateNode(positionY, {
        //     inputRange: [isDisappearing, isOnTop, isOnBottom, isAppearing],
        //     outputRange: [0.5, 1, 1, 0.5],
        // });

        return (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.push('Detail', { plant })}
            >
            {/* <PanGestureHandler {...gestureHandler}> */}
            <SharedElement id={plant.id}>
            <View 
                style={[styles.card, 
                    // { opacity, transform: [{translateY}, {scale}]}
                    
                    ]} 
                // onLayout={({
                //     nativeEvent: {
                //         layout: {height: h},
                //     }
                // }) => setContainerHeight(h) }
            >
                <View style={styles.categoryContainer}>

                    <View 
                        style={{
                            flex:1,
                            flexDirection:'row',
                            justifyContent: 'space-between',
                            // alignItems: 'center',
                        }}
                    >
                        <Text style={{fontWeight: 'bold', fontSize: 16}}>
                            {plant.name}
                        </Text>
                        <Icon name='ios-share-social-outline' size={20}/>
                    </View>
                </View>
    
                <View
                    style={{
                        flexDirection:'row',
                        // justifyContent: 'space-between',
                    }}
                >
                    <View>
                        <Image source={plant.img} style={{height:70, width:70}}/>
                    </View>

                    <View style={{flex:1, marginLeft:10}}>
                        <View                            
                            style={{flexDirection:'row', justifyContent:'flex-start'}}
                        >
                            <View style={{flexDirection:'row',alignItems:'center',}}>
                                <Icon name='calendar-outline' size={14} style={{}}/>
                                <Text style={{paddingLeft:5, fontSize:14,  fontWeight:'700'}}>Offer Date</Text>
                            </View>
                            <View  style={{flexDirection:'row',alignItems:'center',marginLeft:55}}>
                                <Icon name='cash-outline' size={14} style={{}}/>
                                <Text style={{paddingLeft:5, fontSize:14,  fontWeight:'700'}}>Offer Price</Text>                                
                            </View>
                        </View>
                        <View                            
                            style={{
                                // flex:1, 
                                flexDirection:'row',
                                justifyContent:'space-between',
                                marginBottom:15
                            }}
                        >
                            <View style={{flexDirection:'row', width:'44%'}}>
                                <Text 
                                numberOfLines={2} 
                                style={{fontSize:12, paddingLeft:18}}>5 May,20 - 20 May,20</Text>
                            </View>
                            <View  style={{flexDirection:'row'}}>
                                <Text style={{fontSize:12, paddingRight:20}}>
                                  784-799
                                </Text>                                
                            </View>
                        </View>
                        <View
                            style={{flexDirection:'row', justifyContent:'flex-start', }}
                        >
                            <View style={{flexDirection:'row',alignItems:'center', }}>
                                <Icon name='layers-outline' size={14} style={{ }}/>
                                <Text style={{paddingLeft:5, fontSize:14,  fontWeight:'700'}}>Lots</Text>
                            </View>
                            <View style={{flexDirection:'row',alignItems:'center',marginLeft:95}}>
                                <Icon name='people-outline' size={16} style={{}}/>
                                <Text style={{paddingLeft:5, fontSize:14,  fontWeight:'700'}}>Subs</Text>                                
                            </View>
                        </View>
                        <View                            
                            style={{flexDirection:'row', justifyContent:'space-between'}}
                        >
                            <View style={{flexDirection:'row'}}>
                                <Text style={{fontSize:12, paddingLeft:18}}>10</Text>
                            </View>
                            <View  style={{flexDirection:'row'}}>
                                <Text style={{fontSize:12, paddingRight:10}}>
                                    64.4 times
                                </Text>                                
                            </View>
                        </View>
                    </View>
                </View>
        
            </View>
            </SharedElement>
            {/* </PanGestureHandler> */}
          </TouchableOpacity>
        );
    };

    // const {gestureHandler, translation, velocity, state} = usePanGestureHandler();
    const renderItem = ({item, index}) => {
        // const inputRange = [
        //     -1,
        //     0,
        //     ITEM_SIZE * index,
        //     ITEM_SIZE * (index+2),
        // ]
        // const scale = scrollY.interpolate({
        //     inputRange: inputRange,
        //     outputRange: [1,1,1,0]
        // })
        return (
            // <PanGestureHandler key={item} {...gestureHandler}>
                <Animated.View style={{transform: [{scale: scale}]}}>
                    <Card plant={item} index={index} />           
                </Animated.View>
            // </PanGestureHandler>
        )
}

    const [refreshing, setRefreshing] = useState(false);
    
    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    const scrollY = React.useRef(new Animated.Value(0)).current;
    
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* <ScrollView> */}
                <Animated.FlatList
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                    onScroll={Animated.event(
                        [{nativeEvent: {contentOffset: {y: scrollY}}}],
                        {useNativeDriver: true}
                    )}
                    // columnWrapperStyle={{justifyContent: 'space-between'}}
                    showsVerticalScrollIndicator={true}
                    // contentContainerStyle={{
                    //     marginTop: 10,
                    //     paddingBottom: 50,
                    // }}
                    // numColumns={1}
                    ListHeaderComponent={
                        <View>                                        
                            {renderSearch()}
                            {/* {renderTabs()} */}
                            <View 
                                style={{
                                    flexDirection: 'row',
                                    marginTop: 20,
                                    marginBottom: 20,
                                    justifyContent:'center'
                                }}
                            >
                                {
                                    listTabs.map((e, index) => (
                                        <TouchableOpacity 
                                            key={index}
                                            style={[styles.pill, {backgroundColor: selectedTab === index ? 'orange' : 'transparent'}]}
                                            onPress={()=>setSelectedTab(index)}
                                        >
                                            <Text style={[styles.pillText, , {color: selectedTab === index ? 'white' : '#000'}]}>{e.status}</Text>
                                        </TouchableOpacity>
                                        )
                                    )
                                }
                            </View>
                        </View>
                    }
                    data={plants}
                    keyExtractor={item => item.id}
                    renderItem={({item, index}) => {
                        const inputRange = [
                            -1,
                            0,
                            ITEM_SIZE * index,
                            ITEM_SIZE * (index+2),
                        ]
                        const opacityInputRange = [
                            -1,
                            0,
                            ITEM_SIZE * index,
                            ITEM_SIZE * (index+1),
                        ]
                        const scale = scrollY.interpolate({
                            inputRange: inputRange,
                            outputRange: [1,1,1,0]
                        })
                        const opacity = scrollY.interpolate({
                            inputRange: opacityInputRange,
                            outputRange: [1,1,1,0]
                        })

                        return(
                        <Animated.View style={{opacity, transform: [{scale: scale}]}}>
                            <Card plant={item} index={index} />           
                        </Animated.View>
                    )}}
                    ListFooterComponent={
                        <View style={{marginBottom: 20}}/>
                    }
                />
            {/* </ScrollView> */}
        </SafeAreaView>
    )
}

export default Mainline

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    listTab:{
        flexDirection:'row',
        marginBottom:20,
        alignSelf:'center'
    },
    btnTab:{
        width: Dimensions.get('window').width/3.5,
        flexDirection:'row',
        padding:10,
        justifyContent:'center',
        borderWidth:0.5,
        borderColor:'#EBEBEB'
    },
    textTab:{
        fontSize: 16
    },
    btnTabActive:{
        backgroundColor:'#E683BD'
    },
    pill:{
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 12,
        marginHorizontal: 5,
    },
    pillText:{
        fontWeight:'700'
    },
    categoryContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        justifyContent: 'space-between',
    },
    card: {
        height: CARD_HEIGHT,
        backgroundColor: COLORS.lightGray,
        width: '95%',
        margin: 10,
        borderRadius: 10,
        elevation:5,
        
        // marginBottom: 20,
        padding: 15,
    },
});