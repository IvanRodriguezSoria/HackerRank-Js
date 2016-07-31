//////////////////////////////////////////////////////////////////
// react-tap-event-plugin provides onTouchTap() to all React
// Components. It's a mobile-friendly onClick() alternative for
// components in Material-UI, especially useful for the buttons.
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
// This is the main class for the app.
// Import statements.
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blueGrey700, blueGrey100} from 'material-ui/styles/colors';
import DrawerMenu from './DrawerMenu.jsx';
import PrincipalWindow from './PrincipalWindow.jsx';

// Custom theme.
const muiTheme = getMuiTheme({
    fontFamily: 'Roboto, sans-serif',
    palette: {
        primary1Color: blueGrey700,
        primary2Color: blueGrey700,
        /*primary3Color: grey400,
        accent1Color: pinkA200,
        accent2Color: grey100,
        accent3Color: grey500,
        textColor: darkBlack,
        alternateTextColor: white,*/
        canvasColor: blueGrey100,
        /*borderColor: grey300,
        disabledColor: fade(darkBlack, 0.3),
        pickerHeaderColor: cyan500,
        clockCircleColor: fade(darkBlack, 0.07),
        shadowColor: fullBlack,*/
    },
});

// Main class.
export default class HackerRank extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isDrawerOpen: false};
    }

    handleToggle = (event) => this.setState({isDrawerOpen: !this.state.isDrawerOpen});

    render() {
        return(
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <DrawerMenu isDrawerOpen={this.state.isDrawerOpen} handleToggle={this.handleToggle} />
                    <PrincipalWindow handleToggle={this.handleToggle} />
                </div>
            </MuiThemeProvider>
        );
    }
}
//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
// Method that renders the view.
ReactDOM.render(<HackerRank />, document.getElementById('app'));
//////////////////////////////////////////////////////////////////
