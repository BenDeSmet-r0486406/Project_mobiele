import React from 'react';
import styles from '../styles/Styles.js';
import { Text, View, TouchableHighlight, Image, TextInput, Picker } from 'react-native';
import opdrachtenData from '../opdrachten/opdrachten.json';


/* aan opdrachten dat binnen halen, opdrachtendata.graadx[] question toevoegen en overschrijven */
export default class AddQuestionScreen extends React.Component {

    static navigationOptions = () => ({
        title: 'New question',
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
            category : "1",
            question : "",
        }
    }


    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.mainView}>
                <View style={{flex:1}}>
                    <View style={styles.inputView}>
                        <Text style={styles.inputLabel}>Question:</Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={question => this.setState({question: question})} 
                            maxLength={20}/>
                    </View>
                    
                    <View style={styles.inputView}>
                        <Text style={styles.inputLabel}>Difficulty level:</Text>
                        <Picker selectedValue = {this.state.category} onValueChange = {(itemValue, itemIndex) => this.setState({category: itemValue})}>
                            <Picker.Item label = "1" value = "1" />
                            <Picker.Item label = "2" value = "2" />
                            <Picker.Item label = "3" value = "3" />
                            <Picker.Item label = "4" value = "4" />
                            <Picker.Item label = "5" value = "5" />
                        </Picker>
                    </View>
                </View>
                <TouchableHighlight
                    style={styles.button}
                    onPress={() => navigate("AddQuestion")}
                    underlayColor="#2980b9">
                    <Text style={styles.buttonText}>SAVE QUESTION</Text>
                </TouchableHighlight>
            </View>
        );
    }
}