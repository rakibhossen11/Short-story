import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Home from '../screens/Home';
import Story from '../screens/Story';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={Home}>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='story' component={Story} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigation;