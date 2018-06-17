import React from 'react';
import styles from '../styles/Styles.js';
import { StyleSheet, Text, View,ScrollView, Button} from 'react-native';
import CustomButton from '../components/CustomButton.js';
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
            Graad : 0
        }
        this.randomOpdracht = this.randomOpdracht.bind(this);
    }

    componentDidMount(){
    }


    randomOpdracht(){
        this.setState({Opdracht : opdrachtenData.graad1[0] })
    }

    render() {
        return(
            <View style={{flex: 1}}>
                <View style={styles.QuestionView}>
                    <Text style={styles.QuestionText}>{this.state.Opdracht}</Text>
                </View>
                <View style={styles.ButtonsView}>
                    <Button
                        onPress={this.randomOpdracht }
                        title='Do it'
                        color='#2ecc71' />
                    <Button
                        onPress={this.randomOpdracht}
                        title='Refuse'
                        color='#e74c3c' />
                </View>
            </View>
        );
    }
}