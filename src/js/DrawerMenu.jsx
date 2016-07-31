import React from 'react';
import ReactDOM from 'react-dom';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';

export default class DrawerMenu extends React.Component {
    constructor(props) {
        super(props);
        this.algorithmsWarmupItems = [
            <ListItem key={1} primaryText="Solve Me First" />,
            <ListItem key={2} primaryText="Simple Array Sum" />,
            <ListItem key={3} primaryText="Compare The Triplets" />,
            <ListItem key={4} primaryText="A Very Big Sum" />,
            <ListItem key={5} primaryText="Diagonal Difference" />,
            <ListItem key={6} primaryText="Plus Minus" />,
            <ListItem key={7} primaryText="Staircase" />,
            <ListItem key={8} primaryText="Time Convertion" />,
            <ListItem key={9} primaryText="Circular Array Rotation" />
        ];
        this.algorithmsItems = [
            <ListItem key={1} primaryText="Warmup" nestedItems={this.algorithmsWarmupItems} />,
            <ListItem key={2} primaryText="Implementation" />,
            <ListItem key={3} primaryText="Strings" />,
            <ListItem key={4} primaryText="Sorting" />,
            <ListItem key={5} primaryText="Serch" />,
            <ListItem key={6} primaryText="Graph Theory" />,
            <ListItem key={7} primaryText="Greedy" />,
            <ListItem key={8} primaryText="Dynamic Programming" />,
            <ListItem key={9} primaryText="Bit Manipulation" />,
            <ListItem key={10} primaryText="Game Theory" />,
            <ListItem key={11} primaryText="NP Complete" />
        ];
    }

    render() {
        return(
            <div>
                <Drawer width={280} open={this.props.isDrawerOpen}>
                    <AppBar onLeftIconButtonTouchTap={this.props.handleToggle} />
                    <List>
                        <ListItem primaryText="Algorithms" nestedItems={this.algorithmsItems} />
                        <ListItem primaryText="Data Strutures" />
                        <ListItem primaryText="Mathematics" />
                        <ListItem primaryText="Artificial Intelligence" />
                        <ListItem primaryText="Distributed Systems" />
                        <ListItem primaryText="Functional Programming" />
                        <ListItem primaryText="Regex" />
                        <ListItem primaryText="Security" />
                    </List>
                </Drawer>
            </div>
        );
    }
}
