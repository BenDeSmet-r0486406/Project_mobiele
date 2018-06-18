import React from 'react';
import styles from '../styles/Styles.js';
import { Text, View, FlatList, TouchableHighlight } from 'react-native';

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
            positions: [
                {
                    name: 'Trump',
                    score: 150,
                    position: 1,
                },
                {
                    name: 'Ben',
                    score: 50,
                    position: 2,
                },
                {
                    name: 'Wouter',
                    score: 20,
                    position: 3,
                },
                {
                    name: 'Cedric',
                    score: 20,
                    position: 3,
                },
            ],
        }
    }

    render() {
        let winner = this.state.positions[0];
        this.state.positions.shift();

        return(

            <View style={{flex: 1}}>
                <View style={{flex: 2, padding: 20}}>
                    <Text style={{fontSize: 24, alignSelf: 'center'}}>Winner:</Text>
                    <Text style={{fontSize: 42, alignSelf: 'center'}}>{winner.name}</Text>
                </View>
                <View style={{flex: 6, padding: 20}}>
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
                <View style={styles.buttonsView}>
                    <TouchableHighlight
                        style={styles.button}>
                        <Text style={styles.buttonText}>PLAY AGAIN</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}>
                        <Text style={styles.buttonText}>GO TO MENU</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}