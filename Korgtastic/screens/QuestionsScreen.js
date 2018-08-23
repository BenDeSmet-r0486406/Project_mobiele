import React from 'react';
import styles from '../styles/Styles.js';
import { Text, View, SectionList, TouchableHighlight } from 'react-native';
import { FloatingAction } from 'react-native-floating-action';
import opdrachtenData from '../opdrachten/opdrachten.json';

export default class QuestionsScreen extends React.Component {

    static navigationOptions = () => ({
        title: 'Question overview',
        headerTintColor: '#ffffff',
        headerStyle:
        {
            backgroundColor: '#2c3e50',
        },
    });

    constructor(props) {
		super(props);
        this.state = 
        {}
    }
    
    render() {
        const { navigate } = this.props.navigation;
        return(
            <View style={styles.mainView}>
                <SectionList
                    sections={[
                        {title: 'Difficulty level: 1', data: opdrachtenData.graad1},
                        {title: 'Difficulty level: 2', data: opdrachtenData.graad2},
                        {title: 'Difficulty level: 3', data: opdrachtenData.graad3},
                        {title: 'Difficulty level: 4', data: opdrachtenData.graad4},
                        {title: 'Difficulty level: 5', data: opdrachtenData.graad5},
                    ]}
                    renderItem={({item}) => <Text style={styles.listItem}>{item}</Text>}
                    renderSectionHeader={({section}) => <Text style={styles.listHeader}>{section.title}</Text>}
                    keyExtractor={(item, index) => index}
                />
                <TouchableHighlight
                    style={styles.button}
                    onPress={() => navigate("AddQuestion")}
                    underlayColor="#2980b9">
                    <Text style={styles.buttonText}>ADD QUESTION</Text>
                </TouchableHighlight>
            </View>
        );
    }
}