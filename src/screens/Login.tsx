import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SignIn from "../modules/SignIn/SignIn";
import SignUp from "../modules/SignUp/SignUp";
import React from "react";

const Tab = createMaterialTopTabNavigator();

export default function Login() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="SignIn" component={SignIn}/>
            <Tab.Screen name="SignUp" component={SignUp}/>
        </Tab.Navigator>
    );
}
