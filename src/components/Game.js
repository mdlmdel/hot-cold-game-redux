import React from 'react';
import { connect } from 'react-redux'; 
import { Grid } from 'semantic-ui-react'

import GuessesList from './GuessesList';
import AlertBox from './AlertBox';

import { guessNumber } from "../actions/actions";

class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            number: ""
        }
        // State is only accessible here unless you include it via props elsewhere
        // To change the state above when someone types, create an onChange event.
    }
    
    _onChangeNumber = e => this.setState({
        number: e.target.value
    })

    _formSubmit = e => {
        e.preventDefault(); 
        this.props.guessNumber(this.state.number);
    }

    render() {
    console.log(this.props);
    return (
    <div className="Game">
    <Grid divided='vertically'>
    <Grid.Row columns={1}>
      
        <Grid.Column>
        <form onSubmit={this._formSubmit} className="center">
            <input 
            onChange={this._onChangeNumber}
            placeholder="Enter your guess" 
            value={this.state.number}
            className="Guess"
            />
        </form>
        </Grid.Column>
        </Grid.Row>
        <Grid.Row>
        <Grid.Column>
            <AlertBox backgroundColor={this.props.alertBox.backgroundColor} text={this.props.alertBox.text} />
        </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
        <Grid.Column className="center">
        <hr/>
        <GuessesList guesses={this.props.guesses} />
        </Grid.Column>
        </Grid.Row>
    </Grid>
    </div>
  )
  }
}

// Need to export default using connect at the bottom --> Connect doesn't work at the top syntax-wise; it's a higher order function
// Below is the same as map state to props; this is simpler / inline
export default connect(
    state => ({
        guesses: state.guesses, 
        alertBox: state.alertBox
    }), 
    { guessNumber }
)(Game)