import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'

class Reservation extends Component  {
    render() {
        const { res, seatRes, completeRes } = this.props;
        const conditionalClass = res.completed ? "conditional" : "";
        const isSeated = res.seated;
        const isCompleted = res.completed;
        return (
            <div className={`reservation ${conditionalClass}`}>
                <h4>Name: {res.name}</h4>
                <p>People: {res.numPeople}</p>
                {/* Render the "seat" button only if the reservation is not yet seated */}
                {!isSeated && (
                    <button onClick={() => seatRes(res.id)}>
                        Seat Table
                    </button>
                )}
                {/* Render the "complete" button only if the reservation is seated but not yet completed */}
                {isSeated && !isCompleted && (
                    <button onClick={() => completeRes(res.id)}>
                        Complete order
                    </button>
                )}
            </div>
        )
    }
}

//inject your store here
export default observer(Reservation)