import React from 'react';
import styles from '../styles/Styles.js';
import { Text, View, TouchableHighlight } from 'react-native';
import opdrachtenData from '../opdrachten/opdrachten.json';

export default class GameScreen extends React.Component {

    static navigationOptions = () => ({
        header: null,
    });

    constructor(props) {
        super(props);
        
        let newOpdracht = this.randomOpdracht('none');

        this.state = 
        {
            players : this.props.navigation.state.params.players,
            turn : 0,
            opdracht : newOpdracht.opdracht,
            graad : newOpdracht.graad, 
        }

    }

    acceptChallenge = () => {
        this.nextPlayer(1);
    }

    denyChallenge = () => {
        this.nextPlayer(-1);
    }

    nextPlayer = (factor) => {
        // Assign new score to last player
        var newScore = this.state.players[this.state.turn].score + (this.state.graad * factor);

        var newPlayers = this.state.players
        newPlayers[this.state.turn].score = newScore;
        this.setState({players : newPlayers});

        // Get the next player
        let newTurn = (this.state.turn + 1) % this.state.players.length;
        this.setState({turn : newTurn});

        // Get a new opdracht and graad
        let newOpdracht = this.randomOpdracht(this.state.opdracht);
        this.setState({opdracht : newOpdracht.opdracht});
        this.setState({graad : newOpdracht.graad})
    }

    randomOpdracht = (lastOpdracht) => {
        let newOpdracht = "";
        let newGraad = 0;

        do {
            let rand = 1 + Math.random() * (100 - 1);
            rand = Math.floor(rand);

            if(rand <= 30){
                newOpdracht = opdrachtenData.graad1[Math.floor(Math.random() * opdrachtenData.graad1.length)];
                newGraad = 1;
            } else if(rand > 30 && rand <= 55 ){
                newOpdracht = opdrachtenData.graad2[Math.floor(Math.random() * opdrachtenData.graad2.length)];
                newGraad = 2;
            } else if(rand > 55 && rand <= 75 ){
                newOpdracht = opdrachtenData.graad3[Math.floor(Math.random() * opdrachtenData.graad3.length)];
                newGraad = 3;
            } else if(rand > 75 && rand <= 90 ){
                newOpdracht = opdrachtenData.graad4[Math.floor(Math.random() * opdrachtenData.graad4.length)];
                newGraad = 4;
            } else if(rand > 90 && rand <= 100 ){
                newOpdracht = opdrachtenData.graad5[Math.floor(Math.random() * opdrachtenData.graad5.length)];
                newGraad = 5;
            }
        } while (lastOpdracht == newOpdracht);
        
        return {
            opdracht: newOpdracht,
            graad: newGraad,
        };
    }

    goToEndGame(players){
        this.props.navigation.navigate("End", {players : players})
    }

    render() {
        let players = this.state.players;
        let player = players[this.state.turn];
        let opdracht = this.state.opdracht;
        let graad = this.state.graad;

        return(
            <View style={{flex: 1}}>
                <View style={styles.scoreBoardView}>
                    <Text style={styles.scoreBoardNameText}>{player.name} : {player.score}</Text>
                    <TouchableHighlight
                        onPress={() => this.goToEndGame(players)}>
                        <Text style={styles.scoreBoardText}>ScoreBoard</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.questionView}>
                    <Text style={styles.questionText}>{opdracht}</Text>
                </View>
                <View style={styles.buttonsView}>
                    <TouchableHighlight
                        style={styles.acceptButton}
                        onPress={() => this.acceptChallenge()}>
                        <Text style={styles.buttonText}>DO IT + {graad}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.refuseButton}
                        onPress={() => this.denyChallenge()}>
                        <Text style={styles.buttonText}>REFUSE - {graad}</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}