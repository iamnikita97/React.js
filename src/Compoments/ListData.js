import React from 'react';



export default function ListData(props) {
    const state = props.state;
    return (
        state.allRecords.map((item, index) =>
            <p key={index.toString()}> {item.id} {item.firstName} {item.lastName} {item.gender} {item.email} </p>
        )


    );
}
