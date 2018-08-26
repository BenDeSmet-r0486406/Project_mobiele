import React from 'react';
import styles from '../styles/Styles.js';
import { Text, View, SectionList, TouchableHighlight, TouchableOpacity, Image, Alert , AsyncStorage} from 'react-native';
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
        {
            isLoading: true,
            OpdrachtenList : "",
            opdrachtenGraad1 : [],
            opdrachtenGraad2 : [],
            opdrachtenGraad3 : [],
            opdrachtenGraad4 : [],
            opdrachtenGraad5 : [],
        }
    }

    clickDeleteButton = () => {
        Alert.alert(
            'Delete question',
            'Are you sure you want to delete this question?',
            [
                {text: 'Cancel'},
                {text: 'Delete question', onPress: () => this.deleteQuestion()},
            ],
        )
    }

    deleteQuestion = (item) => {
        //TO DO
    }

    componentDidMount = async () =>  {
        while (this.state.isLoading){
            try{
                let opdrachtjes = await AsyncStorage.getItem('opdrachten');
                this.setState({OpdrachtenList : opdrachtjes});
                let parsed = JSON.parse(opdrachtjes);
                this.setState({opdrachtenGraad1 : parsed.graad1});
                this.setState({opdrachtenGraad2 : parsed.graad2});
                this.setState({opdrachtenGraad3 : parsed.graad3});
                this.setState({opdrachtenGraad4 : parsed.graad4});
                this.setState({opdrachtenGraad5 : parsed.graad5});
                this.setState({isLoading : false});
            }
            catch (error){
                alert(error);
            }
        }
    }
    
    render() {
        const { navigate } = this.props.navigation;
        if (this.state.isLoading) {
            return <View><Text>Loading...</Text></View>;
        }
        return(
            <View style={styles.mainView}>
                <SectionList
                    sections={[
                        {title: 'Difficulty level: 1', data: this.state.opdrachtenGraad1},
                        {title: 'Difficulty level: 2', data: this.state.opdrachtenGraad2},
                        {title: 'Difficulty level: 3', data: this.state.opdrachtenGraad3},
                        {title: 'Difficulty level: 4', data: this.state.opdrachtenGraad4},
                        {title: 'Difficulty level: 5', data: this.state.opdrachtenGraad5},
                    ]}
                    renderItem={({item}) => 
                        <View style={styles.listItem}>
                            <Text style={styles.listText}>{item}</Text>
                            <TouchableOpacity
                                style={styles.listIcon}
                                onPress={() => this.clickDeleteButton({item})}>
                                <Image source={require('../img/trash.png')} style={styles.listIconImage} />
                            </TouchableOpacity>
                        </View>
                    }
                    renderSectionHeader={({section}) => <Text style={styles.listHeader}>{section.title}</Text>}
                    keyExtractor={(item, index) => index}
                />
            </View>
        );
    }
}