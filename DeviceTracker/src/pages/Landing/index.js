import React from 'react';
import { Image, StatusBar, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Button from '../../components/Landing/Button';
import { colors } from '../../utils/colors';

const Landing = () => {
  return (
    <View style={styles.wrapper.container}>
      <StatusBar translucent />
      <Image source={require('../../assets/images/Images/bgLandingScreen.png')} style={styles.img.bg} />
      <View style={styles.wrapper.logoContainer}>
        <Image source={require('../../assets/images/Images/photonLogoLanding.png')} style={styles.img.photon} />
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

const styles = {
  wrapper: {
    container: { 
      flex: 1,
    },
    logoContainer: {
      flex: 1,
      alignItems: 'center',
      paddingBottom: 200
    },
    text: {
      marginTop: 44
    }
  },
  img: {
    bg: {
      flex: 1,
      position: 'absolute',
      zIndex: 0,
      width: '100%',
      height: '100%',
      resizeMode: 'cover'
    },
    photon: {
      marginTop: 220,
      width: 212,
      height: 56,
    }
  },
  button: {
    container: {
      flex: 1,
      alignItems: 'center',
    },
  },
  text: {
    component: {
      color: 'white',
      fontSize: 16
    }
  }
}
  
export default Landing;
