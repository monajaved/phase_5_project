import React, { Component } from 'react'

class Journal extends Component {
    render() {
        const { title, content } = this.props;
        return (
            <div>
                <ul>

                    <li>
                        <h3>{ title } </h3>
                        <p> { content }</p>

                    </li>
                </ul>
                
            </div>
        )
    }
}

export default Journal
