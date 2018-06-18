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

    constructor(props) {
		super(props);
        this.state = 
        {
            players: [
                {
                    name: 'Ben',
                    score: 50,
                },
                {
                    name: 'Wouter',
                    score: 20,
                },
                {
                    name: 'Trump',
                    score: 150,
                },
            ]
        }
    }

    componentDidMount() {
        this.sortPlayers();
    }

    sortPlayers = () => {
        var players = this.state.players;

        players.sort(function(a, b) {
            return b.score - a.score;
        });

        console.log(players);

        this.setState({players});
    }

    render() {
        return(
            <View>
                <Text>Winner: {this.state.players[0].name}</Text>
            </View>
        );
    }
}