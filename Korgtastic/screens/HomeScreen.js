import React from 'react';
import styles from '../styles/Styles.js';
import { StyleSheet, Text, View,TextInput,ScrollView,TouchableHighlight,Image, ImageBackground} from 'react-native';

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
        return(
            <View>
                <Text style={styles.TestText}>TEST TESTT</Text>
            </View>
        );
    }
}