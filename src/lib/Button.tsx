import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

interface ButtonProps{
    label: String,
    onPress: any
}

const Button: React.FC<ButtonProps> = (props) =>{
    return (
      <TouchableOpacity
        style={{
          borderRadius: 8,
          height: 50,
          width: 245,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#e94832'
        }}
        activeOpacity={0.7}
        onPress={props.onPress}
      >
        <Text
          style={{ fontSize: 18, color: 'white', textTransform: 'uppercase' }}
        >
          {props.label}
        </Text>
      </TouchableOpacity>
    );
};

export default Button;