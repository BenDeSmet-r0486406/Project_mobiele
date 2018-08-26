import React from 'react';
import styles from '../styles/Styles.js';
import { Text, View, TouchableHighlight, Image, TextInput, Picker, AsyncStorage , Alert} from 'react-native';
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

    addQuestion = async () => {
        try{
            let opdrachtentemp = await AsyncStorage.getItem('opdrachten');
            let parsed =  JSON.parse(opdrachtentemp);
        
            let cat1 = [];
            cat1 = parsed.graad1;
            let cat2 = [];
            cat2 = parsed.graad2;
            let cat3 = [];
            cat3 = parsed.graad3;
            let cat4 = [];
            cat4 = parsed.graad4;
            let cat5 = [];
            cat5 = parsed.graad5;
            if (this.state.category == "1"){
                cat1.push(this.state.question);
                Alert.alert(cat1[cat1.length - 1])
            }else if (this.state.category == "2"){
                cat2.push(this.state.question);
            }else if (this.state.category == "3"){
                cat3.push(this.state.question);
                Alert.alert(cat3[cat3.length - 1] +", "+ this.state.question+", "+ this.state.category)
            }else if (this.state.category == "4"){
                cat4.push(this.state.question);
            }else if (this.state.category == "5"){
                cat5.push(this.state.question);
            }else{
                Alert.alert(
                    'Something wen wrong',
                    'There is no category given',
                    [
                        {text: 'Ok I will try again'},
                    ],
                )
            }

            let opdrachten = {
                "graad1" : cat1 ,
                "graad2" : cat2 ,
                "graad3" : cat3 ,
                "graad4" : cat4 ,
                "graad5" : cat5 ,
            }

            AsyncStorage.setItem('opdrachten', JSON.stringify(opdrachten));
            
        }catch (error){
            alert(error);
        }
        const { navigate } = this.props.navigation;
        navigate("Home")
    }

    displayOpdrachten = async () => {
        try{
            let opdrachten = await AsyncStorage.getItem('opdrachten');
            let parsed =  JSON.parse(opdrachten);
            alert(parsed.graad2);
        }catch (error){
            alert(error);
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
                    onPress={() => this.displayOpdrachten()}
                    underlayColor="#2980b9">
                    <Text style={styles.buttonText}>Display</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.button}
                    onPress={() => this.addQuestion()}
                    underlayColor="#2980b9">
                    <Text style={styles.buttonText}>SAVE QUESTION</Text>
                </TouchableHighlight>
            </View>
        );
    }
}