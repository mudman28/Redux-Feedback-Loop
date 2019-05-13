import React, { Component } from 'react';
import {connect} from 'react-redux';


class Comments extends Component{
    state = {
        comments : '',
        currentPage : 4
      };

    handleChange = (event) => {
        console.log('comments are', this.state.comments);
            
        this.setState({
            comments : event.target.value
                
        });
    }

    handleSubmit = (event) => {
        if(this.state.comments !== ''){
        event.preventDefault();
        this.props.dispatch({type: 'SET_COMMENTS', payload: this.state.comments});
        this.props.dispatch({type : 'SET_PAGE', payload: this.state.currentPage})
        this.props.history.push('/review')
        }
    }

    handleNext = (event) => {
        this.props.dispatch({type: 'SET_COMMENTS', payload: "I don't have anything to add at this time."});
        this.props.dispatch({type : 'SET_PAGE', payload: this.state.currentPage})
        this.props.history.push('/review');
    }

    render(){
        let showNext;

        if(this.state.comments === ''){
            showNext =  <div>
                            <h3>If you don't want to comment just click 'Next'</h3>
                            <button onClick={this.handleNext} className="next">Next</button>
                        </div>
        } else {
            showNext =   <div className="fade-in">
                            <h3>Please let us know about any issues you have and any ways we can help you.</h3>
                        </div>
        }
        return( 
            <div>
                <h1>Any comments you want to leave?</h1>
                <p>Please Share: {this.state.comments}</p>
                <form onSubmit={this.handleSubmit}>
                    <input className="commentSection" type="text area" onChange={this.handleChange} placeholder="Please Let Us Know What Is On Your Mind" />
                    <button type="submit">Submit</button>
                </form>
                {showNext}
            </div>
        )
    }
}
export default connect()(Comments)