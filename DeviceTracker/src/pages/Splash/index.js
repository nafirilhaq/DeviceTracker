import * as React from 'react';
import { View, Image } from 'react-native';
import { colors } from '../../utils';
import { bgSplash } from '../../assets';

const Splash = ({ navigation }) => {
    React.useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Landing');
        }, 2000);
    })
    return(
        <View style={styles.wrapper.container}>
            <Image source={bgSplash} style={styles.img.imgLogo} />
        </View>
    );
};

const styles = {
    wrapper: {
        container: {
            flex: 1,
            backgroundColor: colors.bg.splash,
            justifyContent: 'center',
            alignItems: 'center'
          }
    },
    img: {
        imgLogo: {
            width: 272,
            height: 92
        }
    }
}

export default Splash;