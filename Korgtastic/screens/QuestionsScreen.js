import React from 'react';
import styles from '../styles/Styles.js';
import { StyleSheet, Text, View, SectionList, TextInput,ScrollView,TouchableHighlight,Image, ImageBackground} from 'react-native';

export default class QuestionsScreen extends React.Component {

    static navigationOptions = () => ({
        title: 'Question overview',
        headerTintColor: '#ffffff',
        headerStyle:
            {
                backgroundColor: '#000000',
            },

    });

    constructor(props) {
		super(props);
        this.state = 
        {}
    }

    render() {
        return(
            <View>
                <SectionList
                    sections={[
                        {title: 'Difficulty 1', data: ['Vraag 1', 'Vraag 2', 'Vraag 3', 'Vraag 4']},
                        {title: 'Difficulty 2', data: ['Vraag 1', 'Vraag 2', 'Vraag 3', 'Vraag 4']},
                        {title: 'Difficulty 3', data: ['Vraag 1', 'Vraag 2', 'Vraag 3', 'Vraag 4']},
                        {title: 'Difficulty 4', data: ['Vraag 1', 'Vraag 2', 'Vraag 3', 'Vraag 4']},
                        {title: 'Difficulty 5', data: ['Vraag 1', 'Vraag 2', 'Vraag 3', 'Vraag 4']},
                    ]}
                    renderItem={({item}) => <Text style={styles.ListItem}>{item}</Text>}
                    renderSectionHeader={({section}) => <Text style={styles.ListHeader}>{section.title}</Text>}
                    keyExtractor={(item, index) => index}
                />
            </View>
        );
    }
}