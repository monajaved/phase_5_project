import React, { Component } from 'react'
import { connect } from 'react-redux'
import Journal from './Journal'
import { deleteJournal } from '../actions/getJournals'



class ListFiltered extends Component {


    render() {
        const journals = this.props.journals.map( journal => journal.locationId === this.props.locationId && 
        <Journal key={journal.id} date={journal.date} content={journal.content} id={journal.id} deleteJournal={this.props.deleteJournal} />)

        return (
            <div>
                {journals}
                <p></p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        journals: state.journals
    }

}



export default connect(mapStateToProps, {deleteJournal})(ListFiltered)
