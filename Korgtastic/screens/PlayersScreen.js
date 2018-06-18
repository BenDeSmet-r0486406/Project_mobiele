import React from 'react';
import styles from '../styles/Styles.js';
import { Text, View, TextInput, TouchableHighlight, ScrollView } from 'react-native';
import AppJs from '../App.js';

export default class PlayersScreen extends React.Component {

    static navigationOptions = () => ({
        title: 'PlayerScreen',
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
            playerInput: [],
            playerNames: [],
        }
    }

    componentDidMount() {
        this.addPlayer(0);
        this.addPlayer(1);
    }

    addPlayer = (key) => {
        let playerInput = this.state.playerInput;

        if(playerInput.length < 10) {
            playerInput.push(
                <View style={{marginBottom: 15}} key={key}>
                    <Text style={{fontSize: 16, color: '#555'}}>Player {key + 1}:</Text>
                    <TextInput
                        style={styles.playerInput}
                        onChangeText={name => this.setPlayerName(name, key)} 
                        maxLength={20}/>
                </View>
            );


            this.setState({playerInput});
        }
    }

    removePlayer = (key) => {
        let playerInput = this.state.playerInput;

        if(playerInput.length > 2) {
            playerInput.pop();

            this.setState({playerInput});
        }
    }

    setPlayerName = (name, key) => {
        let playerNames = this.state.playerNames;

        playerNames[key] = {
            name: name,
            score: 0
        };

        this.setState({playerNames});
    }

    goToGame(players){
        console.log('Validation result is ' + this.validatePlayerNames(players));

        if(players.length < 2) {
            alert("Minimum 2 players required.");
        } else if(!this.validatePlayerNames(players)) {
            alert("Please enter valid player names.");
        } else {
            this.props.navigation.navigate("Game", {players : players});
        }
    }

    validatePlayerNames = (players) => {
        let result = true;
        
        players.forEach(function (p) {
            if(!p.name) {
                result =  false;
            }
        });

        return result;
    } 

    render() {
        const { navigate } = this.props.navigation;
        return(
            <View style={{flex: 1}}>
                <View style={{padding: 10}}>
                    <Text style={{fontSize: 24, alignSelf: 'center'}}>Enter your names</Text>
                    <Text style={{alignSelf: 'center'}} >Minimum 2 players, maximum 10.</Text>
                </View>
                <View style={{flex: 5, padding: 10}}>
                    <ScrollView>
                        {this.state.playerInput.map((value, index) => { return value })}

                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', marginLeft: 130, marginRight: 130}}>
                            <TouchableHighlight onPress={() => this.addPlayer(this.state.playerInput.length)}>
                                <Text style={styles.addPlayerButtonIcon}>+</Text>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => this.removePlayer()}>
                                <Text style={styles.addPlayerButtonIcon}>-</Text>
                            </TouchableHighlight>
                        </View>
                    </ScrollView>
                </View>
                <View>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => this.goToGame(this.state.playerNames)}>
                        <Text style={styles.buttonText}>START GAME</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}