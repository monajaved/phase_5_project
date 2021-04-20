import React, { Component } from 'react'
import { addJournal } from '../actions/getJournals'
import {connect} from 'react-redux'

class Form extends Component {
    state= {
        title: "",
        content: ""
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addJournal(this.state, this.props.history);
         

    }
    render() {
        return (
            <div>
                <h3>Create a new entry</h3>
                <form onSubmit ={this.handleSubmit}> 
                    <div>
                        <label htmlFor="title">Title:</label><br></br>
                        <input type="text" id="title" name="title" onChange={this.handleChange} value={this.state.title} /><br></br>
                    </div>
                    <div><br></br>
                        <label htmlFor="content">Content:</label><br></br>
                        <textarea id="content" name="content" onChange={this.handleChange} value={this.state.content}></textarea>
                    </div><br></br>
                    <input type="submit" value="Create a New entry" />
                </form>
            </div>
        )
    }
}

export default connect(null, { addJournal })(Form)
