import React from 'react';
import styles from '../styles/Styles.js';
import { Text, View, TouchableHighlight } from 'react-native';
import opdrachtenData from '../opdrachten/Normal.json';

export default class GameScreen extends React.Component {

    static navigationOptions = () => ({
        header: null,
    });

    constructor(props) {
		super(props);
        this.state = 
        {
            playerNames : this.props.navigation.state.params.players,
            Opdracht : "First things first, everybody take a sip of your glass to get started",
            Graad : 1,
            Score: 0,
            turn: 0,
        }
        this.acceptChallenge = this.acceptChallenge.bind(this);
        this.denyChallenge = this.denyChallenge.bind(this);
        this.randomOpdracht = this.randomOpdracht.bind(this);
    }

    

    acceptChallenge() {
        var newScore = this.state.playerNames[this.state.turn].score + this.state.Graad
        var newPlayers = this.state.playerNames
        newPlayers[this.state.turn].score = newScore;
        this.setState({playerNames : newPlayers});
        this.randomOpdracht();
    }

    denyChallenge() {
        var newScore = this.state.playerNames[this.state.turn].score - this.state.Graad
        var newPlayers = this.state.playerNames
        newPlayers[this.state.turn].score = newScore;
        this.setState({playerNames : newPlayers});
        this.randomOpdracht();
    }

    randomOpdracht() {
        var newOpdracht = "";
        var newGraad = 0;

        var rand = 1 + Math.random() * (100 - 1);
        rand = Math.floor(rand);

        if(rand <= 30){
            newOpdracht = opdrachtenData.graad1[Math.floor(Math.random() * opdrachtenData.graad1.length)];
            this.setState({Graad : 1 });
        } else if(rand > 30 && rand <= 55 ){
            newOpdracht = opdrachtenData.graad2[Math.floor(Math.random() * opdrachtenData.graad2.length)];
            this.setState({Graad : 2 });
        } else if(rand > 55 && rand <= 75 ){
            newOpdracht = opdrachtenData.graad3[Math.floor(Math.random() * opdrachtenData.graad3.length)];
            this.setState({Graad : 3 });
        } else if(rand > 75 && rand <= 90 ){
            newOpdracht = opdrachtenData.graad4[Math.floor(Math.random() * opdrachtenData.graad4.length)];
            this.setState({Graad : 4 });
        } else if(rand > 90 && rand <= 100 ){
            newOpdracht = opdrachtenData.graad5[Math.floor(Math.random() * opdrachtenData.graad5.length)];
            this.setState({Graad : 5 });
        }

        if(this.state.Opdracht == newOpdracht){
            this.randomOpdracht
        } else {
            this.setState({Opdracht : newOpdracht});
        }
        var newTurn = (this.state.turn + 1) % this.state.playerNames.length;
        this.setState({turn : newTurn});
    }

    goToEndGame(players){
        this.props.navigation.navigate("End", {players : players})
    }

    render() {
        return(
            <View style={{flex: 1}}>
                <View style={styles.scoreBoardView}>
                    <Text style={styles.scoreBoardNameText}>{this.state.playerNames[this.state.turn].name} : {this.state.playerNames[this.state.turn].score}</Text>
                    <TouchableHighlight
                        onPress={() => this.goToEndGame(this.state.playerNames)}>
                        <Text style={styles.scoreBoardText}>ScoreBoard</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.questionView}>
                    <Text style={styles.questionText}>{this.state.Opdracht}</Text>
                </View>
                <View style={styles.buttonsView}>
                    <TouchableHighlight
                        style={styles.acceptButton}
                        onPress={this.acceptChallenge}>
                        <Text style={styles.buttonText}>DO IT + {this.state.Graad}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.refuseButton}
                        onPress={this.denyChallenge}>
                        <Text style={styles.buttonText}>REFUSE - {this.state.Graad}</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}