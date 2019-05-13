import React, { Component } from 'react';
import axios from 'axios'
import {connect} from 'react-redux';


class Review extends Component{
    state = {
        flagged : true
    }

    handleEditFeels = (event) => {
        if(this.props.feedback.feeling > 0){
            this.props.history.push('/');
        }
    }
    handleEditStand = (event) => {
        if(this.props.feedback.understanding > 0){
            this.props.history.push('/understanding');
        }
    }
    handleEditSupport = (event) => {
        if(this.props.feedback.support > 0){
            this.props.history.push('/support');
        }
    }
    handleEditComments = (event) => {
        if(this.props.feedback.comments !== ''){
            this.props.history.push('/comments');
        }
    }

    handleUrgent = (event) => {
        console.log('Urgent', this.state.flagged);
            
        this.setState({
            flagged : !this.state.flagged
        });
        this.props.dispatch({type : 'SET_URGENT', payload: this.state.flagged})
        
    }

    handleSubmit = event => {
        if(this.props.navigate.currentPage === 4){
            axios.post('/feedback', {feedback: this.props.feedback})
            .then(response => {
                this.props.history.push('/'); 
            })
            .catch(err => {
                alert(err)
            })
    
        }
    }

    handleNext = event => {
        if(this.props.navigate.currentPage === 3){
            this.props.history.push('/comments');
        }else if (this.props.navigate.currentPage === 2){
            this.props.history.push('/support');
        }else if (this.props.navigate.currentPage === 1){
            this.props.history.push('/understanding');
        }
    }

    render(){
        let nextOrSubmit;

        if(this.props.navigate.currentPage === 4){
            nextOrSubmit = <div className="submitBtn"><button onSubmit={this.handleSubmit}>Submit</button></div>
        } else {
            nextOrSubmit = <div className="nextBtn"><button onClick={this.handleNext} className="next">Next</button></div>
        }
        return( 
        <div>
            <h1>Review Your Feedback</h1>
            <div>
            <p>Feelings: {this.props.feedback.feeling} <button onClick={this.handleEditFeels}>edit</button></p>
            <p>Understanding: {this.props.feedback.understanding} <button onClick={this.handleEditStand}>edit</button></p>
            <p>Support: {this.props.feedback.support} <button onClick={this.handleEditSupport}>edit</button></p>
            </div>
            <div>
            <p>Comments: {this.props.feedback.comments}<button onClick={this.handleEditComments}>edit</button></p>
            <p> Urgent Contact: </p>
            </div>
            <div>
                <button onClick={this.handleUrgent}>I Need Someone to Contact Me.</button>
            </div>
            <div>
                <p>Please go to the next section to input feedback.</p>
                {nextOrSubmit}
            </div>
        </div>
        )
    }
}


const mapReduxStateTOProps = (reduxState) =>{
//shortcut for {reduxState : reduxState} or this.props.reduxState
return{
    feedback : reduxState.moraleReducer,
    navigate : reduxState.pageReducer
}
};
export default connect(mapReduxStateTOProps)(Review);