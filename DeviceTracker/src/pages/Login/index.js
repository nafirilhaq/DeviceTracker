import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { photonLogo } from '../../assets';

class Login extends Component {
	render(){
		return(
			<View style={{flex: 1}}>
					<View style={{
						flex: 1, 
						alignItems: 'center', 
						alignSelf: 'center', 
						paddingTop: 50, 
						borderBottomWidth: 1, 
						borderBottomColor: 'black', 
						width: '75%'}}>
						<Image source={photonLogo} style={{width: 154, height: 144}}/>
					</View>
					<View style={{flex: 1}}>

					</View>
					<View style={{flex: 1}}>

					</View>
			</View>
		)
	}
}

export default Login;