import React, { Component } from 'react';
import {connect} from 'react-redux';

class Understanding extends Component{
    //currentPage keeps tracks of the location
    state = {
        understanding : '',
        currentPage : 2
}

handleRating = (event) => {
        console.log('handleRating: ', event.target.value);
        this.setState({
            understanding : event.target.value,
        });
}

//goes to the next page
handleNext = event => {
    if(this.state.understanding > 0){
        this.props.dispatch({type : 'SET_UNDERSTANDING', payload: this.state.understanding});
        this.props.dispatch({type : 'SET_PAGE', payload: this.state.currentPage})
        this.props.history.push('/review');
    }
}
    render(){
        let labelOrRating;
        
        if(this.state.understanding > 0){
            labelOrRating = <div className="ratingText">{this.state.understanding}</div>
        } else {
        labelOrRating = <div className="ratingLabel">
                            <h2>Choose Between 1 - 5</h2>
                            
                        </div>
        }
        return( 
            <div>
                <h1>How well are you understanding the content?</h1>
                {labelOrRating}
                <div className="rating">
                    <button className="score" type="submit" value="1" onClick={this.handleRating}>1</button>
                    <button className="score" type="submit" value="2" onClick={this.handleRating}>2</button>
                    <button className="score" type="submit" value="3" onClick={this.handleRating}>3</button>
                    <button className="score" type="submit" value="4" onClick={this.handleRating}>4</button>
                    <button className="score" type="submit" value="5" onClick={this.handleRating}>5</button>   
                </div>
                <div>
                        <p className="note">With 1 being "the least understanding" and 5 being "the most understanding"</p>
                        <button onClick={this.handleNext} className="next">Next</button>
                </div>
            </div>
        )
    }
}

export default connect()(Understanding);