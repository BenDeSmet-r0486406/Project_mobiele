import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

var styles = StyleSheet.create({
    /* ALGEMEEN */
    
    button:
    {
        backgroundColor: '#3498db',
        padding: responsiveWidth(2.75),
        marginTop: responsiveWidth(3),
    },
    buttonText:
    {
        color: 'white',
        textAlign: 'center',
        fontWeight: '400',
        fontSize: responsiveFontSize(3.1),
    },
    mainView: 
    {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        padding: responsiveWidth(3),
    },
    topInfo:
    {
        backgroundColor: '#DADAE4',
        padding: responsiveWidth(2),
        marginBottom: responsiveHeight(4),
    },
    topInfoText: {
        alignSelf: 'center',
    },
    topInfoTitle: {
        fontSize: responsiveFontSize(3),
    },

    /* HOMESCREEN*/
    logoImage:
    {
        flex: 1, 
        alignSelf: 'center',
        alignSelf: 'stretch',
        width: undefined,
        height: undefined,
        margin: 25,
    },

    /* PLAYERSSCREEN */

    playerInputButtonsView:
    {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginLeft: 130,
        marginRight: 130
    },
    playerInputButtonIcon:
    {
        fontSize: responsiveFontSize(8),
        color: '#999',
        alignSelf: 'center',
    },
    playerInputView:
    {
        marginBottom: 15,
    },
    playerInputLabel: {
        fontSize: responsiveFontSize(2),
        color: '#555',
    },
    playerTextInput:
    {
        height: 50,
        fontSize: responsiveFontSize(2.7),
    },

    /* GAMESCREEN */
    scoreBoardView:
    {
        paddingTop : 35,
        paddingBottom : 12,
        paddingLeft: 16,
        paddingRight: 16,
        flexDirection : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    scoreBoardText: {
        color: 'white',
        fontSize: 18,
    },
    scoreBoardButton: {
        backgroundColor: '#3498db',
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        paddingTop: 5,
    },
    scoreBoardButtonText: {
        color: 'white',
        fontSize: 18,
    },
    questionView:
    {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    questionText:
    {
        fontSize: responsiveFontSize(3.75),
        flex: 1,
        textAlign: 'center',
        color: '#2c3e50',
    },
    refuseButton:
    {
        backgroundColor: '#e74c3c',
    },
    acceptButton:
    {
        backgroundColor: '#2ecc71',
    },

    /* ENDSCREEN */

    scoresHeader: {
        flexDirection: 'row', 
        backgroundColor: '#DADAE4',
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 12,
        paddingBottom: 12,
    },
    scoresList: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 12,
        paddingBottom: 12,
        marginTop: 12,
    },
    scoresItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
    },
    scoresPositionColumn: {
        flex: 1,
        fontSize: 18,
    },
    scoresNameColumn: {
        flex: 7,
        fontSize: 18,
    },
    scoresPointsColumn: {
        flex: 2,
        fontSize: 18,
    },

    /* QUESTIONSSCREEN */
    listHeader:
    {
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 16,
        paddingRight: 16,
        fontSize: 24,
        fontWeight: 'bold',
    },
    listItem:
    {
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 16,
        fontSize: 18,
        backgroundColor: '#fefefe',
    },
});
module.exports = styles;