import React from 'react';
import ReactDOM from 'react-dom';

const resposive = {
    width: "100%",
    height: "auto",
};

const hackerRankLogo = {
    width: "100%",
    height: "100%",
    position: "absolute",

    display: "flex",
    aligItems: "center",
};


export default class HoverImage extends React.Component {
    render() {
        return(
            <div style={hackerRankLogo}>
                <img src="./assets/img/hackerRankWhite.svg" style={resposive} />
            </div>
        );
    }
}
