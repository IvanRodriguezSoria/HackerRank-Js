import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import HoverImage from './HoverImage.jsx';
import BackgroundVideo from './BackgroundVideo.jsx';

const appBarStyle = {
    position: "fixed",
    top: 0,
};

export default class PrincipalWindow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <AppBar
                onLeftIconButtonTouchTap={this.props.handleToggle}
                style={appBarStyle} />
                <BackgroundVideo />
                <HoverImage />
            </div>
        );
    }
}
