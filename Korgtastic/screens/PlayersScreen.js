import React from 'react';
import styles from '../styles/Styles.js';
import { Text, View, TextInput, TouchableHighlight, TouchableOpacity, ScrollView, Alert } from 'react-native';

export default class PlayersScreen extends React.Component {

    static navigationOptions = () => ({
        title: 'Add players',
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
            playerTextInputs: [],
            players: this.props.navigation.state.params.players,
        }
    }

    componentDidMount() {
        this.addPlayer(0);
        this.addPlayer(1);
    }


    addPlayer = (key) => {
        let playerTextInputs = this.state.playerTextInputs;

        if(playerTextInputs.length < 10) {
            playerTextInputs.push(
                <View style={styles.playerInputView} key={key}>
                    <Text style={styles.playerInputLabel}>Player {key + 1}:</Text>
                    <TextInput
                        style={styles.playerTextInput}
                        onChangeText={name => this.setPlayerName(name, key)} 
                        maxLength={20}/>
                </View>
            );

            this.setState({playerTextInputs});
        }
    }

    removePlayer = (key) => {
        let playerTextInputs = this.state.playerTextInputs;

        if(playerTextInputs.length > 2) {
            playerTextInputs.pop();

            this.setState({playerTextInputs});
        }
    }

    setPlayerName = (name, key) => {
        let players = this.state.players;

        players[key] = {
            name: name.trim(),
            score: 0,
        };

        this.setState({players});
    }

    goToGame(players){
        if(players.length < 2) {
            
            Alert.alert('Add players', "At least 2 players are required to play this game.");
        } else if(!this.validatePlayerNames(players)) {
            Alert.alert('Invalid playernames', 'Please enter valid playernames (not empty, max. 20 characters).');
        } else {
            this.props.navigation.navigate("Game", {players : players});
            this.setState({});
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
            <View style={styles.mainView}>
                <View style={styles.topInfo}>
                    <Text style={[styles.topInfoText, styles.topInfoTitle]}>Enter your names</Text>
                    <Text style={styles.topInfoText} >Minimum 2 players, maximum 10.</Text>
                </View>
                <View style={{flex: 1}}>
                    <ScrollView
                        ref={ref => this.scrollView = ref}
                        onContentSizeChange={(contentWidth, contentHeight)=>{        
                            this.scrollView.scrollToEnd({animated: true});
                        }}
                    >
                        {this.state.playerTextInputs.map((value, index) => { return value })}

                        <View style={styles.playerInputButtonsView}>
                            <TouchableOpacity onPress={() => this.addPlayer(this.state.playerTextInputs.length)}>
                                <Text style={styles.playerInputButtonIcon}>+</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.removePlayer()}>
                                <Text style={styles.playerInputButtonIcon}>-</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
                <TouchableHighlight
                    style={styles.button}
                    onPress={() => this.goToGame(this.state.players)}
                    underlayColor="#2980b9">
                    <Text style={styles.buttonText}>START GAME</Text>
                </TouchableHighlight>
            </View>
        );
    }
}