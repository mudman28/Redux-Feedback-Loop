import React, { Component } from 'react';
import {connect} from 'react-redux';


class Support extends Component{
    state = {
        support : ''
}

handleRating = (event) => {
        console.log('handleRating: ', event.target.value);
        this.setState({
                support : event.target.value,
        });
}
handleNext = event => {
    if(this.state.support > 0){
        this.props.dispatch({type : 'SET_SUPPORT', payload: this.state.support});
        this.props.history.push('/review');
    }
}

    render(){
        let labelOrRating;

        if(this.state.support > 0){
            labelOrRating = <div className="ratingText">{this.state.support}</div>
        } else {
        labelOrRating = <div className="ratingLabel">
                            <h2>Choose Between 1 - 5</h2>
                            <p>with 1 being the least supportive and 5 being the most supportive</p>
                        </div>
        }
        return( 
            <div>
                <h1>How well are you being supported?</h1>
                {labelOrRating}
                <div className="rating">
                    <button className="score" type="submit" value="1" onClick={this.handleRating}>1</button>
                    <button className="score" type="submit" value="2" onClick={this.handleRating}>2</button>
                    <button className="score" type="submit" value="3" onClick={this.handleRating}>3</button>
                    <button className="score" type="submit" value="4" onClick={this.handleRating}>4</button>
                    <button className="score" type="submit" value="5" onClick={this.handleRating}>5</button>   
                </div>
                <div>
                        <button onClick={this.handleNext} className="next">Next</button>
                </div>
            </div>
        )
    }
}

export default connect()(Support);