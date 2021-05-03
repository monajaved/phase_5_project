import React, { Component } from 'react'
import { addJournal } from '../actions/getJournals'
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button';


class Form extends Component {
    state= {
        content: "",
        date: "",
        locationId: this.props.locationId,
        formSubmitted: false
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    toggleSubmit = () => {
        this.setState(prevState => ({
            formSubmitted: !prevState.formSubmitted
          }))
    }

    handleSubmit = e => {
        e.preventDefault();
        this.toggleSubmit()
        // console.log(this.state )
        this.props.addJournal(this.state, this.props.history);
    }
    render() {
        return  (
            <div>

                {this.state.formSubmitted? 
                <div><h3>Form Submitted!</h3></div>
                : 
                <div>
                    <h3 className="dataName">Create A New Entry</h3>
                    <form onSubmit ={this.handleSubmit}> 
                        <div><br></br>
                            <label htmlFor="date">Date:</label><br></br>
                            <input type="date" id="date" name="date" onChange={this.handleChange} value={this.state.date} /><br></br>
                        </div>
                        <div><br></br>
                            <label htmlFor="content">Content:</label><br></br>
                            <textarea id="content" name="content" onChange={this.handleChange} value={this.state.content}></textarea>
                        </div><br></br>
                        <Button color="primary" type="submit" value="Add">Add
                            
                            </Button>
                    </form>
                </div>}

            </div>
        )
    }
}

export default connect(null, { addJournal})(Form)
