import React from 'react';
import styles from '../styles/Styles.js';
import { StyleSheet, Text, View, TextInput,ScrollView,TouchableHighlight,Image, ImageBackground} from 'react-native';

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
            <View style={styles.HomeView}>
                <Text style={styles.TestText}>TEST TESTT</Text>
                <TouchableHighlight
                    onPress={() => navigate('Game')}
                    style={styles.Button}>
                    <Text style={styles.ButtonText}>Start game</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => navigate('Questions')}
                    style={styles.Button}>
                    <Text style={styles.ButtonText}>View questions</Text>
                </TouchableHighlight>
            </View>
        );
    }
}