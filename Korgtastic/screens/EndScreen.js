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
                    name: 'Cedric',
                    score: 20,
                },
                {
                    name: 'Trump',
                    score: 150,
                },
            ],
            positions: [],
        }
    }

    componentDidMount() {
        this.sortPlayers();
        this.calculatePositions();
    }

    sortPlayers = () => {
        let players = this.state.players;

        players.sort(function(a, b) {
            return b.score - a.score;
        });

        this.setState({players});
    }

    calculatePositions = () => {
        let players = this.state.players;
        let positions = this.state.positions;

        let position = 1;

        positions.push({
            name: players[0].name,
            score: players[0].score,
            position: position,
        });

        for(let i = 1; i < players.length; i++) {
            if(players[i - 1].score > players[i].score) {
                position++;
            }

            positions.push({
                name: players[i].name,
                score: players[i].score,
                position: position,
            });
        }

        console.log(positions);
    }

    render() {
        return(
            <View>
                <Text>Winner: {this.state.players[0].name}</Text>
            </View>
        );
    }
}