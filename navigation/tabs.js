import React from 'react';
import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { Home, Mainline, SME, News, Offers } from "../screens"
import Icon from 'react-native-vector-icons/Ionicons'
import { COLORS, icons } from "../constants"
import { TabIcon } from '../components';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                showLabel: false,
                tabBarStyle:{                  
                    backgroundColor: 'white',
                    borderTopWidth: 0,
                    shadowOffset: { width: 5, height: 3 },
                    shadowColor: 'black',
                    shadowOpacity: 0.5,
                    elevation: 5,
                    height:60,  
                },                
                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: 'grey',
            }}                        
        >
            <Tab.Screen
                name="Mainline IPO"
                component={Mainline}
                options={{
                    tabBarIcon: ({ tintColor }) => (
                        <Icon name="ios-business-outline" color={tintColor} size={24} />
                    )
                    // tabBarIcon: ({focused}) => <TabIcon
                    //     focused={focused} icon={icons.store} name='Mainline IPO'
                    // />
                }}
            />
            <Tab.Screen
                name="SME IPO"
                component={SME}
                options={{
                    tabBarIcon: ({ tintColor }) => (
                        <Icon name="ios-business-outline" color={tintColor} size={24} />
                    )
                }}
            />
            <Tab.Screen
                name="IPO News"
                component={News}
                options={{
                    tabBarIcon: ({ tintColor }) => (
                        <Icon name="ios-newspaper-outline" color={tintColor} size={24} />
                    )
                }}
            />
            <Tab.Screen
                name="Offers"
                component={Offers}
                options={{
                    tabBarIcon: ({ tintColor }) => (
                        <Icon name="ios-gift-outline" color={tintColor} size={24} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs