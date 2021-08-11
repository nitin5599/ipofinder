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
            // <SafeAreaView style={{ flex: 1 }}>
                // <View style={{ flex: 1 }}>
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
                // </View>
            // </SafeAreaView>
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
            >
            <View style={styles.card}>
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
          </TouchableOpacity>
        );
    };

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

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* <ScrollView> */}
                <FlatList
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
                    renderItem={({item}) => {
                        return <Card plant={item} />;
                    }}
                    ListFooterComponent={
                        <View style={{marginBottom: 100}}/>
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
        height: 180,
        backgroundColor: COLORS.lightGray,
        width: '95%',
        margin: 10,
        borderRadius: 10,
        elevation:5,
        
        // marginBottom: 20,
        padding: 15,
    },
});