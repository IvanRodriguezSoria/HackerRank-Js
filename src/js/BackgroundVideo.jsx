import React from 'react';
import RectDOM from 'react-dom';

const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    minWidth: "100%",
    minHeight: "100%",
    width: "auto",
    height: "auto",
    zIndex: "-100",
    mozTransform: "translateX(-50%) translateY(-50%)",
    msTransform: "translateX(-50%) translateY(-50%)",
    webkitTransform: "translateX(-50%) translateY(-50%)",
    transform: "translateX(-50%) translateY(-50%)",
}

export default class BackgroundVideo extends React.Component {
    render() {
        return(
            <video autoPlay muted loop style={style} poster="./assets/video/abcd/abcd.jpg">
                <source src="./assets/video/abcd/abcd.webm" type="video/webm" />
                <source src="./assets/video/abcd/abcd.mp4" type="video/mp4" />
            </video>
        );
    }
}
