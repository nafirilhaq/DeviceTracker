import * as React from 'react';
import { View, Image } from 'react-native';

import styles from './style'

const Splash = ({ navigation }) => {
    React.useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Landing');
        }, 2000);
    })
    return(
        <View style={styles.container}>
            <Image source={require('../../assets/images/Splash/splashScreen.png')} style={styles.imgLogo} />
        </View>
    )
}

export default Splash;