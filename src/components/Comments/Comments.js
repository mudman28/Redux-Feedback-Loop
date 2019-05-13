import React, { Component } from 'react';
import {connect} from 'react-redux';


class Comments extends Component{
    state = {
        comments : ''
      };

    handleChange = (event) => {
        console.log('comments are', this.state.comments);
            
        this.setState({
            comments : event.target.value
                
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        //second param
        this.props.dispatch({type: 'SET_COMMENTS', payload: this.state.comments});
        this.props.history.push('/review')
    }

    render(){
        return( 
            <div>
                <h1>Any comments you want to leave?</h1>
                <form onSubmit={this.handleSubmit}>
                    <input className="commentSection" type="text area" onChange={this.handleChange} placeholder="Please Let Us Know What Is On Your Mind" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default connect()(Comments)