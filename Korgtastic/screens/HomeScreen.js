import React from 'react';
import styles from '../styles/Styles.js';
import { StyleSheet, Text, View, TextInput,ScrollView,TouchableHighlight,Image, ImageBackground} from 'react-native';
import CustomButton from '../components/CustomButton.js';

export default class HomeScreen extends React.Component {

    static navigationOptions = () => ({
        title: 'Korgtastic',
        headerTintColor: '#ffffff',
        headerStyle:
            {
                backgroundColor: '#000000',
            },

    });

    constructor(props) {
		super(props);
        this.state = 
        {}
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.homeView}>
                <CustomButton
                    navigation={this.props.navigation}
                    text='Start game'
                    navigateTo='Game' />
                <CustomButton
                    navigation={this.props.navigation}
                    text='View questions'
                    navigateTo='Questions' />
            </View>
        );
    }
}