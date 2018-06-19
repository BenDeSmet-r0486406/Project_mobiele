import React from 'react';
import styles from '../styles/Styles.js';
import { Text, View, SectionList } from 'react-native';
import opdrachtenData from '../opdrachten/opdrachten.json';

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
                        {title: 'Difficulty 1', data: opdrachtenData.graad1},
                        {title: 'Difficulty 2', data: opdrachtenData.graad2},
                        {title: 'Difficulty 3', data: opdrachtenData.graad3},
                        {title: 'Difficulty 4', data: opdrachtenData.graad4},
                        {title: 'Difficulty 5', data: opdrachtenData.graad5},
                    ]}
                    renderItem={({item}) => <Text style={styles.listItem}>{item}</Text>}
                    renderSectionHeader={({section}) => <Text style={styles.listHeader}>{section.title}</Text>}
                    keyExtractor={(item, index) => index}
                />
            </View>
        );
    }
}