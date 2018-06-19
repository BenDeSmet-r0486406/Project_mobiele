import React from 'react';
import styles from '../styles/Styles.js';
import { Text, View, FlatList, TouchableHighlight, Alert, ScrollView } from 'react-native';

export default class EndScreen extends React.Component {

    static navigationOptions = () => ({
        title: 'Back to the game',
        headerTintColor: '#ffffff',
        headerStyle:
        {
            backgroundColor: '#2c3e50',
        },
    });

    constructor(props) {
		super(props);
        this.state = 
        {
            players : this.props.navigation.state.params.players,
            positions : [],
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
    }

    restartGame = (players) => {
        players.forEach(p => {
            console.log('reset player: ' + p.name);
            p.score = 0;
        });
        this.props.navigation.navigate('Players', {players: players});
    }

    clickRestartButton = (players) => {
        Alert.alert(
            'Restart game',
            'Are you sure you want to restart the game?',
            [
                {text: 'Cancel'},
                {text: 'Restart game', onPress: () => this.restartGame(players)},
            ],
        )
    }

    clickHomeButton = () => {
        Alert.alert(
            'Go to menu',
            'Are you sure you want to quit the game and go to the menu?',
            [
                {text: 'Cancel'},
                {text: 'Go to menu', onPress: () => this.props.navigation.navigate('Home')},
            ],
        )
    }

    render() {
        return(
            <View style={styles.mainView}>
                <View style={styles.scoresHeader}>
                    <Text style={[styles.scoresPositionColumn]}>#</Text>
                    <Text style={styles.scoresNameColumn}>Name</Text>
                    <Text style={styles.scoresPointsColumn}>Score</Text>
                </View>
                <ScrollView style={styles.scoresList}>
                    <FlatList
                        data={this.state.positions}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) =>
                            <View style={styles.scoresItem}>
                                <Text style={styles.scoresPositionColumn}>{item.position}</Text>
                                <Text style={styles.scoresNameColumn}>{item.name}</Text>
                                <Text style={styles.scoresPointsColumn}>{item.score}</Text>
                            </View>
                        }
                    />
                </ScrollView>
                <TouchableHighlight
                    onPress={() => this.clickRestartButton(this.state.players)}
                    style={styles.button}>
                    <Text style={styles.buttonText}>RESTART GAME</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => this.clickHomeButton()}
                    style={styles.button}>
                    <Text style={styles.buttonText}>GO TO MENU</Text>
                </TouchableHighlight>
            </View>
        );
    }
}