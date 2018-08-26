import React from 'react';
import styles from '../styles/Styles.js';
import { Text, View, TouchableHighlight, AsyncStorage, Alert } from 'react-native';

export default class GameScreen extends React.Component {

    static navigationOptions = () => ({
        header: null,
    });

    constructor(props) {
        super(props);
        

        this.state = 
        {
            players : this.props.navigation.state.params.players,
            turn : 0,
            opdracht : "",
            graad : 0,
            opdrachtenGraad1 : [],
            opdrachtenGraad2 : [],
            opdrachtenGraad3 : [],
            opdrachtenGraad4 : [],
            opdrachtenGraad5 : [],
            isLoading: true,
            OpdrachtenList : ""
        }
    }

    componentDidMount = async () =>  {
        while (this.state.isLoading){
            try{
                let opdrachtjes = await AsyncStorage.getItem('opdrachten');
                this.setState({OpdrachtenList : opdrachtjes});
                let parsed = JSON.parse(opdrachtjes);
                this.setState({opdrachtenGraad1 : parsed.graad1});
                this.setState({opdrachtenGraad2 : parsed.graad2});
                this.setState({opdrachtenGraad3 : parsed.graad3});
                this.setState({opdrachtenGraad4 : parsed.graad4});
                this.setState({opdrachtenGraad5 : parsed.graad5});
                this.setState({isLoading : false});
                newQuestion = this.randomOpdracht('none');
                this.setState({opdracht : newQuestion.opdracht});
                this.setState({graad : newQuestion.graad})
            }
            catch (error){
                alert(error);
            }
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
                newOpdracht = this.state.opdrachtenGraad1[Math.floor(Math.random() * this.state.opdrachtenGraad1.length)];
                newGraad = 1;
            } else if(rand > 30 && rand <= 55 ){
                newOpdracht = this.state.opdrachtenGraad2[Math.floor(Math.random() * this.state.opdrachtenGraad2.length)];
                newGraad = 2;
            } else if(rand > 55 && rand <= 75 ){
                newOpdracht = this.state.opdrachtenGraad3[Math.floor(Math.random() * this.state.opdrachtenGraad3.length)];
                newGraad = 3;
            } else if(rand > 75 && rand <= 90 ){
                newOpdracht = this.state.opdrachtenGraad4[Math.floor(Math.random() * this.state.opdrachtenGraad4.length)];
                newGraad = 4;
            } else if(rand > 90 && rand <= 100 ){
                newOpdracht = this.state.opdrachtenGraad5[Math.floor(Math.random() * this.state.opdrachtenGraad5.length)];
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
        if (this.state.isLoading) {
            return  <View style={styles.questionView}><Text style={styles.questionText}>Loading...</Text></View>;
        }
        return(
            <View style={{flex: 1}}>
                <View style={styles.scoreBoardView}>
                    <Text style={styles.scoreBoardTextContainer}>
                        <Text style={styles.scoreBoardText}>{player.name}: {player.score} points</Text>
                    </Text>
                    <TouchableHighlight
                        onPress={() => this.goToEndGame(players)}
                        style={styles.scoreBoardButton}
                        underlayColor='#2980b9'>
                        <Text style={styles.scoreBoardButtonText}>ScoreBoard</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.mainView}>
                    <View style={styles.topInfo}>
                        <Text style={[styles.topInfoText, styles.topInfoTitle]}>{player.name}</Text>
                        <Text style={styles.topInfoText}>it's your turn!</Text>                    
                    </View>
                    <View style={styles.questionView}>
                        <Text style={styles.questionText}>{opdracht}</Text>
                    </View>
                    <TouchableHighlight
                        style={[styles.button, styles.acceptButton]}
                        onPress={() => this.acceptChallenge()}
                        underlayColor='#27ae60'>
                        <Text style={styles.buttonText}>DO IT + {graad}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={[styles.button, styles.refuseButton]}
                        onPress={() => this.denyChallenge()}
                        underlayColor='#c0392b'>
                        <Text style={styles.buttonText}>REFUSE - {graad}</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}