import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Button = (props) => {
  const styles = {
    wrapper: {
      component: {
        marginTop: 20,
        width: 278,
        height: 52,
        borderWidth: props.borderWidth,
        borderColor: 'white',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: props.bgColor
      }
    },
    text: {
      title: {
        color: props.color,
        fontSize: 20,
        fontWeight: 'bold'
      }
    }
  }
  return(
    <TouchableOpacity>
      <View style={styles.wrapper.component}>
        <Text style={styles.text.title}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default Button;