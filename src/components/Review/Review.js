import React, { Component } from 'react';
import {connect} from 'react-redux';


class Review extends Component{
    state = {
        goToFeelings : this.props.history.push('/feelings'),
        goToUnderstanding : this.props.history.push('/understanding'),
        goToSupport : this.props.history.push('/support'),
        goToComments : this.props.history.push('/comment'),
    }
    
    render(){
 
        return( 
        <div>
            <h1>Review Your Feedback</h1>
            <div>
            <p>Feelings: {this.props.feedback.feelings}</p>
            <p>Understanding: {this.props.feedback.understanding}</p>
            <p>Support: {this.props.feedback.support}</p>
            </div>
            <div>
            <p>Comments: {this.props.feedback.comments}</p>
            </div>
            <div>
                <button onClick={this.handleNext} className="next">Next</button>
            </div>
        </div>
        )
    }
}


const mapReduxStateTOProps = (reduxState) =>{
//shortcut for {reduxState : reduxState} or this.props.reduxState
return{
    feedback : reduxState.moraleReducer
}
};
export default connect(mapReduxStateTOProps)(Review);