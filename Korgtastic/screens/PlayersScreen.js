import React from 'react';
import styles from '../styles/Styles.js';
import { Text, View, TextInput, TouchableHighlight, ScrollView } from 'react-native';

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
            playerInput: []
        }

        this.addPlayerInput(0);
        this.addPlayerInput(1);
    }

    addPlayerInput = (key) => {
        let playerInput = this.state.playerInput;
        
        if(playerInput.length < 10) {
            playerInput.push(
                <View style={{marginBottom: 15}}>
                    <Text style={{fontSize: 16, color: '#555'}}>Player {key + 1}:</Text>
                    <TextInput style={styles.playerInput} />
                </View>
            );
            this.setState({playerInput});
        }
    }

    removePlayerInput = (key) => {
        let playerInput = this.state.playerInput;

        if(playerInput.length > 2) {
            playerInput.pop();
            this.setState({playerInput});
        }
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
                            <TouchableHighlight onPress={() => this.addPlayerInput(this.state.playerInput.length)}>
                                <Text style={styles.addPlayerButtonIcon}>+</Text>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => this.removePlayerInput()}>
                                <Text style={styles.addPlayerButtonIcon}>-</Text>
                            </TouchableHighlight>
                        </View>
                    </ScrollView>
                </View>
                <View>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => navigate('Game')}>
                        <Text style={styles.buttonText}>START GAME</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}