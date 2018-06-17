import React from 'react';
import styles from '../styles/Styles.js';
import { StyleSheet, Text, View,ScrollView, Button, TouchableHighlight} from 'react-native';
import opdrachtenData from '../opdrachten/Normal.json';

export default class GameScreen extends React.Component {

    static navigationOptions = () => ({
        title: 'Score: 10',
        headerTintColor: '#ffffff',
        headerStyle:
            {
                backgroundColor: '#333',
            },

    });

    constructor(props) {
		super(props);
        this.state = 
        {
            Opdracht : "First things first, everybody take a sip of your glass to get started",
            Graad : 1
        }
        this.randomOpdracht = this.randomOpdracht.bind(this);
    }

    randomOpdracht(){
        var newOpdracht = "";
        var newGraad = 0;

        var rand = 1 + Math.random() * (100 - 1);
        rand = Math.floor(rand);

        console.log(rand);

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
    }

    render() {
        return(
            <View style={{flex: 1}}>
                <View style={styles.QuestionView}>
                    <Text style={styles.QuestionText}>{this.state.Opdracht}</Text>
                </View>
                <View style={styles.ButtonsView}>
                    <TouchableHighlight
                        style={[styles.acceptButton]}
                        onPress={this.randomOpdracht}>
                        <Text style={styles.ButtonText}>DO IT</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={[styles.refuseButton]}
                        onPress={this.randomOpdracht}>
                        <Text style={styles.ButtonText}>DRINK {this.state.Graad} SIPS</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}