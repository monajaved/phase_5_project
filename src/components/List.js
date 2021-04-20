import React, { Component } from 'react'
import { connect } from 'react-redux'
import Journal from './Journal'

class List extends Component {
    render() {
        const journals = this.props.journals.map( (journal, i) => <Journal key={i} title={journal.title} content={journal.content}/>)
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

export default connect(mapStateToProps)(List)
