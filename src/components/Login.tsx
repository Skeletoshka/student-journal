import React, {useState} from 'react';
import {Text,View,TextInput,Dimensions,StyleSheet, Button, Alert, TouchableOpacity, ImageBackground} from 'react-native';

//import Button from '../lib/Button';

type FormData = {
  username: string
  password: string
}

class LoginForm{
  userName: string;
  password: string;

  constructor(userName = '', password = ''){
    this.userName = userName;
    this.password = password;
  }
}

const image = require('../../public/img/background.jpg');

const Login = ({navigation}:any): React.JSX.Element => {
    const { width, height } = Dimensions.get("window");
    const login = new LoginForm;
    const styles = StyleSheet.create({
        form:{
          marginTop: (height / 3.5),
          marginLeft: 10,
          marginRight: 10,
          backgroundColor: 'white',
          borderWidth: 1,
          padding: 10,
          borderRadius: 10
        },
        formHeader: {
          textAlign: 'center',
          color: 'black',
          fontWeight: 'bold'
        },
        buttonAuth: {
          padding: '2%'
        },
        buttonRegister: {
          padding: '2%'
        },
        imgBackground: {
          width: '100%',
          height: '100%',
          flex: 1 
        },
      });
    
    const handleSubmit = (): void => {
      if(login.userName.length < 5){
        Alert.alert("Логин должен содержать 5 и более символов")
        return;
      }
      if(login.password.length < 8){
        Alert.alert("Пароль должен содержать 8 и более символов")
        return;
      }
      console.log(JSON.stringify(login))
      //TODO логика авторизации
      navigation.navigate('Main')
    }

    const register = (): void => {
      navigation.navigate('Регистрация')
    }

    const onChangeLogin = (value: string): void => {
      login.userName = value;
    }

    const onChangePassword = (value: string): void => {
      login.password = value;
    }

    return (
      <ImageBackground source={image} style={styles.imgBackground}>
        <View style={styles.form}>
            <TextInput 
                placeholder="Email"
                maxLength={255}
                onChangeText={value => onChangeLogin(value)}
            />
            <TextInput
                secureTextEntry={true}
                placeholder="Password"
                maxLength={255}
                onChangeText={value => onChangePassword(value)}
            />
            <TouchableOpacity style={styles.buttonAuth}>
              <Button title='Войти' onPress={handleSubmit}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonRegister}>
              <Button title='Зарегистрироваться' onPress={register}/>
            </TouchableOpacity>
        </View>
      </ImageBackground>
    );
}

export default Login;
