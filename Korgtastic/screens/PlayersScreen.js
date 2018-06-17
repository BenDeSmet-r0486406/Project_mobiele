import React from 'react';
import { Text, View, SectionList } from 'react-native';

export default class PlayersScreen extends React.Component {

    static navigationOptions = () => ({
        title: 'Endscreen',
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
                <Text>PlayersScreen</Text>
            </View>
        );
    }
}