import React, {useEffect, useState} from 'react'
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
    FlatList,
    Image,
    Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { COLORS, icons, images, SIZES, FONTS, plants } from "../constants"

const Mainline = () => {

    const renderSearch = () => {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <View style={{backgroundColor: 'white'}}>
                        <View style={{
                            flexDirection: 'row',
                            backgroundColor: 'white', 
                            marginHorizontal: 20,
                            marginTop: Platform.OS == 'android' ? 20 : null
                        }}>
                            <Icon name="ios-search" size={20} style={{ margin: 10 }} />
                            <TextInput
                                underlineColorAndroid="transparent"
                                placeholder="Try New Delhi"
                                placeholderTextColor="grey"
                                style={{ flex: 1, fontWeight: '700', backgroundColor: 'white', marginTop:-3 }}
                            />
                        </View>
                    </View>
                </View>
            </SafeAreaView>
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

    const Card = ({plant}) => {
        return (
          <TouchableOpacity
            activeOpacity={0.8}
            // onPress={() => navigation.navigate('Details', plant)}
            >
            <View style={styles.card}>
              <View style={styles.categoryContainer}>
                <View>
                    <Text style={{fontWeight: 'bold', fontSize: 16, marginTop: 0}}>
                        {plant.name}
                    </Text>
                </View>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor:'black'
                      ? 'rgba(245, 42, 42,0.2)'
                      : 'rgba(0,0,0,0.2) ',
                  }}>
                  <Icon
                    name="favorite"
                    size={14}
                    color={plant.like ? 'red' : 'black'}
                  />
                </View>
              </View>
    
              {/* <View
                style={{
                  height: 10,
                  alignItems: 'center',
                }}>
                <Image
                  source={plant.img}
                  style={{flex: 1, resizeMode: 'contain'}}
                />
              </View> */}
    
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                }}>
                <Text style={{fontSize: 15}}>
                  ${plant.price}
                </Text>
                {/* <View
                  style={{
                    height: 25,
                    width: 25,
                    backgroundColor: 'green',
                    borderRadius: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{fontSize: 22, color: 'white', fontWeight: 'bold'}}>
                    +
                  </Text>
                </View> */}
              </View>
            </View>
          </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                {renderSearch()}
                <View style={styles.categoryContainer}>
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
                <FlatList
                    // columnWrapperStyle={{justifyContent: 'space-between'}}
                    showsVerticalScrollIndicator={true}
                    // contentContainerStyle={{
                    //     marginTop: 10,
                    //     paddingBottom: 50,
                    // }}
                    // numColumns={1}
                    data={plants}
                    renderItem={({item}) => {
                        return <Card plant={item} />;
                    }}
                />
            </ScrollView>
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
        // marginTop: 30,
        // marginBottom: 20,
        justifyContent: 'space-between',
    },
    card: {
        height: 180,
        backgroundColor: COLORS.lightGray,
        width: '95%',
        margin: 10,
        borderRadius: 10,
        // marginBottom: 20,
        padding: 15,
    },
});