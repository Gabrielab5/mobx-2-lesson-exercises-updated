import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import ResInput from './ResInput';
import Reservation from './Reservation';

class Restaurant extends Component{
    render () {
        const { RestaurantStore, GeneralStore } = this.props;
        const handleAddRes = () => {
            RestaurantStore.addRes(GeneralStore.name, GeneralStore.numPeople);
        };
        return (
            <div>
                <h4><span>You have {RestaurantStore.openTables} open tables</span></h4>
                <h4><span>you have {RestaurantStore.restPopulation} people in the restaurant</span></h4>
                <h4><span>you have {RestaurantStore.completedTables} completed tables</span></h4>
                <ResInput/>
                <button id="addRes" onClick={handleAddRes}>Add Reservation</button>
                <div className = "reservations">
                {RestaurantStore.reservations.map(res => (
                    <Reservation 
                        key={res.id} 
                        res={res}  
                        seatRes={RestaurantStore.seatRes}
                        completeRes={RestaurantStore.completeRes}
                    />
                ))}
                </div>
            </div>
        )
    }
}

export default inject("GeneralStore", "RestaurantStore")(observer(Restaurant))