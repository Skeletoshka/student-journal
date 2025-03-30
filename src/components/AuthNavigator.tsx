import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from './Login';
import Register from './Register';
const Stack = createNativeStackNavigator();

function AuthNavigator(): React.JSX.Element {
  return(
      <Stack.Navigator initialRouteName='Авторизация'>
        {/* Авторизация */}
        <Stack.Screen name='Авторизация' component={Login}/>
        {/* Регистрация */}
        <Stack.Screen name='Регистрация' component={Register}/>
      </Stack.Navigator>
  )
}

export default AuthNavigator;