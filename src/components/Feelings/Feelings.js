import React, { Component } from 'react';
import {connect} from 'react-redux';

class Feelings extends Component{
        state = {
                feeling : '',
                currentPage : 1
        }

        handleRating = (event) => {
                console.log('handleRating: ', event.target.value);
                this.setState({
                        feeling : event.target.value,
                });
        }
        handleNext = (event) => {
                if(this.state.feeling > 0){
                        this.props.dispatch({type : 'SET_FEELING', payload: this.state.feeling});
                        this.props.dispatch({type : 'SET_PAGE', payload: this.state.currentPage});
                        this.props.history.push('/review');
                }
        }
            
        render(){
        let labelOrRating;

        if(this.state.feelings > 0){
            labelOrRating = <div className="ratingText">{this.state.feelings}</div>
        } else {
        labelOrRating = <div className="ratingLabel">
                            <h2>Choose Between 1 - 5</h2>
                            <p>With 1 being feeling the worst and 5 being feeling the best</p>
                        </div>
        }
                return( 
                        <div>
                                <h1>How are you feeling today?</h1>
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

export default connect()(Feelings);