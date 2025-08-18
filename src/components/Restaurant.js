import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import ResInput from './ResInput';
import Reservation from './Reservation';

class Restaurant extends Component{
    render () {
        const { RestaurantStore } = this.props;
        return (
            <div>
                <h4><span>You have {RestaurantStore.openTables} open tables</span></h4>
                <h4><span>you have {RestaurantStore.restPopulation} people in the restaurant</span></h4>
                <h4><span>you have {RestaurantStore.completedTables} completed tables</span></h4>
                <ResInput/>
                <button id="addRes" onClick={RestaurantStore.addRes("New Reservation", 2)}>Add Reservation</button>
                <div className = "reservations">
                {RestaurantStore.reservations.map(res => (
                    <Reservation 
                        key={res.id} 
                        Reservation={res}  
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