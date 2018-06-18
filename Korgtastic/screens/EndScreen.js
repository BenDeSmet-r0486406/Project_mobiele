import React from 'react';
import styles from '../styles/Styles.js';
import { Text, View, FlatList, TouchableHighlight } from 'react-native';

export default class EndScreen extends React.Component {

    static navigationOptions = () => ({
        title: 'Back to the game',
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
            players : this.props.navigation.state.params.players
        }
    }

    render() {

        return(
            <View style={{flex: 1}}>
                <View style={{flex: 2, padding: 20}}>
                    <Text style={{fontSize: 24, alignSelf: 'center'}}>Winner:</Text>
                </View>
                <View style={{flex: 6, padding: 20}}>
                    <FlatList
                        data={this.state.players}
                        keyExtractor={(item, index) => item.name}
                        renderItem={({item}) =>
                            <View style={{flexDirection: 'row', height: 50}}>
                                <Text style={{flex: 5, fontSize: 18}}>{item.name}</Text>
                                <Text style={{flex: 2, fontSize: 18}}>{item.score}</Text>
                            </View>
                        }
                    />
                </View>
                <View style={styles.buttonsView}>
                    <TouchableHighlight
                        style={styles.button}>
                        <Text style={styles.buttonText}>RESTART (naar playersScreen)</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}>
                        <Text style={styles.buttonText}>END GAME (naarhomescreen)</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}