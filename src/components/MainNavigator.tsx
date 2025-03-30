import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from './lk/Profile';
const Stack = createNativeStackNavigator();

function MainNavigator(): React.JSX.Element {
  return(
    <Stack.Navigator initialRouteName='Профиль'>
      {/* Профиль пользователя */}
      <Stack.Screen name='Профиль' component={Profile} />
    </Stack.Navigator>
  )
}

export default MainNavigator;