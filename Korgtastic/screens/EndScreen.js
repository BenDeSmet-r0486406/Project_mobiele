import React from 'react';
import styles from '../styles/Styles.js';
import { Text, View, SectionList } from 'react-native';

export default class EndScreen extends React.Component {

    static navigationOptions = () => ({
        title: 'Endscreen',
        headerTintColor: '#ffffff',
        headerStyle:
            {
                backgroundColor: '#000000',
            },

    });

    render() {
        return(
            <View>
                <Text>Winner: </Text>
            </View>
        );
    }
}