import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button';


class Journal extends Component {

    
    handleDelete = () => {
        this.props.deleteJournal(this.props)
      
    }


    render() {
        const { id, date, content } = this.props;

      

        return (
            <Grid container spacing={0}>
                <Grid item xs={9}>
                    <Paper elevation ={5}>

                        <div  className="card">
                            <p>{ date }</p>
                                    
                            <p> { content }</p>   
                            <Button color="secondary" onClick={this.handleDelete }>Delete</Button>
                                    
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

export default Journal
