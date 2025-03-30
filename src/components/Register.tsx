import React, {useState} from 'react';
import {Text,View,TextInput,Dimensions,StyleSheet, Button, Alert} from 'react-native';
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

function Register(): React.JSX.Element {
    const { width, height } = Dimensions.get("window");
    const login = new LoginForm;
    const styles = StyleSheet.create({
        form:{
          marginTop: (height / 5),
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
        buttonLogin: {
          width: '50%'
        }
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
      //TODO логика регистрации
    }

    const onChangeLogin = (value: string): void => {
      login.userName = value;
    }

    const onChangePassword = (value: string): void => {
      login.password = value;
    }

    return (
        <View style={styles.form}>
            <TextInput 
                placeholder="Имя"
                maxLength={255}
                onChangeText={value => onChangeLogin(value)}
            />
            <TextInput 
                placeholder="Фамилия"
                maxLength={255}
                onChangeText={value => onChangeLogin(value)}
            />
            <TextInput 
                placeholder="Отчество"
                maxLength={255}
                onChangeText={value => onChangeLogin(value)}
            />
            <TextInput 
                placeholder="Группа"
                maxLength={255}
                onChangeText={value => onChangeLogin(value)}
            />
            <TextInput 
                placeholder="Логин"
                maxLength={255}
                onChangeText={value => onChangeLogin(value)}
            />
            <TextInput
                secureTextEntry={true}
                placeholder="Пароль"
                maxLength={255}
                onChangeText={value => onChangePassword(value)}
            />
            <Button title='Зарегистрироваться' onPress={handleSubmit}/>
        </View>
    );
}

export default Register;
