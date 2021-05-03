import React, { Component } from 'react'
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import locationData from './LocationData'
import Button from '@material-ui/core/Button';
import Form from './Form'
import ListFiltered from './ListFiltered';
import { Container } from '@material-ui/core';


class Home extends Component {
    state = {
        showForm: false,
        hideButton: false,

    }

    renderForm = () => {
        this.setState(prevState => ({
            showForm: !prevState.showForm,
            hideButton: !prevState.hideButton
          }))
    }



    render() {
        // console.log(locationData)
        return (
            <Container fixed>
            <div>
                <h3 className="description"> Log your memories as journal entries in the locations provided below </h3>
               
                
                 
                <MapContainer center={[47.60599935212941, -121.23108593852026]} zoom={8.5} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {locationData.map(data => {
                return (<Marker position={[47.60599935212941, -122.33108593852026]} 
                key ={data.id}
                position={[data.latitude, data.longitude]}>
                    <Popup position={[data.latitude, data.longitude]}>
                        <div>
                            <h3 className="dataName">{data.name}</h3>
                            <p className="dataName">{data.info}</p>
                            <ListFiltered locationId={data.id}/>
                            <Button variant="outlined" color="primary" size="small" onClick={this.renderForm}>{ this.state.hideButton ? "Hide" : "Show Form" }</Button>
                            {this.state.showForm && (<Form locationId={data.id}/>)}
                        </div>
                    </Popup>
                </Marker>)
            })}
            </MapContainer>
            <h3 className="description"> Just click on any pointer and fill in the form to create a travel journal</h3><br></br><br></br><br></br><br></br>
            </div>
          
</Container>
        )
    }
}

export default Home
