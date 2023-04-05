import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';

import LoginHome from '../screens/LoginHome';

export default function HomeStack(){
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='LoginHome'>
            <Stack.Screen name='LoginHome' component={LoginHome} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}