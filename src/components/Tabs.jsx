import React, {useContext} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import PostsScreen from "../screens/PostsScreen";
import LoginScreen from "../screens/LoginScreen";
import {AuthContext} from "../context/AuthContext";
import {createStackNavigator} from "@react-navigation/stack";

const Tabs = () => {
    const Stack = createStackNavigator();

    const {user} = useContext(AuthContext)

    return (
        <>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    {
                        user != null
                            ? (
                                <Stack.Screen
                                    name="Posts"
                                    component={PostsScreen}
                                />
                            )
                            : (
                                <Stack.Screen
                                    name="Login"
                                    component={LoginScreen}
                                />
                            )
                    }
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
};

export default Tabs;
