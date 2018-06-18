import React from 'react';
import styles from '../styles/Styles.js';
import { Text, View, FlatList } from 'react-native';

export default class ScoreScreen extends React.Component {

    static navigationOptions = () => ({
        title: 'Scoreboard',
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
            <View style={{flex: 1}}>
                <View style={{flex: 1, flexDirection: 'row', backgroundColor: '#333', padding: 20}}>
                    <Text style={{flex: 1, color: 'white', fontSize: 20}}>#</Text>
                    <Text style={{flex: 5, color: 'white', fontSize: 20}}>Name</Text>
                    <Text style={{flex: 2, color: 'white', fontSize: 20}}>Score</Text>
                </View>
                <View style={{flex: 20, padding: 20}}>
                    <FlatList
                        data={this.state.positions}
                        keyExtractor={(item, index) => item.name}
                        renderItem={({item}) =>
                            <View style={{flexDirection: 'row', height: 50}}>
                                <Text style={{flex: 1, fontSize: 18}}>{item.position}</Text>
                                <Text style={{flex: 5, fontSize: 18}}>{item.name}</Text>
                                <Text style={{flex: 2, fontSize: 18}}>{item.score}</Text>
                            </View>
                        }
                    />
                </View>
            </View>
        );
    }
}