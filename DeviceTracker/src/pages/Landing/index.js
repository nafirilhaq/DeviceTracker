import React from 'react';
import { Image, StatusBar, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Button from '../../components/Landing/Button';
import { colors } from '../../utils/colors';
import { bgLanding, photonLogo } from '../../assets';
import styles from './Styles';

const Landing = () => {
  return (
    <View style={styles.wrapper.container}>
      <StatusBar translucent />
      <Image source={bgLanding} style={styles.img.bg} />
      <View style={styles.wrapper.logoContainer}>
        <Image source={photonLogo} style={styles.img.photon} />
      </View>
      <View style={styles.button.container}>
        <Button 
          title="SIGN UP"
          color="white"
          borderWidth={1}
          />
        <Button 
          title="LOGIN"
          color="black"
          bgColor={colors.button.default}
          onPress={ () => this.props.navigation.navigate('Login')}
        />
        <TouchableOpacity style={styles.wrapper.text}>
          <Text style={styles.text.component}>Login as Admin</Text>
        </TouchableOpacity>
      </View>
    </View>
  );  
}

export default Landing;
