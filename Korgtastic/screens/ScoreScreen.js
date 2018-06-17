import React from 'react';
import { Text, View, SectionList } from 'react-native';

export default class ScoreScreen extends React.Component {

    static navigationOptions = () => ({
        title: 'ScoreScreen',
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
                <Text>ScoreScreen</Text>
            </View>
        );
    }
}